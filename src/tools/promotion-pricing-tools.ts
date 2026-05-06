/**
 * Promotions & Pricing Tools
 */

export const promotionPricingTools = [
  {
    name: 'rapidrms_get_promotion_report',
    description: 'Get promotion performance: active promos, ROI, units moved, revenue impact.',
    input_schema: {
      type: 'object' as const,
      properties: {
        period: {
          type: 'string',
          enum: ['active', 'week', 'biweekly', 'month', '3months', 'year'],
          description: 'Period (active = current promos)',
          default: 'month',
        },
        promoId: { type: 'string', description: 'Optional specific promotion' },
        metric: {
          type: 'string',
          enum: ['revenue', 'units', 'margin', 'roi'],
          description: 'Sort by metric',
        },
      },
      required: ['period'],
    },
  },

  {
    name: 'rapidrms_get_price_changes',
    description: 'Track price, cost, and qty changes: what changed, when, by whom.',
    input_schema: {
      type: 'object' as const,
      properties: {
        startDate: { type: 'string', description: 'Start date (YYYY-MM-DD)' },
        endDate: { type: 'string', description: 'End date (YYYY-MM-DD)' },
        changeType: {
          type: 'string',
          enum: ['all', 'price', 'cost', 'quantity'],
          description: 'Type of change',
        },
        itemId: { type: 'string', description: 'Optional specific item' },
        categoryId: { type: 'string', description: 'Optional category filter' },
      },
      required: ['startDate', 'endDate'],
    },
  },

  {
    name: 'rapidrms_get_cost_price_variance',
    description: 'Analyze cost vs price changes: margin impact, profit loss/gain.',
    input_schema: {
      type: 'object' as const,
      properties: {
        period: {
          type: 'string',
          enum: ['week', 'biweekly', 'month', '3months'],
          description: 'Period',
        },
        minImpact: {
          type: 'number',
          description: 'Minimum margin % impact to report',
          default: 5,
        },
      },
      required: ['period'],
    },
  },

  {
    name: 'rapidrms_get_price_elasticity',
    description:
      'Analyze price elasticity: sales impact of price changes, demand sensitivity.',
    input_schema: {
      type: 'object' as const,
      properties: {
        lookbackMonths: {
          type: 'number',
          description: 'Historical months to analyze',
          default: 6,
        },
        categoryId: { type: 'string', description: 'Optional category filter' },
      },
      required: [],
    },
  },

  {
    name: 'rapidrms_get_competitive_pricing',
    description: 'Compare your pricing vs market: identify high/low margin items.',
    input_schema: {
      type: 'object' as const,
      properties: {
        categoryId: { type: 'string', description: 'Optional category filter' },
        marketBaseline: {
          type: 'number',
          description: 'Baseline margin % for comparison',
          default: 30,
        },
      },
      required: [],
    },
  },

  {
    name: 'rapidrms_get_promotion_roi',
    description: 'Calculate ROI per promotion: promo cost vs incremental revenue/profit.',
    input_schema: {
      type: 'object' as const,
      properties: {
        startDate: { type: 'string', description: 'Period start (YYYY-MM-DD)' },
        endDate: { type: 'string', description: 'Period end (YYYY-MM-DD)' },
        promoType: {
          type: 'string',
          enum: ['all', 'discount', 'bogo', 'bundle', 'loyalty'],
        },
      },
      required: ['startDate', 'endDate'],
    },
  },

  {
    name: 'rapidrms_get_pricing_rules',
    description: 'Get active pricing rules: quantity discounts, tiered pricing, vendor deals.',
    input_schema: {
      type: 'object' as const,
      properties: {
        categoryId: { type: 'string', description: 'Optional category filter' },
        isActive: { type: 'boolean', description: 'Only active rules', default: true },
      },
      required: [],
    },
  },

  {
    name: 'rapidrms_recommend_price_changes',
    description: 'AI recommendations for price changes: based on margin, demand, competition.',
    input_schema: {
      type: 'object' as const,
      properties: {
        strategy: {
          type: 'string',
          enum: ['maximize_margin', 'maximize_volume', 'match_competitor', 'seasonal'],
          description: 'Pricing strategy',
        },
        targetMargin: { type: 'number', description: 'Target margin %', default: 30 },
      },
      required: ['strategy'],
    },
  },
];
