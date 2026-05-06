/**
 * Type definitions for RapidRMS Connector
 */

export interface RapidRMSCredentials {
  clientId: number;
  email: string;
  password: string;
  apiBaseUrl: string;
  storeName?: string;
  branchCode?: string;
  environment?: 'PRODUCTION' | 'STAGING' | 'QA';
}

export interface AuthToken {
  access_token: string;
  token_type?: string;
  expires_in?: number;
  DbName: string;
}

export interface RapidRMSResponse<T = any> {
  code: string;
  data: T;
  message?: string;
}

export interface InvoiceReport {
  InvoiceNo: string;
  InvoiceDate: string;
  InvoiceTime: string;
  Amount: number;
  EmployeeID: string;
  EmployeeName: string;
  LocationID?: string;
  DepartmentID?: string;
  Quantity?: number;
}

export interface SalesData {
  totalRevenue: number;
  totalTransactions: number;
  invoices: InvoiceReport[];
  period: {
    startDate: string;
    endDate: string;
  };
}

export interface Item {
  ItemID: string;
  ItemName: string;
  CurrentStock?: number;
  MinStock?: number;
  MaxStock?: number;
  Category?: string;
  Price?: number;
  LastStockUpdate?: string;
}

export interface Inventory {
  items: Item[];
  totalItems: number;
  lowStockItems: Item[];
  outOfStockItems: Item[];
}

export interface Vendor {
  VendorID: string;
  VendorName: string;
  ContactPerson?: string;
  Email?: string;
  Phone?: string;
  Address?: string;
}

export interface Department {
  DepartmentID: string;
  DepartmentName: string;
  Description?: string;
}

export interface AlertEvent {
  AlertID: string;
  AlertType: 'LOW_STOCK' | 'HIGH_SHRINKAGE' | 'DEAD_STOCK' | 'SALES_DROP' | 'PRICE_ALERT';
  Severity: 'INFO' | 'WARNING' | 'CRITICAL';
  Message: string;
  AffectedItems?: string[];
  CreatedAt: string;
  ResolvedAt?: string;
}

export interface ToolResult {
  content: string;
  is_error?: boolean;
  metadata?: Record<string, unknown>;
}

export interface ToolInput {
  [key: string]: any;
}
