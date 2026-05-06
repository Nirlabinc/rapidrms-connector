/**
 * Advanced Inventory & Purchase Order Tools
 */

export const advancedInventoryTools = [
  {
    name: 'rapidrms_get_inventory_detail',
    description: 'Detailed inventory by item: stock by location, cost, aging, net value.',
    input_schema: {
      type: 'object' as const,
      properties: {
        itemId: { type: 'string', description: 'Item ID to detail' },
        includeHistory: {
          type: 'boolean',
          description: 'Include movement history',
          default: true,
        },
        historyMonths: {
          type: 'number',
          description: 'Historical months to show',
          default: 12,
        },
      },
      required: ['itemId'],
    },
  },

  {
    name: 'rapidrms_get_low_stock_items',
    description: 'List items below min stock with recommended order qty and supplier.',
    input_schema: {
      type: 'object' as const,
      properties: {
        categoryId: { type: 'string', description: 'Optional category filter' },
        urgencyLevel: {
          type: 'string',
          enum: ['critical', 'high', 'medium', 'all'],
          description: 'Stockout risk level',
          default: 'critical',
        },
        includeRecommendedVendor: {
          type: 'boolean',
          description: 'Include best vendor recommendation',
          default: true,
        },
      },
      required: [],
    },
  },

  {
    name: 'rapidrms_get_item_sold_report',
    description: 'Item sold report: by department, vendor, product line, with totals.',
    input_schema: {
      type: 'object' as const,
      properties: {
        period: {
          type: 'string',
          enum: ['week', 'biweekly', 'month', '3months', 'year'],
          description: 'Period',
        },
        groupBy: {
          type: 'string',
          enum: ['department', 'vendor', 'category', 'item'],
          description: 'Group results by',
        },
        sortBy: {
          type: 'string',
          enum: ['revenue', 'units', 'margin'],
          description: 'Sort by metric',
        },
        minRevenue: {
          type: 'number',
          description: 'Minimum revenue to include',
        },
      },
      required: ['period', 'groupBy'],
    },
  },

  {
    name: 'rapidrms_generate_po_smart',
    description:
      'Smart PO generation: analyzes custom date range sales, compares to previous purchases, suggests quantities.',
    input_schema: {
      type: 'object' as const,
      properties: {
        analysisStartDate: {
          type: 'string',
          description: 'Start of sales analysis period (YYYY-MM-DD)',
        },
        analysisEndDate: {
          type: 'string',
          description: 'End of sales analysis period (YYYY-MM-DD)',
        },
        comparisonPeriod: {
          type: 'string',
          enum: ['previous_period', 'year_ago', 'custom'],
          description: 'Compare to previous purchases from',
          default: 'previous_period',
        },
        vendorId: { type: 'string', description: 'Specific vendor (optional)' },
        categoryId: { type: 'string', description: 'Specific category (optional)' },
        safetyStock: {
          type: 'number',
          description: 'Days of supply safety buffer',
          default: 7,
        },
        autoSubmit: {
          type: 'boolean',
          description: 'Auto-submit if threshold met',
          default: false,
        },
      },
      required: ['analysisStartDate', 'analysisEndDate'],
    },
  },

  {
    name: 'rapidrms_compare_period_sales',
    description:
      'Compare sales between periods: biweekly, monthly, 3-month, year-over-year trends.',
    input_schema: {
      type: 'object' as const,
      properties: {
        period1Start: { type: 'string', description: 'Period 1 start (YYYY-MM-DD)' },
        period1End: { type: 'string', description: 'Period 1 end (YYYY-MM-DD)' },
        period2Start: { type: 'string', description: 'Period 2 start (YYYY-MM-DD)' },
        period2End: { type: 'string', description: 'Period 2 end (YYYY-MM-DD)' },
        groupBy: {
          type: 'string',
          enum: ['item', 'department', 'vendor', 'category'],
          description: 'Group by',
          default: 'item',
        },
        showGrowth: {
          type: 'boolean',
          description: 'Calculate growth %',
          default: true,
        },
      },
      required: ['period1Start', 'period1End', 'period2Start', 'period2End'],
    },
  },

  {
    name: 'rapidrms_get_vendor_comparison',
    description:
      'Compare vendors for same item: price, quality (returns %), lead time, min order.',
    input_schema: {
      type: 'object' as const,
      properties: {
        itemId: { type: 'string', description: 'Item to compare vendors for' },
        includeHistorical: {
          type: 'boolean',
          description: 'Include historical pricing',
          default: true,
        },
      },
      required: ['itemId'],
    },
  },

  {
    name: 'rapidrms_get_po_history',
    description: 'PO history: past orders by vendor, item, dates, costs, receiving status.',
    input_schema: {
      type: 'object' as const,
      properties: {
        period: {
          type: 'string',
          enum: ['month', 'quarter', 'year', 'all'],
          description: 'Historical period',
        },
        vendorId: { type: 'string', description: 'Optional vendor filter' },
        itemId: { type: 'string', description: 'Optional item filter' },
        statusFilter: {
          type: 'string',
          enum: ['all', 'open', 'received', 'partial'],
          description: 'PO status',
        },
      },
      required: ['period'],
    },
  },

  {
    name: 'rapidrms_analyze_stock_movement',
    description: 'Analyze stock movement: inbound (purchases), outbound (sales), aging.',
    input_schema: {
      type: 'object' as const,
      properties: {
        itemId: { type: 'string', description: 'Item to analyze' },
        period: {
          type: 'string',
          enum: ['month', 'quarter', 'year'],
          description: 'Period',
        },
        showAging: {
          type: 'boolean',
          description: 'Show age of inventory on hand',
          default: true,
        },
      },
      required: ['itemId', 'period'],
    },
  },

  {
    name: 'rapidrms_forecast_po_needs',
    description:
      'Forecast PO needs for future periods: biweekly, monthly, 3 months based on trends.',
    input_schema: {
      type: 'object' as const,
      properties: {
        forecastPeriod: {
          type: 'string',
          enum: ['biweekly', 'monthly', '3months'],
          description: 'Forecast period',
        },
        weeksAhead: {
          type: 'number',
          description: 'How many weeks to forecast',
          default: 4,
        },
        accountForSeasonal: {
          type: 'boolean',
          description: 'Account for seasonal trends',
          default: true,
        },
        vendorId: { type: 'string', description: 'Optional vendor filter' },
      },
      required: ['forecastPeriod'],
    },
  },

  {
    name: 'rapidrms_get_inventory_aging',
    description: 'Identify old inventory: items not sold in N months, holding cost impact.',
    input_schema: {
      type: 'object' as const,
      properties: {
        daysOld: {
          type: 'number',
          description: 'Items not sold in N days',
          default: 90,
        },
        includeHoldingCost: {
          type: 'boolean',
          description: 'Calculate holding cost impact',
          default: true,
        },
        minValue: {
          type: 'number',
          description: 'Minimum inventory value to report',
        },
      },
      required: [],
    },
  },
];
