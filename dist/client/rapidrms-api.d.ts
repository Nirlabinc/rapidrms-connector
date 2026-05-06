/**
 * RapidRMS API Client
 * GET/POST wrapper with automatic auth, token refresh, and error handling
 */
import { RapidRMSCredentials } from '../types.js';
interface ApiRequestOptions {
    retries?: number;
    dbName?: string;
}
interface ApiResponse<T = any> {
    status: number;
    data: T;
    raw: string;
}
export declare class RapidRMSClient {
    private credentials;
    private clientKey;
    constructor(credentials: RapidRMSCredentials, clientKey?: string);
    /**
     * GET request to RapidRMS API
     */
    get<T = any>(path: string, params?: Record<string, any>, options?: ApiRequestOptions): Promise<ApiResponse<T>>;
    /**
     * POST request to RapidRMS API
     */
    post<T = any>(path: string, body: Record<string, any>, params?: Record<string, any>, options?: ApiRequestOptions): Promise<ApiResponse<T>>;
    /**
     * PUT request to RapidRMS API
     */
    put<T = any>(path: string, body: Record<string, any>, params?: Record<string, any>, options?: ApiRequestOptions): Promise<ApiResponse<T>>;
    /**
     * Convenience: GET InvoiceReport (sales data)
     */
    getSales(params?: {
        FromDate?: string;
        ToDate?: string;
        LocationID?: string;
        EmployeeID?: string;
    }): Promise<ApiResponse<any>>;
    /**
     * Convenience: GET Item (inventory)
     */
    getInventory(params?: {
        ItemID?: string;
        Category?: string;
    }): Promise<ApiResponse<any>>;
    /**
     * Convenience: GET Vendor
     */
    getVendors(): Promise<ApiResponse<any>>;
    /**
     * Convenience: GET Department
     */
    getDepartments(): Promise<ApiResponse<any>>;
}
export {};
