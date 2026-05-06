/**
 * Transaction & Tender Detailed Tools
 */

export const transactionTenderTools = [
  {
    name: 'rapidrms_get_tender_sales',
    description: 'Get sales breakdown by tender type: cash, card, check, gift card, etc.',
    input_schema: {
      type: 'object' as const,
      properties: {
        startDate: { type: 'string', description: 'Start date (YYYY-MM-DD)' },
        endDate: { type: 'string', description: 'End date (YYYY-MM-DD)' },
        tenderType: {
          type: 'string',
          enum: ['all', 'cash', 'card', 'check', 'giftcard', 'loyalty', 'other'],
          description: 'Filter by tender type',
        },
        locationId: { type: 'string', description: 'Optional location filter' },
      },
      required: ['startDate', 'endDate'],
    },
  },

  {
    name: 'rapidrms_get_cash_drops',
    description: 'Get cash drop history: amounts, times, discrepancies, balancing.',
    input_schema: {
      type: 'object' as const,
      properties: {
        startDate: { type: 'string', description: 'Start date (YYYY-MM-DD)' },
        endDate: { type: 'string', description: 'End date (YYYY-MM-DD)' },
        employeeId: { type: 'string', description: 'Optional specific employee' },
        hasDiscrepancy: {
          type: 'boolean',
          description: 'Only drops with count discrepancies',
        },
      },
      required: ['startDate', 'endDate'],
    },
  },

  {
    name: 'rapidrms_get_no_sale_transactions',
    description: 'Get no-sale (drawer open) events: frequency, employee, time patterns.',
    input_schema: {
      type: 'object' as const,
      properties: {
        startDate: { type: 'string', description: 'Start date (YYYY-MM-DD)' },
        endDate: { type: 'string', description: 'End date (YYYY-MM-DD)' },
        employeeId: { type: 'string', description: 'Optional employee filter' },
        threshold: {
          type: 'number',
          description: 'Alert if > N no-sales per shift',
          default: 10,
        },
      },
      required: ['startDate', 'endDate'],
    },
  },

  {
    name: 'rapidrms_get_line_item_voids',
    description: 'Get voided line items: which items, by whom, when, reason codes.',
    input_schema: {
      type: 'object' as const,
      properties: {
        startDate: { type: 'string', description: 'Start date (YYYY-MM-DD)' },
        endDate: { type: 'string', description: 'End date (YYYY-MM-DD)' },
        itemId: { type: 'string', description: 'Optional specific item' },
        employeeId: { type: 'string', description: 'Optional employee filter' },
        minAmount: { type: 'number', description: 'Minimum void amount' },
      },
      required: ['startDate', 'endDate'],
    },
  },

  {
    name: 'rapidrms_get_cancelled_transactions',
    description: 'Get cancelled/refunded transactions: reason, amounts, patterns.',
    input_schema: {
      type: 'object' as const,
      properties: {
        startDate: { type: 'string', description: 'Start date (YYYY-MM-DD)' },
        endDate: { type: 'string', description: 'End date (YYYY-MM-DD)' },
        reason: {
          type: 'string',
          enum: ['all', 'customer_return', 'error', 'fraud_suspected', 'other'],
        },
        employeeId: { type: 'string', description: 'Optional employee filter' },
      },
      required: ['startDate', 'endDate'],
    },
  },

  {
    name: 'rapidrms_get_manual_discounts',
    description: 'Get manually applied discounts: amount, reason, by whom, frequency.',
    input_schema: {
      type: 'object' as const,
      properties: {
        startDate: { type: 'string', description: 'Start date (YYYY-MM-DD)' },
        endDate: { type: 'string', description: 'End date (YYYY-MM-DD)' },
        minDiscountAmount: {
          type: 'number',
          description: 'Minimum discount to report',
          default: 5,
        },
        employeeId: { type: 'string', description: 'Optional employee filter' },
      },
      required: ['startDate', 'endDate'],
    },
  },

  {
    name: 'rapidrms_get_hourly_sales_report',
    description:
      'Get hourly breakdown: revenue, transaction count, avg ticket, busy hours analysis.',
    input_schema: {
      type: 'object' as const,
      properties: {
        startDate: { type: 'string', description: 'Start date (YYYY-MM-DD)' },
        endDate: { type: 'string', description: 'End date (YYYY-MM-DD)' },
        groupByDay: {
          type: 'boolean',
          description: 'Show daily totals too',
          default: true,
        },
        identifyPeakHours: {
          type: 'boolean',
          description: 'Highlight busiest hours',
          default: true,
        },
      },
      required: ['startDate', 'endDate'],
    },
  },

  {
    name: 'rapidrms_get_sales_by_department',
    description: 'Sales breakdown by department and sub-department.',
    input_schema: {
      type: 'object' as const,
      properties: {
        startDate: { type: 'string', description: 'Start date (YYYY-MM-DD)' },
        endDate: { type: 'string', description: 'End date (YYYY-MM-DD)' },
        showSubDept: {
          type: 'boolean',
          description: 'Include sub-department breakdown',
          default: true,
        },
        sortBy: {
          type: 'string',
          enum: ['revenue', 'margin', 'units', 'transactions'],
          description: 'Sort by metric',
        },
      },
      required: ['startDate', 'endDate'],
    },
  },

  {
    name: 'rapidrms_get_customer_loyalty_report',
    description: 'Customer loyalty analytics: enrolled customers, purchases, redemptions, tier status.',
    input_schema: {
      type: 'object' as const,
      properties: {
        period: {
          type: 'string',
          enum: ['week', 'month', 'quarter', 'year'],
          description: 'Analysis period',
        },
        minTransactions: {
          type: 'number',
          description: 'Minimum transactions to include',
          default: 1,
        },
        showChurn: {
          type: 'boolean',
          description: 'Include inactive customers',
          default: true,
        },
      },
      required: ['period'],
    },
  },

  {
    name: 'rapidrms_search_loyalty_points',
    description: 'Search customer loyalty points: balance, earned, redeemed, expiring.',
    input_schema: {
      type: 'object' as const,
      properties: {
        customerId: {
          type: 'string',
          description: 'Optional specific customer',
        },
        phoneNumber: {
          type: 'string',
          description: 'Optional search by phone',
        },
        pointsStatus: {
          type: 'string',
          enum: ['all', 'expiring_soon', 'high_balance', 'never_redeemed'],
        },
      },
      required: [],
    },
  },

  {
    name: 'rapidrms_get_item_no_sales',
    description: 'Items with no sales in period: potentially stagnant inventory.',
    input_schema: {
      type: 'object' as const,
      properties: {
        period: {
          type: 'string',
          enum: ['week', 'month', 'quarter', 'year'],
          description: 'No sales in this period',
        },
        categoryId: { type: 'string', description: 'Optional category filter' },
        minInventoryValue: {
          type: 'number',
          description: 'Minimum inventory value to report',
        },
      },
      required: ['period'],
    },
  },
];
