/**
 * Write Operations Tools - Modify RapidRMS Data
 * ⚠️ All require RAPIDRMS_WRITE_ENABLED=true
 */

export const writeOperationsTools = [
  {
    name: 'rapidrms_update_item_price',
    description:
      'Update item price for single/case/pack. Changes reflected immediately at POS.',
    input_schema: {
      type: 'object' as const,
      properties: {
        upc: { type: 'string', description: 'Item UPC or ID' },
        unitType: {
          type: 'string',
          enum: ['single', 'case', 'pack'],
          description: 'Price level to change',
        },
        newPrice: { type: 'number', description: 'New price (e.g., 2.99)' },
        effectiveDate: {
          type: 'string',
          description: 'When to apply (YYYY-MM-DD, default: today)',
        },
        reason: {
          type: 'string',
          description: 'Change reason for audit trail',
        },
      },
      required: ['upc', 'unitType', 'newPrice'],
    },
  },

  {
    name: 'rapidrms_update_item_cost',
    description: 'Update item cost. Affects margin calculations immediately.',
    input_schema: {
      type: 'object' as const,
      properties: {
        upc: { type: 'string', description: 'Item UPC or ID' },
        unitType: {
          type: 'string',
          enum: ['single', 'case', 'pack'],
          description: 'Cost level to update',
        },
        newCost: { type: 'number', description: 'New cost' },
        effectiveDate: {
          type: 'string',
          description: 'Effective date (YYYY-MM-DD)',
        },
      },
      required: ['upc', 'unitType', 'newCost'],
    },
  },

  {
    name: 'rapidrms_update_item_quantity',
    description: 'Adjust item quantity on hand (inventory count adjustment).',
    input_schema: {
      type: 'object' as const,
      properties: {
        upc: { type: 'string', description: 'Item UPC or ID' },
        locationId: { type: 'string', description: 'Which location' },
        newQuantity: { type: 'number', description: 'New quantity' },
        reason: {
          type: 'string',
          enum: ['physical_count', 'damage', 'theft', 'transfer', 'correction'],
          description: 'Reason for adjustment',
        },
        notes: { type: 'string', description: 'Additional notes' },
      },
      required: ['upc', 'locationId', 'newQuantity', 'reason'],
    },
  },

  {
    name: 'rapidrms_update_item_margin',
    description:
      'Set item margin target. System auto-calculates price if cost known, or cost if price known.',
    input_schema: {
      type: 'object' as const,
      properties: {
        upc: { type: 'string', description: 'Item UPC or ID' },
        unitType: {
          type: 'string',
          enum: ['single', 'case', 'pack'],
        },
        targetMarginPercent: { type: 'number', description: 'e.g., 35 for 35%' },
        adjustPrice: {
          type: 'boolean',
          description: 'Adjust price (if cost known)',
          default: true,
        },
        adjustCost: {
          type: 'boolean',
          description: 'Adjust cost (if price known)',
          default: false,
        },
      },
      required: ['upc', 'unitType', 'targetMarginPercent'],
    },
  },

  {
    name: 'rapidrms_update_item_details',
    description:
      'Update item metadata: name, description, category, sub-category, supplier.',
    input_schema: {
      type: 'object' as const,
      properties: {
        upc: { type: 'string', description: 'Item UPC or ID' },
        itemName: { type: 'string', description: 'New item name' },
        description: { type: 'string', description: 'Description/notes' },
        categoryId: { type: 'string', description: 'Category ID' },
        subCategoryId: { type: 'string', description: 'Sub-category ID' },
        supplierId: { type: 'string', description: 'Primary supplier' },
      },
      required: ['upc'],
    },
  },

  {
    name: 'rapidrms_create_item_with_pack_structure',
    description:
      'Create new item with single/case/pack structure. Example: single@$2.99, case (12 singles)@$30, pack (50 singles)@$120.',
    input_schema: {
      type: 'object' as const,
      properties: {
        itemName: { type: 'string', description: 'Item name' },
        baseSingleUPC: { type: 'string', description: 'UPC for single unit' },
        categoryId: { type: 'string', description: 'Category' },
        supplierId: { type: 'string', description: 'Supplier ID' },
        singlePrice: { type: 'number', description: 'Price per single' },
        singleCost: { type: 'number', description: 'Cost per single' },
        caseQty: {
          type: 'number',
          description: 'How many singles in a case (e.g., 12)',
        },
        casePrice: { type: 'number', description: 'Case price' },
        caseCost: { type: 'number', description: 'Case cost' },
        caseUPC: { type: 'string', description: 'UPC for case' },
        packQty: {
          type: 'number',
          description: 'How many singles in pack (optional)',
        },
        packPrice: { type: 'number', description: 'Pack price (optional)' },
        packCost: { type: 'number', description: 'Pack cost (optional)' },
        packUPC: { type: 'string', description: 'UPC for pack (optional)' },
      },
      required: ['itemName', 'baseSingleUPC', 'categoryId', 'singlePrice', 'singleCost'],
    },
  },

  {
    name: 'rapidrms_apply_bulk_price_change',
    description: 'Apply price change to multiple items: by category, vendor, or dept.',
    input_schema: {
      type: 'object' as const,
      properties: {
        filterBy: {
          type: 'string',
          enum: ['category', 'vendor', 'department', 'upc_list'],
          description: 'Filter type',
        },
        filterId: { type: 'string', description: 'Category/vendor/dept ID' },
        upcList: {
          type: 'array',
          items: { type: 'string' },
          description: 'List of UPCs (if filterBy=upc_list)',
        },
        changeType: {
          type: 'string',
          enum: ['fixed_amount', 'percentage', 'fixed_price'],
          description: 'How to apply change',
        },
        changeValue: {
          type: 'number',
          description: 'Amount or percentage',
        },
        unitType: {
          type: 'string',
          enum: ['single', 'case', 'pack', 'all'],
          description: 'Which price level',
        },
        effectiveDate: {
          type: 'string',
          description: 'When to apply',
        },
      },
      required: ['filterBy', 'changeType', 'changeValue'],
    },
  },

  {
    name: 'rapidrms_set_minimum_stock_level',
    description: 'Set minimum stock threshold for item. Triggers alerts when below.',
    input_schema: {
      type: 'object' as const,
      properties: {
        upc: { type: 'string', description: 'Item UPC or ID' },
        locationId: { type: 'string', description: 'Location (optional: all)' },
        minimumQty: { type: 'number', description: 'Minimum units to keep' },
        reorderQty: {
          type: 'number',
          description: 'Recommended reorder quantity',
        },
      },
      required: ['upc', 'minimumQty'],
    },
  },

  {
    name: 'rapidrms_create_promotion',
    description: 'Create a new promotion: discount, BOGO, bundle, loyalty.',
    input_schema: {
      type: 'object' as const,
      properties: {
        promoName: { type: 'string', description: 'Promotion name' },
        promoType: {
          type: 'string',
          enum: ['discount', 'bogo', 'bundle', 'loyalty', 'seasonal'],
        },
        startDate: { type: 'string', description: 'Start date (YYYY-MM-DD)' },
        endDate: { type: 'string', description: 'End date (YYYY-MM-DD)' },
        items: {
          type: 'array',
          items: { type: 'string' },
          description: 'UPCs included',
        },
        discountAmount: { type: 'number', description: 'Discount $ or %' },
        discountType: {
          type: 'string',
          enum: ['fixed_amount', 'percentage'],
        },
        minPurchase: { type: 'number', description: 'Minimum purchase to qualify' },
        maxUses: { type: 'number', description: 'Max times to use' },
      },
      required: ['promoName', 'promoType', 'startDate', 'endDate'],
    },
  },

  {
    name: 'rapidrms_deactivate_item',
    description: 'Deactivate item (soft delete). No longer appears on POS.',
    input_schema: {
      type: 'object' as const,
      properties: {
        upc: { type: 'string', description: 'Item UPC or ID' },
        reason: {
          type: 'string',
          enum: ['discontinued', 'out_of_stock_permanent', 'error', 'other'],
        },
        notes: { type: 'string', description: 'Deactivation notes' },
      },
      required: ['upc', 'reason'],
    },
  },
];
