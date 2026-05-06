/**
 * Operations & Alerts Tools
 */
export const operationsTools = [
    {
        name: 'rapidrms_get_active_alerts',
        description: 'Get current active alerts: low stock, shrinkage, dead stock, sales issues.',
        input_schema: {
            type: 'object',
            properties: {
                alertType: {
                    type: 'string',
                    enum: ['all', 'stock', 'shrinkage', 'deadstock', 'sales', 'quality'],
                    description: 'Filter by alert type',
                    default: 'all',
                },
                severity: {
                    type: 'string',
                    enum: ['all', 'critical', 'warning', 'info'],
                    description: 'Minimum severity level',
                    default: 'warning',
                },
            },
            required: [],
        },
    },
    {
        name: 'rapidrms_get_shrinkage_analysis',
        description: 'Analyze inventory shrinkage: theft, damage, waste. Shows items and locations at risk.',
        input_schema: {
            type: 'object',
            properties: {
                period: {
                    type: 'string',
                    enum: ['week', 'month', 'quarter', 'year'],
                    description: 'Analysis period',
                    default: 'month',
                },
                threshold: {
                    type: 'number',
                    description: 'Minimum shrinkage % to report',
                    default: 5,
                },
                locationId: {
                    type: 'string',
                    description: 'Optional: filter by location',
                },
            },
            required: [],
        },
    },
    {
        name: 'rapidrms_get_dead_stock',
        description: 'Identify slow-moving or obsolete inventory not sold in defined period.',
        input_schema: {
            type: 'object',
            properties: {
                daysNoSale: {
                    type: 'number',
                    description: 'Days without sale to consider dead stock',
                    default: 90,
                },
                minValue: {
                    type: 'number',
                    description: 'Minimum inventory value to report (optional)',
                },
                categoryId: {
                    type: 'string',
                    description: 'Optional: filter by category',
                },
            },
            required: [],
        },
    },
    {
        name: 'rapidrms_get_markdown_recommendations',
        description: 'Get recommendations for markdowns on slow-moving items to free up capital.',
        input_schema: {
            type: 'object',
            properties: {
                minDiscount: {
                    type: 'number',
                    description: 'Minimum discount % to consider',
                    default: 10,
                },
                maxDiscount: {
                    type: 'number',
                    description: 'Maximum discount % to recommend',
                    default: 50,
                },
                targetMargin: {
                    type: 'number',
                    description: 'Target minimum margin % after discount',
                    default: 20,
                },
            },
            required: [],
        },
    },
    {
        name: 'rapidrms_get_discrepancy_report',
        description: 'Get inventory discrepancies between system and physical counts.',
        input_schema: {
            type: 'object',
            properties: {
                locationId: {
                    type: 'string',
                    description: 'Location to check',
                },
                daysSinceCycle: {
                    type: 'number',
                    description: 'Include counts older than N days',
                    default: 30,
                },
            },
            required: [],
        },
    },
    {
        name: 'rapidrms_get_reorder_recommendations',
        description: 'AI-powered reorder suggestions based on sales velocity and lead times.',
        input_schema: {
            type: 'object',
            properties: {
                includeVariance: {
                    type: 'boolean',
                    description: 'Account for sales variance',
                    default: true,
                },
                maxCost: {
                    type: 'number',
                    description: 'Max total cost for recommendations',
                },
                categoryFilter: {
                    type: 'string',
                    description: 'Optional category filter',
                },
            },
            required: [],
        },
    },
    {
        name: 'rapidrms_get_waste_report',
        description: 'Track waste, expiration, and damage events.',
        input_schema: {
            type: 'object',
            properties: {
                period: {
                    type: 'string',
                    enum: ['week', 'month', 'quarter'],
                    description: 'Time period',
                    default: 'month',
                },
                reasonCode: {
                    type: 'string',
                    enum: ['all', 'expired', 'damage', 'theft', 'other'],
                    description: 'Filter by reason',
                    default: 'all',
                },
            },
            required: [],
        },
    },
    {
        name: 'rapidrms_get_sales_velocity',
        description: 'Analyze sales velocity by item: units/day, days to stockout, seasonal trends.',
        input_schema: {
            type: 'object',
            properties: {
                sortBy: {
                    type: 'string',
                    enum: ['velocity', 'revenue', 'turnover'],
                    description: 'How to rank items',
                    default: 'velocity',
                },
                limit: {
                    type: 'number',
                    description: 'Number of items to return',
                    default: 50,
                },
            },
            required: [],
        },
    },
    {
        name: 'rapidrms_get_compliance_report',
        description: 'Check for compliance issues: expired items, recalled products, storage violations.',
        input_schema: {
            type: 'object',
            properties: {
                includeExpiring: {
                    type: 'boolean',
                    description: 'Include items expiring within N days',
                    default: true,
                },
                daysToExpiry: {
                    type: 'number',
                    description: 'Threshold for expiring items',
                    default: 30,
                },
            },
            required: [],
        },
    },
    {
        name: 'rapidrms_get_location_performance',
        description: 'Compare store locations: sales per sq ft, inventory turnover, shrinkage %.',
        input_schema: {
            type: 'object',
            properties: {
                period: {
                    type: 'string',
                    enum: ['month', 'quarter', 'year'],
                    description: 'Analysis period',
                    default: 'quarter',
                },
                metric: {
                    type: 'string',
                    enum: ['sales', 'turnover', 'shrinkage', 'efficiency'],
                    description: 'Primary metric to compare',
                    default: 'sales',
                },
            },
            required: [],
        },
    },
];
