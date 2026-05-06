/**
 * Inventory Management Tools
 */

export const inventoryTools = [
  {
    name: 'rapidrms_get_inventory_status',
    description: 'Get current stock levels for all items or specific category.',
    input_schema: {
      type: 'object' as const,
      properties: {
        category: {
          type: 'string',
          description: 'Optional product category filter',
        },
        itemId: {
          type: 'string',
          description: 'Optional specific item ID',
        },
      },
      required: [],
    },
  },

  {
    name: 'rapidrms_get_low_stock_alerts',
    description:
      'Get items below minimum stock threshold. Prioritized by days until stockout.',
    input_schema: {
      type: 'object' as const,
      properties: {
        categoryId: {
          type: 'string',
          description: 'Optional: filter by category',
        },
        urgency: {
          type: 'string',
          enum: ['critical', 'warning', 'all'],
          description: 'Alert urgency level',
          default: 'critical',
        },
      },
      required: [],
    },
  },

  {
    name: 'rapidrms_get_excess_inventory',
    description: 'Identify items with excessive stock or overstocked locations.',
    input_schema: {
      type: 'object' as const,
      properties: {
        threshold: {
          type: 'number',
          description: 'Days of supply before considered excess (default: 90)',
          default: 90,
        },
        locationId: {
          type: 'string',
          description: 'Optional location filter',
        },
      },
      required: [],
    },
  },

  {
    name: 'rapidrms_forecast_stock_need',
    description:
      'Forecast inventory needs based on sales velocity. Returns recommended order quantities.',
    input_schema: {
      type: 'object' as const,
      properties: {
        lookbackDays: {
          type: 'number',
          description: 'Historical days to analyze for trends',
          default: 30,
        },
        forecastDays: {
          type: 'number',
          description: 'How many days ahead to forecast',
          default: 14,
        },
        safetyStock: {
          type: 'number',
          description: 'Days of supply to keep as safety stock',
          default: 7,
        },
      },
      required: [],
    },
  },

  {
    name: 'rapidrms_get_turnover_rate',
    description: 'Calculate inventory turnover rate by item, category, or location.',
    input_schema: {
      type: 'object' as const,
      properties: {
        period: {
          type: 'string',
          enum: ['month', 'quarter', 'year'],
          description: 'Analysis period',
          default: 'month',
        },
        groupBy: {
          type: 'string',
          enum: ['item', 'category', 'location'],
          description: 'How to group results',
          default: 'category',
        },
      },
      required: [],
    },
  },

  {
    name: 'rapidrms_create_purchase_order',
    description:
      'Create a draft purchase order. Requires RAPIDRMS_WRITE_ENABLED=true to submit.',
    input_schema: {
      type: 'object' as const,
      properties: {
        vendorId: {
          type: 'string',
          description: 'Vendor ID',
        },
        items: {
          type: 'array',
          description: 'Array of {itemId, quantity, unitPrice?}',
          items: {
            type: 'object',
            properties: {
              itemId: { type: 'string' },
              quantity: { type: 'number' },
              unitPrice: { type: 'number' },
            },
            required: ['itemId', 'quantity'],
          },
        },
        notes: {
          type: 'string',
          description: 'Optional PO notes',
        },
        autoSubmit: {
          type: 'boolean',
          description: 'Auto-submit if threshold met',
          default: false,
        },
      },
      required: ['vendorId', 'items'],
    },
  },

  {
    name: 'rapidrms_get_supplier_performance',
    description: 'Analyze supplier/vendor performance: on-time %, quality, lead time.',
    input_schema: {
      type: 'object' as const,
      properties: {
        vendorId: {
          type: 'string',
          description: 'Optional: filter by specific vendor',
        },
        period: {
          type: 'string',
          enum: ['month', 'quarter', 'year'],
          description: 'Analysis period',
          default: 'quarter',
        },
      },
      required: [],
    },
  },

  {
    name: 'rapidrms_get_stockout_history',
    description: 'Get history of stockout events and their business impact.',
    input_schema: {
      type: 'object' as const,
      properties: {
        period: {
          type: 'string',
          enum: ['week', 'month', 'quarter'],
          description: 'Time period to analyze',
          default: 'month',
        },
      },
      required: [],
    },
  },

  {
    name: 'rapidrms_get_cost_of_goods',
    description: 'Calculate COGS, inventory value, and cost trends.',
    input_schema: {
      type: 'object' as const,
      properties: {
        asOfDate: {
          type: 'string',
          description: 'Date for valuation (YYYY-MM-DD, default: today)',
        },
        byCategory: {
          type: 'boolean',
          description: 'Break down by category',
          default: true,
        },
      },
      required: [],
    },
  },
];
