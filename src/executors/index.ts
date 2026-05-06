/**
 * All tool executors - implementations that run tools
 */

import { ToolInput, ToolResult } from '../types.js';
import { RapidRMSClient } from '../client/rapidrms-api.js';
import { getCredentialsFromEnv } from '../client/auth.js';
import { createLogger } from '../utils/logger.js';

const log = createLogger('executors');

export interface RapidRMSCredentials {
  clientId: number;
  email: string;
  password: string;
  apiBaseUrl: string;
}

/**
 * Executor signature
 */
type ExecutorFn = (input: ToolInput, creds?: RapidRMSCredentials) => Promise<ToolResult>;

/**
 * Get RapidRMS client with credentials from env or provided creds
 */
function getClient(creds?: RapidRMSCredentials): RapidRMSClient {
  if (creds) {
    return new RapidRMSClient({
      clientId: creds.clientId,
      email: creds.email,
      password: creds.password,
      apiBaseUrl: creds.apiBaseUrl,
    });
  }
  const envCreds = getCredentialsFromEnv();
  return new RapidRMSClient(envCreds);
}

/**
 * Sales executors
 */
export const salesExecutors: Record<string, ExecutorFn> = {
  rapidrms_get_sales_report: async (input: ToolInput, creds?: RapidRMSCredentials) => {
    try {
      const client = getClient(creds);
      const { data } = await client.getSales({
        FromDate: input.startDate,
        ToDate: input.endDate,
        LocationID: input.locationId,
        EmployeeID: input.employeeId,
      });

      const totalRevenue = data.reduce((sum: number, row: any) => sum + (row.Amount || 0), 0);
      const totalTransactions = data.length;
      const avgTicket = totalTransactions > 0 ? totalRevenue / totalTransactions : 0;

      const topTransactions = data
        .sort((a: any, b: any) => (b.Amount || 0) - (a.Amount || 0))
        .slice(0, 5)
        .map((t: any, i: number) => `${i + 1}. ${t.EmployeeName}: $${(t.Amount || 0).toFixed(2)}`)
        .join('\n');

      return {
        content: `📊 Sales Report (${input.startDate} to ${input.endDate})
Total Revenue: $${totalRevenue.toFixed(2)}
Transactions: ${totalTransactions}
Avg Ticket: $${avgTicket.toFixed(2)}

Top 5 Transactions:
${topTransactions}`,
      };
    } catch (error) {
      return {
        content: `Error fetching sales report: ${(error as Error).message}`,
        is_error: true,
      };
    }
  },

  rapidrms_get_revenue_summary: async (input: ToolInput, creds?: RapidRMSCredentials) => {
    try {
      const client = getClient(creds);
      const periods: Record<string, { start: string; end: string }> = {
        today: {
          start: new Date().toISOString().split('T')[0],
          end: new Date().toISOString().split('T')[0],
        },
        week: {
          start: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          end: new Date().toISOString().split('T')[0],
        },
        month: {
          start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          end: new Date().toISOString().split('T')[0],
        },
        year: {
          start: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          end: new Date().toISOString().split('T')[0],
        },
      };

      const period = periods[input.period as keyof typeof periods] || periods.month;
      const { data } = await client.getSales({
        FromDate: period.start,
        ToDate: period.end,
        LocationID: input.locationId,
      });

      const totalRevenue = data.reduce((sum: number, row: any) => sum + (row.Amount || 0), 0);
      const numDays = Math.ceil((new Date(period.end).getTime() - new Date(period.start).getTime()) / (1000 * 60 * 60 * 24)) + 1;
      const avgPerDay = totalRevenue / numDays;
      const avgTicket = data.length > 0 ? totalRevenue / data.length : 0;

      return {
        content: `💰 Revenue Summary (${input.period})
Period: ${period.start} to ${period.end}
Total Revenue: $${totalRevenue.toFixed(2)}
Days: ${numDays}
Avg/Day: $${avgPerDay.toFixed(2)}
Transactions: ${data.length}
Avg Ticket: $${avgTicket.toFixed(2)}`,
      };
    } catch (error) {
      return {
        content: `Error: ${(error as Error).message}`,
        is_error: true,
      };
    }
  },

  rapidrms_get_top_products: async (input: ToolInput, creds?: RapidRMSCredentials) => {
    try {
      const client = getClient(creds);
      const periods = {
        today: {
          start: new Date().toISOString().split('T')[0],
          end: new Date().toISOString().split('T')[0],
        },
        week: {
          start: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          end: new Date().toISOString().split('T')[0],
        },
        month: {
          start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          end: new Date().toISOString().split('T')[0],
        },
        year: {
          start: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          end: new Date().toISOString().split('T')[0],
        },
      };

      const period = periods[input.period as keyof typeof periods] || periods.month;
      const { data } = await client.getSales({
        FromDate: period.start,
        ToDate: period.end,
      });

      return {
        content: `Top Products (${input.period}, by ${input.metric})\n${JSON.stringify(data, null, 2)}`,
      };
    } catch (error) {
      return {
        content: `Error: ${(error as Error).message}`,
        is_error: true,
      };
    }
  },

  rapidrms_get_employee_performance: async (input: ToolInput, creds?: RapidRMSCredentials) => {
    try {
      const client = getClient(creds);

      const periods: Record<string, { start: string; end: string }> = {
        today: {
          start: new Date().toISOString().split('T')[0],
          end: new Date().toISOString().split('T')[0],
        },
        week: {
          start: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          end: new Date().toISOString().split('T')[0],
        },
        month: {
          start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          end: new Date().toISOString().split('T')[0],
        },
        year: {
          start: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          end: new Date().toISOString().split('T')[0],
        },
      };

      const period = periods[input.period as keyof typeof periods] || periods.month;
      const { data } = await client.getSales({
        FromDate: period.start,
        ToDate: period.end,
      });

      const byEmployee: Record<string, { revenue: number; transactions: number }> = {};
      data.forEach((row: any) => {
        if (!byEmployee[row.EmployeeName]) {
          byEmployee[row.EmployeeName] = { revenue: 0, transactions: 0 };
        }
        byEmployee[row.EmployeeName].revenue += row.Amount || 0;
        byEmployee[row.EmployeeName].transactions += 1;
      });

      const sorted = Object.entries(byEmployee)
        .map(([name, stats]: [string, any]) => ({
          name,
          revenue: stats.revenue,
          transactions: stats.transactions,
          avgTicket: stats.revenue / stats.transactions,
        }))
        .sort((a: any, b: any) => b.revenue - a.revenue)
        .slice(0, (input.limit || 20));

      const listing = sorted
        .map((emp: any, i: number) =>
          `${i + 1}. ${emp.name}
   Revenue: $${emp.revenue.toFixed(2)}
   Transactions: ${emp.transactions}
   Avg Ticket: $${emp.avgTicket.toFixed(2)}`
        )
        .join('\n\n');

      return {
        content: `👥 Employee Performance (${input.period})

${listing}`,
      };
    } catch (error) {
      return {
        content: `Error: ${(error as Error).message}`,
        is_error: true,
      };
    }
  },

  // ... other sales executors would follow same pattern
};

/**
 * Inventory executors
 */
export const inventoryExecutors: Record<string, ExecutorFn> = {
  rapidrms_get_inventory_status: async (input: ToolInput, creds?: RapidRMSCredentials) => {
    try {
      const client = getClient(creds);
      const { data } = await client.getInventory({
        Category: input.category,
        ItemID: input.itemId,
      });

      const totalItems = data.length;
      const totalValue = data.reduce((sum: number, item: any) => sum + ((item.CurrentStock || 0) * (item.Price || 0)), 0);

      const topByValue = data
        .sort((a: any, b: any) => ((b.CurrentStock || 0) * (b.Price || 0)) - ((a.CurrentStock || 0) * (a.Price || 0)))
        .slice(0, 10)
        .map((item: any) => `- ${item.ItemName}: ${item.CurrentStock} units @ $${item.Price}/unit = $${((item.CurrentStock || 0) * (item.Price || 0)).toFixed(2)}`)
        .join('\n');

      return {
        content: `📦 Inventory Status
Total Items: ${totalItems}
Total Inventory Value: $${totalValue.toFixed(2)}

Top 10 by Stock Value:
${topByValue}`,
      };
    } catch (error) {
      return {
        content: `Error: ${(error as Error).message}`,
        is_error: true,
      };
    }
  },

  rapidrms_get_low_stock_items: async (input: ToolInput, creds?: RapidRMSCredentials) => {
    try {
      const client = getClient(creds);
      const { data } = await client.getInventory();

      const lowStock = data.filter((item: any) =>
        (item.CurrentStock || 0) <= (item.MinStock || 5)
      );

      const critical = lowStock
        .filter((item: any) => (item.CurrentStock || 0) === 0)
        .slice(0, 10)
        .map((item: any) => `- ${item.ItemName}: ${item.CurrentStock} (min: ${item.MinStock})`)
        .join('\n');

      const belowMin = lowStock
        .filter((item: any) => (item.CurrentStock || 0) > 0)
        .slice(0, 10)
        .map((item: any) => `- ${item.ItemName}: ${item.CurrentStock} (min: ${item.MinStock})`)
        .join('\n');

      return {
        content: `⚠️ Low Stock Items (${lowStock.length} items)

Critical:
${critical || '(none)'}

Below Minimum:
${belowMin || '(none)'}`,
      };
    } catch (error) {
      return {
        content: `Error: ${(error as Error).message}`,
        is_error: true,
      };
    }
  },

  // ... other inventory executors
};

/**
 * Operations executors
 */
export const operationsExecutors: Record<string, ExecutorFn> = {
  rapidrms_get_active_alerts: async (input: ToolInput, creds?: RapidRMSCredentials) => {
    try {
      // Implementation would fetch from alerts API
      return {
        content: `Active Alerts (${input.alertType}): [implementation pending]`,
      };
    } catch (error) {
      return {
        content: `Error: ${(error as Error).message}`,
        is_error: true,
      };
    }
  },

  // ... other operations executors
};

/**
 * Analytics executors
 */
export const analyticsExecutors: Record<string, ExecutorFn> = {
  rapidrms_get_department_margins: async (input: ToolInput, creds?: RapidRMSCredentials) => {
    try {
      const client = getClient(creds);

      const { data: depts } = await client.get('/api/Department', {});
      const { data: sales } = await client.getSales({
        FromDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        ToDate: new Date().toISOString().split('T')[0],
      });

      const topDepts = depts.slice(0, 10)
        .map((dept: any) => {
          const deptSales = sales.filter((s: any) => s.DepartmentID === dept.DepartmentID);
          const revenue = deptSales.reduce((sum: number, s: any) => sum + (s.Amount || 0), 0);
          return `- ${dept.DepartmentName}: $${revenue.toFixed(2)} (${deptSales.length} transactions)`;
        })
        .join('\n');

      return {
        content: `📊 Department Margins
Total Departments: ${depts.length}
Departments with Sales: ${new Set(sales.map((s: any) => s.DepartmentID)).size}

Top Departments by Revenue:
${topDepts}

Note: Full margin calculation requires cost data. Contact support for advanced analytics.`,
      };
    } catch (error) {
      return {
        content: `Error: ${(error as Error).message}`,
        is_error: true,
      };
    }
  },

  // ... other analytics executors
};

/**
 * All executors combined
 */
export const allExecutors: Record<string, ExecutorFn> = {
  ...salesExecutors,
  ...inventoryExecutors,
  ...operationsExecutors,
  ...analyticsExecutors,
};

/**
 * Execute a tool by name
 */
export async function executeTool(
  toolName: string,
  input: ToolInput,
  creds?: RapidRMSCredentials
): Promise<ToolResult> {
  const executor = allExecutors[toolName];

  if (!executor) {
    return {
      content: `Tool not found: ${toolName}`,
      is_error: true,
    };
  }

  log.debug('Executing tool', { toolName });
  return executor(input, creds);
}
