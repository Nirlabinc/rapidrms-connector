/**
 * Sales & Revenue Analysis Tools
 */
export const salesTools = [
    {
        name: 'rapidrms_get_sales_report',
        description: 'Get detailed sales report for a date range. Returns invoices, revenue, transaction count.',
        input_schema: {
            type: 'object',
            properties: {
                startDate: {
                    type: 'string',
                    description: 'Start date (YYYY-MM-DD)',
                },
                endDate: {
                    type: 'string',
                    description: 'End date (YYYY-MM-DD)',
                },
                locationId: {
                    type: 'string',
                    description: 'Optional location ID to filter by',
                },
                employeeId: {
                    type: 'string',
                    description: 'Optional employee ID to filter by',
                },
            },
            required: ['startDate', 'endDate'],
        },
    },
    {
        name: 'rapidrms_get_revenue_summary',
        description: 'Get revenue summary: total, by location, by department, daily averages.',
        input_schema: {
            type: 'object',
            properties: {
                period: {
                    type: 'string',
                    enum: ['today', 'week', 'month', 'year'],
                    description: 'Time period to analyze',
                },
                locationId: {
                    type: 'string',
                    description: 'Optional location filter',
                },
            },
            required: ['period'],
        },
    },
    {
        name: 'rapidrms_get_top_products',
        description: 'Get top selling products by revenue or units sold.',
        input_schema: {
            type: 'object',
            properties: {
                period: {
                    type: 'string',
                    enum: ['today', 'week', 'month', 'year'],
                    description: 'Time period',
                },
                metric: {
                    type: 'string',
                    enum: ['revenue', 'units', 'transactions'],
                    description: 'What to rank by',
                },
                limit: {
                    type: 'number',
                    description: 'Number of top items to return',
                    default: 10,
                },
                locationId: {
                    type: 'string',
                    description: 'Optional location filter',
                },
            },
            required: ['period', 'metric'],
        },
    },
    {
        name: 'rapidrms_get_bottom_products',
        description: 'Get bottom performing products (low revenue, slow sales).',
        input_schema: {
            type: 'object',
            properties: {
                period: {
                    type: 'string',
                    enum: ['week', 'month', 'year'],
                    description: 'Time period to analyze',
                },
                metric: {
                    type: 'string',
                    enum: ['revenue', 'units'],
                    description: 'What to rank by',
                },
                limit: {
                    type: 'number',
                    description: 'Number of bottom items',
                    default: 10,
                },
            },
            required: ['period', 'metric'],
        },
    },
    {
        name: 'rapidrms_get_employee_performance',
        description: 'Get employee sales performance: total sales, transaction count, avg ticket.',
        input_schema: {
            type: 'object',
            properties: {
                period: {
                    type: 'string',
                    enum: ['today', 'week', 'month', 'year'],
                    description: 'Time period',
                },
                sortBy: {
                    type: 'string',
                    enum: ['revenue', 'transactions', 'avgTicket'],
                    description: 'How to rank employees',
                },
                limit: {
                    type: 'number',
                    description: 'Number of employees to return',
                    default: 20,
                },
            },
            required: ['period'],
        },
    },
    {
        name: 'rapidrms_compare_periods',
        description: 'Compare revenue, transactions, or avg ticket between two periods. Calculates growth %.',
        input_schema: {
            type: 'object',
            properties: {
                period1Start: {
                    type: 'string',
                    description: 'First period start (YYYY-MM-DD)',
                },
                period1End: {
                    type: 'string',
                    description: 'First period end (YYYY-MM-DD)',
                },
                period2Start: {
                    type: 'string',
                    description: 'Second period start (YYYY-MM-DD)',
                },
                period2End: {
                    type: 'string',
                    description: 'Second period end (YYYY-MM-DD)',
                },
                metric: {
                    type: 'string',
                    enum: ['revenue', 'transactions', 'avgTicket'],
                    description: 'What to compare',
                },
            },
            required: ['period1Start', 'period1End', 'period2Start', 'period2End', 'metric'],
        },
    },
    {
        name: 'rapidrms_get_category_sales',
        description: 'Get sales breakdown by product category/department.',
        input_schema: {
            type: 'object',
            properties: {
                startDate: {
                    type: 'string',
                    description: 'Start date (YYYY-MM-DD)',
                },
                endDate: {
                    type: 'string',
                    description: 'End date (YYYY-MM-DD)',
                },
                departmentId: {
                    type: 'string',
                    description: 'Optional: filter by specific department',
                },
            },
            required: ['startDate', 'endDate'],
        },
    },
    {
        name: 'rapidrms_get_daily_trends',
        description: 'Get daily sales trend over a period. Shows revenue and transaction count per day.',
        input_schema: {
            type: 'object',
            properties: {
                startDate: {
                    type: 'string',
                    description: 'Start date (YYYY-MM-DD)',
                },
                endDate: {
                    type: 'string',
                    description: 'End date (YYYY-MM-DD)',
                },
            },
            required: ['startDate', 'endDate'],
        },
    },
];
