/**
 * Marketing & External Platform Integration Tools
 * Requires API keys to external services (Meta, Google, etc.)
 */
export const marketingIntegrationTools = [
    {
        name: 'rapidrms_create_social_media_campaign',
        description: 'Create ad campaign on Facebook/Instagram for new items, promotions, or seasonal products.',
        input_schema: {
            type: 'object',
            properties: {
                platform: {
                    type: 'string',
                    enum: ['facebook', 'instagram', 'both'],
                    description: 'Social platform',
                },
                campaignType: {
                    type: 'string',
                    enum: ['new_items', 'promotion', 'seasonal', 'bestseller', 'custom'],
                    description: 'Campaign objective',
                },
                itemUPCs: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'Items to promote',
                },
                budget: { type: 'number', description: 'Daily budget ($)' },
                duration: { type: 'number', description: 'Duration (days)' },
                targetAudience: {
                    type: 'string',
                    enum: ['local', 'regional', 'custom'],
                    description: 'Target scope',
                },
                customTargeting: {
                    type: 'string',
                    description: 'Custom audience: age, interests, behaviors',
                },
                adCreativeStyle: {
                    type: 'string',
                    enum: ['carousel', 'collection', 'video', 'static_image'],
                    description: 'Ad format',
                },
            },
            required: ['platform', 'campaignType', 'itemUPCs', 'budget', 'duration'],
        },
    },
    {
        name: 'rapidrms_generate_ad_copy',
        description: 'Generate ad copy for items/promotions (uses AI copywriting).',
        input_schema: {
            type: 'object',
            properties: {
                itemUPCs: { type: 'array', items: { type: 'string' } },
                campaignStyle: {
                    type: 'string',
                    enum: ['humor', 'professional', 'trendy', 'urgency', 'value'],
                },
                includeEmojis: { type: 'boolean', description: 'Include emojis', default: true },
                callToAction: {
                    type: 'string',
                    enum: ['buy_now', 'learn_more', 'visit_store', 'custom'],
                },
                tone: {
                    type: 'string',
                    enum: ['casual', 'formal', 'playful'],
                },
            },
            required: ['itemUPCs'],
        },
    },
    {
        name: 'rapidrms_get_campaign_performance',
        description: 'Get performance metrics for active campaigns: reach, clicks, conversions, ROI.',
        input_schema: {
            type: 'object',
            properties: {
                campaignId: {
                    type: 'string',
                    description: 'Campaign ID (optional: all campaigns)',
                },
                platform: {
                    type: 'string',
                    enum: ['facebook', 'instagram', 'google', 'all'],
                },
                metrics: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'Which metrics: impressions, clicks, conversions, spend, roi',
                },
            },
            required: [],
        },
    },
    {
        name: 'rapidrms_sync_inventory_to_ecommerce',
        description: 'Sync real-time inventory to Shopify, WooCommerce, or Amazon. Keep online stock accurate.',
        input_schema: {
            type: 'object',
            properties: {
                ecommercePlatform: {
                    type: 'string',
                    enum: ['shopify', 'woocommerce', 'amazon', 'all'],
                },
                syncFrequency: {
                    type: 'string',
                    enum: ['realtime', 'hourly', 'daily'],
                    description: 'How often to sync',
                },
                itemsToSync: {
                    type: 'string',
                    enum: ['all', 'online_only', 'custom_list'],
                },
            },
            required: ['ecommercePlatform'],
        },
    },
    {
        name: 'rapidrms_push_promotion_to_loyalty_app',
        description: 'Push promotion offer to customer loyalty app. Notify enrolled customers.',
        input_schema: {
            type: 'object',
            properties: {
                promoId: { type: 'string', description: 'Promotion ID' },
                targetSegment: {
                    type: 'string',
                    enum: ['all', 'high_value', 'inactive', 'by_purchase_history'],
                },
                notificationMethod: {
                    type: 'string',
                    enum: ['push_notification', 'email', 'sms', 'all'],
                },
                sendAt: {
                    type: 'string',
                    description: 'When to send (YYYY-MM-DD HH:MM, default: immediate)',
                },
            },
            required: ['promoId'],
        },
    },
    {
        name: 'rapidrms_generate_email_campaign',
        description: 'Generate and send email campaign to customers: newsletters, offers, surveys.',
        input_schema: {
            type: 'object',
            properties: {
                campaignType: {
                    type: 'string',
                    enum: ['newsletter', 'promotion', 'new_items', 'survey', 'reengagement'],
                },
                recipientSegment: {
                    type: 'string',
                    enum: ['all', 'high_value', 'inactive', 'recent_purchase', 'loyalty_members'],
                },
                itemUPCs: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'Items to feature (optional)',
                },
                sendDate: {
                    type: 'string',
                    description: 'Send date (YYYY-MM-DD HH:MM)',
                },
            },
            required: ['campaignType', 'recipientSegment'],
        },
    },
    {
        name: 'rapidrms_optimize_google_shopping_feed',
        description: 'Optimize Google Shopping feed: pricing, titles, descriptions for better visibility.',
        input_schema: {
            type: 'object',
            properties: {
                optimizationFocus: {
                    type: 'string',
                    enum: ['click_through_rate', 'conversion_rate', 'roi', 'impression_share'],
                },
                rules: {
                    type: 'string',
                    description: 'Auto-pricing rules, eg: "reduce price if low margin"',
                },
            },
            required: [],
        },
    },
    {
        name: 'rapidrms_create_google_ads_campaign',
        description: 'Create Google Ads (Search/Display) campaign for items or promotions.',
        input_schema: {
            type: 'object',
            properties: {
                adType: {
                    type: 'string',
                    enum: ['search', 'display', 'shopping'],
                    description: 'Ad type',
                },
                keywords: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'Keywords to target',
                },
                itemUPCs: { type: 'array', items: { type: 'string' } },
                budget: { type: 'number', description: 'Daily budget' },
                duration: { type: 'number', description: 'Duration (days)' },
                targetLocation: {
                    type: 'string',
                    enum: ['local', 'city', 'state', 'national'],
                },
            },
            required: ['adType', 'budget'],
        },
    },
    {
        name: 'rapidrms_analyze_competitor_pricing',
        description: 'Compare your pricing to competitors (integration with price monitoring service).',
        input_schema: {
            type: 'object',
            properties: {
                itemUPCs: { type: 'array', items: { type: 'string' } },
                competitors: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'Competitor names/websites',
                },
                analyzeStrategy: {
                    type: 'string',
                    enum: ['match_competitor', 'undercut', 'premium', 'value'],
                },
            },
            required: ['itemUPCs'],
        },
    },
    {
        name: 'rapidrms_export_for_marketplace',
        description: 'Export catalog to Amazon, eBay, or Etsy. Ensure compatibility & compliance.',
        input_schema: {
            type: 'object',
            properties: {
                marketplace: {
                    type: 'string',
                    enum: ['amazon', 'ebay', 'etsy', 'all'],
                },
                itemSelection: {
                    type: 'string',
                    enum: ['all', 'approved_list', 'high_margin'],
                },
                priceStrategy: {
                    type: 'string',
                    enum: ['match_retail', 'marketplace_standard', 'premium'],
                },
            },
            required: ['marketplace'],
        },
    },
    {
        name: 'rapidrms_get_customer_insights_report',
        description: 'Deep customer analytics: demographics, purchase behavior, lifetime value, churn risk.',
        input_schema: {
            type: 'object',
            properties: {
                segmentBy: {
                    type: 'string',
                    enum: ['demographics', 'purchase_frequency', 'spending_level', 'loyalty_status'],
                },
                includeChurnRisk: {
                    type: 'boolean',
                    description: 'Include churn prediction',
                    default: true,
                },
                includeLTV: {
                    type: 'boolean',
                    description: 'Calculate customer lifetime value',
                    default: true,
                },
            },
            required: [],
        },
    },
];
