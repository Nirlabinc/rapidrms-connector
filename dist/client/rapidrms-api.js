/**
 * RapidRMS API Client
 * GET/POST wrapper with automatic auth, token refresh, and error handling
 */
import { getAuth, clearAuthCache } from './auth.js';
import { createLogger } from '../utils/logger.js';
const log = createLogger('rapidrms-api');
/**
 * Build standard headers for RapidRMS API
 */
function buildHeaders(token, dbName) {
    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };
    if (dbName) {
        headers['DbName'] = dbName;
    }
    return headers;
}
/**
 * Build URL with query parameters
 */
function buildUrl(baseUrl, path, params) {
    const url = new URL(path, baseUrl);
    if (params) {
        for (const [key, value] of Object.entries(params)) {
            if (value !== undefined && value !== null) {
                url.searchParams.set(key, String(value));
            }
        }
    }
    return url.toString();
}
/**
 * Parse fetch response into structured format
 */
async function parseResponse(res) {
    const raw = await res.text();
    let data;
    try {
        data = JSON.parse(raw);
    }
    catch {
        data = raw;
    }
    return { status: res.status, data, raw };
}
export class RapidRMSClient {
    credentials;
    clientKey = 'default';
    constructor(credentials, clientKey) {
        this.credentials = credentials;
        if (clientKey)
            this.clientKey = clientKey;
    }
    /**
     * GET request to RapidRMS API
     */
    async get(path, params, options = {}) {
        const { retries = 1, dbName } = options;
        const auth = await getAuth(this.credentials, this.clientKey);
        const url = buildUrl(this.credentials.apiBaseUrl, path, params);
        const headers = buildHeaders(auth.token, dbName || auth.dbName);
        log.debug('GET request', { path, url: url.substring(0, 100) });
        const res = await fetch(url, { method: 'GET', headers });
        // Retry on 401 (token expired)
        if (res.status === 401 && retries > 0) {
            log.debug('Got 401, refreshing token and retrying', { path });
            clearAuthCache(this.clientKey);
            return this.get(path, params, { ...options, retries: retries - 1 });
        }
        return parseResponse(res);
    }
    /**
     * POST request to RapidRMS API
     */
    async post(path, body, params, options = {}) {
        const { retries = 1, dbName } = options;
        const auth = await getAuth(this.credentials, this.clientKey);
        const url = buildUrl(this.credentials.apiBaseUrl, path, params);
        const headers = buildHeaders(auth.token, dbName || auth.dbName);
        log.debug('POST request', { path });
        const res = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(body),
        });
        // Retry on 401
        if (res.status === 401 && retries > 0) {
            log.debug('Got 401, refreshing token and retrying', { path });
            clearAuthCache(this.clientKey);
            return this.post(path, body, params, { ...options, retries: retries - 1 });
        }
        return parseResponse(res);
    }
    /**
     * PUT request to RapidRMS API
     */
    async put(path, body, params, options = {}) {
        const { retries = 1, dbName } = options;
        const auth = await getAuth(this.credentials, this.clientKey);
        const url = buildUrl(this.credentials.apiBaseUrl, path, params);
        const headers = buildHeaders(auth.token, dbName || auth.dbName);
        log.debug('PUT request', { path });
        const res = await fetch(url, {
            method: 'PUT',
            headers,
            body: JSON.stringify(body),
        });
        if (res.status === 401 && retries > 0) {
            clearAuthCache(this.clientKey);
            return this.put(path, body, params, { ...options, retries: retries - 1 });
        }
        return parseResponse(res);
    }
    /**
     * Convenience: GET InvoiceReport (sales data)
     */
    async getSales(params) {
        return this.get('/api/InvoiceReport', params);
    }
    /**
     * Convenience: GET Item (inventory)
     */
    async getInventory(params) {
        return this.get('/api/Item', params);
    }
    /**
     * Convenience: GET Vendor
     */
    async getVendors() {
        return this.get('/api/Vendor');
    }
    /**
     * Convenience: GET Department
     */
    async getDepartments() {
        return this.get('/api/Department');
    }
}
