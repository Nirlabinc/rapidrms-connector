/**
 * RapidRMS Authentication
 * Handles Bearer token generation and refresh
 * Same auth flow as shre-rapidrms
 */
import { createLogger } from '../utils/logger.js';
const log = createLogger('rapidrms-auth');
const TOKEN_TTL_MS = 540_000; // 9 minutes (token valid 10 min)
const _tokenCache = new Map();
/**
 * Get cached auth or create new one
 */
function getCache(clientKey) {
    if (!_tokenCache.has(clientKey)) {
        _tokenCache.set(clientKey, {
            token: null,
            dbName: null,
            expiresAt: 0,
            creds: null,
        });
    }
    return _tokenCache.get(clientKey);
}
/**
 * Authenticate with RapidRMS and get Bearer token
 * POST /api/Login/Auth with grant_type=token
 */
async function authenticate(credentials, clientKey) {
    const { apiBaseUrl, clientId, email, password } = credentials;
    const url = `${apiBaseUrl}/api/Login/Auth`;
    const payload = {
        grant_type: 'token',
        client_id: String(clientId),
        Username: email,
        Password: password,
    };
    log.debug('Authenticating RapidRMS', { clientId, email });
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
    if (!res.ok) {
        log.error('Auth request failed', { status: res.status, clientId });
        throw new Error(`RapidRMS auth failed: HTTP ${res.status}`);
    }
    const envelope = (await res.json());
    if (envelope.code !== '999') {
        log.error('Auth rejected', { code: envelope.code, clientId });
        throw new Error(`RapidRMS auth rejected: ${envelope.code}`);
    }
    const authData = typeof envelope.data === 'string' ? JSON.parse(envelope.data) : envelope.data;
    const cache = getCache(clientKey);
    cache.token = authData.access_token;
    cache.dbName = authData.DbName;
    cache.expiresAt = Date.now() + TOKEN_TTL_MS;
    log.info('Authenticated successfully', { clientId, dbName: authData.DbName });
    return { token: cache.token, dbName: cache.dbName };
}
/**
 * Get valid token, refreshing if needed
 */
export async function getAuth(credentials, clientKey = 'default') {
    const cache = getCache(clientKey);
    cache.creds = credentials;
    // Token still valid
    if (cache.token && Date.now() < cache.expiresAt) {
        return { token: cache.token, dbName: cache.dbName };
    }
    // Need to refresh
    return authenticate(credentials, clientKey);
}
/**
 * Clear cached token to force re-auth on next request
 */
export function clearAuthCache(clientKey = 'default') {
    const cache = getCache(clientKey);
    cache.token = null;
    cache.dbName = null;
    cache.expiresAt = 0;
    log.debug('Cleared auth cache', { clientKey });
}
/**
 * Load credentials from environment variables
 */
export function getCredentialsFromEnv() {
    const clientId = process.env.RAPIDRMS_CLIENT_ID;
    const email = process.env.RAPIDRMS_EMAIL;
    const password = process.env.RAPIDRMS_PASSWORD;
    const apiBaseUrl = process.env.RAPIDRMS_API_BASE || 'https://rapidrmsapi.azurewebsites.net';
    if (!clientId || !email || !password) {
        throw new Error('Missing RapidRMS credentials. Set: RAPIDRMS_CLIENT_ID, RAPIDRMS_EMAIL, RAPIDRMS_PASSWORD');
    }
    return {
        clientId: parseInt(clientId),
        email,
        password,
        apiBaseUrl,
        storeName: process.env.RAPIDRMS_STORE_NAME || 'Unknown Store',
        environment: process.env.RAPIDRMS_ENVIRONMENT || 'PRODUCTION',
    };
}
