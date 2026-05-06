/**
 * RapidRMS Authentication
 * Handles Bearer token generation and refresh
 * Same auth flow as shre-rapidrms
 */
import { RapidRMSCredentials } from '../types.js';
/**
 * Get valid token, refreshing if needed
 */
export declare function getAuth(credentials: RapidRMSCredentials, clientKey?: string): Promise<{
    token: string;
    dbName: string;
}>;
/**
 * Clear cached token to force re-auth on next request
 */
export declare function clearAuthCache(clientKey?: string): void;
/**
 * Load credentials from environment variables
 */
export declare function getCredentialsFromEnv(): RapidRMSCredentials;
