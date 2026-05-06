/**
 * Advanced Analytics & Business Insights Tools
 */
export const analyticsInsightsTools = [
    {
        name: 'rapidrms_get_department_margins',
        description: 'Analyze margins by department: gross margin, contribution, trend.',
        input_schema: {
            type: 'object',
            properties: {
                period: {
                    type: 'string',
                    enum: ['week', 'biweekly', 'month', 'quarter', 'year'],
                    description: 'Analysis period',
                },
                includeSubDept: { type: 'boolean', description: 'Include sub-department detail' },
                sortBy: {
                    type: 'string',
                    enum: ['margin_pct', 'margin_dollars', 'revenue'],
                    description: 'Sort order',
                },
            },
            required: ['period'],
        },
    },
    {
        name: 'rapidrms_get_high_margin_items',
        description: 'Find top-sold items with highest margins. Best profit drivers.',
        input_schema: {
            type: 'object',
            properties: {
                period: {
                    type: 'string',
                    enum: ['week', 'month', 'quarter'],
                    description: 'Period',
                },
                minUnitsPerWeek: {
                    type: 'number',
                    description: 'Minimum velocity',
                    default: 5,
                },
                minMarginPct: {
                    type: 'number',
                    description: 'Minimum margin %',
                    default: 30,
                },
                limit: { type: 'number', description: 'Top N items', default: 20 },
            },
            required: ['period'],
        },
    },
    {
        name: 'rapidrms_get_cold_items',
        description: 'Find slow-moving items with low sales velocity. Candidates for markdown or discontinuation.',
        input_schema: {
            type: 'object',
            properties: {
                unitsPerMonthThreshold: {
                    type: 'number',
                    description: 'Max units/month to consider cold',
                    default: 2,
                },
                minInventoryValue: {
                    type: 'number',
                    description: 'Min inventory value to report',
                },
                categoryFilter: { type: 'string', description: 'Optional category' },
            },
            required: [],
        },
    },
    {
        name: 'rapidrms_get_new_items_this_period',
        description: 'Items added this week/month. Good for new product evaluation and promotion.',
        input_schema: {
            type: 'object',
            properties: {
                period: {
                    type: 'string',
                    enum: ['this_week', 'this_month', 'last_7days', 'last_30days'],
                    description: 'Period',
                },
                includePerformance: {
                    type: 'boolean',
                    description: 'Show early sales metrics',
                    default: true,
                },
            },
            required: ['period'],
        },
    },
    {
        name: 'rapidrms_get_below_minimum_stock',
        description: 'All items currently below minimum threshold, sorted by urgency.',
        input_schema: {
            type: 'object',
            properties: {
                urgencyLevel: {
                    type: 'string',
                    enum: ['critical', 'high', 'medium', 'all'],
                    description: 'Urgency filter',
                    default: 'critical',
                },
                daysToStockout: {
                    type: 'number',
                    description: 'Show items stocking out in N days',
                },
                categoryFilter: { type: 'string', description: 'Optional category' },
                includeReorderSuggestion: {
                    type: 'boolean',
                    description: 'Include recommended order qty',
                    default: true,
                },
            },
            required: [],
        },
    },
    {
        name: 'rapidrms_get_excess_stock_not_moving',
        description: 'Items with high inventory but low sales. Excess capital tied up, slow churn.',
        input_schema: {
            type: 'object',
            properties: {
                minDaysSupply: {
                    type: 'number',
                    description: 'Days of supply to consider excess',
                    default: 120,
                },
                maxUnitsPerWeek: {
                    type: 'number',
                    description: 'Max units/week to be considered slow',
                    default: 1,
                },
                minInventoryValue: {
                    type: 'number',
                    description: 'Min value to report',
                },
            },
            required: [],
        },
    },
    {
        name: 'rapidrms_analyze_bestsellers_vs_margin',
        description: 'Find sweet spot: items with both high sales volume AND good margins.',
        input_schema: {
            type: 'object',
            properties: {
                period: {
                    type: 'string',
                    enum: ['week', 'month', 'quarter'],
                    description: 'Period',
                },
                minUnitsPerWeek: { type: 'number', description: 'Minimum sales velocity' },
                minMarginPct: { type: 'number', description: 'Minimum margin %' },
            },
            required: ['period'],
        },
    },
    {
        name: 'rapidrms_get_inventory_turnover_analysis',
        description: 'Inventory health: which items turn fast, which are slow, ROI per item.',
        input_schema: {
            type: 'object',
            properties: {
                period: {
                    type: 'string',
                    enum: ['month', 'quarter', 'year'],
                    description: 'Analysis period',
                },
                groupBy: {
                    type: 'string',
                    enum: ['item', 'category', 'vendor'],
                    description: 'Group results',
                },
                showROI: {
                    type: 'boolean',
                    description: 'Calculate return on inventory investment',
                    default: true,
                },
            },
            required: ['period'],
        },
    },
    {
        name: 'rapidrms_get_seasonal_trends',
        description: 'Identify seasonal patterns: what sells when. Prepare for peaks/valleys.',
        input_schema: {
            type: 'object',
            properties: {
                months: {
                    type: 'number',
                    description: 'Historical months to analyze',
                    default: 12,
                },
                groupByMonth: { type: 'boolean', description: 'Show month-by-month' },
                identifyPeakSeasons: {
                    type: 'boolean',
                    description: 'Highlight seasonal peaks',
                    default: true,
                },
            },
            required: [],
        },
    },
    {
        name: 'rapidrms_get_product_mix_analysis',
        description: 'Product mix by sales $, units, margin. Understand your sales composition.',
        input_schema: {
            type: 'object',
            properties: {
                period: {
                    type: 'string',
                    enum: ['week', 'month', 'quarter', 'year'],
                    description: 'Period',
                },
                showPareto: {
                    type: 'boolean',
                    description: 'Show 80/20 analysis (20% items = 80% sales)',
                    default: true,
                },
            },
            required: ['period'],
        },
    },
    {
        name: 'rapidrms_get_supplier_performance_detailed',
        description: 'Deep vendor analysis: on-time %, quality, lead time, cost trends.',
        input_schema: {
            type: 'object',
            properties: {
                period: {
                    type: 'string',
                    enum: ['month', 'quarter', 'year'],
                    description: 'Period',
                },
                vendorId: { type: 'string', description: 'Optional specific vendor' },
                includeAlternatives: {
                    type: 'boolean',
                    description: 'Show alternative suppliers for comparison',
                    default: true,
                },
            },
            required: ['period'],
        },
    },
    {
        name: 'rapidrms_get_waste_loss_analysis',
        description: 'Analyze waste/loss impact: by reason, cost, preventability.',
        input_schema: {
            type: 'object',
            properties: {
                period: {
                    type: 'string',
                    enum: ['week', 'month', 'quarter'],
                    description: 'Period',
                },
                groupBy: {
                    type: 'string',
                    enum: ['reason', 'item', 'employee', 'location'],
                    description: 'Group losses',
                },
            },
            required: ['period'],
        },
    },
    {
        name: 'rapidrms_get_pricing_opportunity_analysis',
        description: 'Find items to reprice: low-margin items, competitors price, elasticity analysis.',
        input_schema: {
            type: 'object',
            properties: {
                lowMarginThreshold: {
                    type: 'number',
                    description: 'Margin % below which items flagged',
                    default: 15,
                },
                highVolumeThreshold: {
                    type: 'number',
                    description: 'Units/week above which price matters',
                    default: 20,
                },
                analyzeElasticity: {
                    type: 'boolean',
                    description: 'Include price elasticity (if past changes)',
                    default: true,
                },
            },
            required: [],
        },
    },
    {
        name: 'rapidrms_forecast_next_period_sales',
        description: 'Forecast next week/month/quarter sales. Predict trends, prepare inventory, staff.',
        input_schema: {
            type: 'object',
            properties: {
                forecastPeriod: {
                    type: 'string',
                    enum: ['next_week', 'next_month', 'next_quarter'],
                    description: 'Forecast period',
                },
                accountForSeasonal: { type: 'boolean', description: 'Include seasonal trends' },
                showByDept: {
                    type: 'boolean',
                    description: 'Department-level forecast',
                },
                confidenceLevel: {
                    type: 'string',
                    enum: ['low', 'medium', 'high'],
                    description: 'Forecast confidence bands',
                },
            },
            required: ['forecastPeriod'],
        },
    },
];
