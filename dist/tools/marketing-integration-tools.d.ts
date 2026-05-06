/**
 * Marketing & External Platform Integration Tools
 * Requires API keys to external services (Meta, Google, etc.)
 */
export declare const marketingIntegrationTools: ({
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            platform: {
                type: string;
                enum: string[];
                description: string;
            };
            campaignType: {
                type: string;
                enum: string[];
                description: string;
            };
            itemUPCs: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            budget: {
                type: string;
                description: string;
            };
            duration: {
                type: string;
                description: string;
            };
            targetAudience: {
                type: string;
                enum: string[];
                description: string;
            };
            customTargeting: {
                type: string;
                description: string;
            };
            adCreativeStyle: {
                type: string;
                enum: string[];
                description: string;
            };
            campaignStyle?: undefined;
            includeEmojis?: undefined;
            callToAction?: undefined;
            tone?: undefined;
            campaignId?: undefined;
            metrics?: undefined;
            ecommercePlatform?: undefined;
            syncFrequency?: undefined;
            itemsToSync?: undefined;
            promoId?: undefined;
            targetSegment?: undefined;
            notificationMethod?: undefined;
            sendAt?: undefined;
            recipientSegment?: undefined;
            sendDate?: undefined;
            optimizationFocus?: undefined;
            rules?: undefined;
            adType?: undefined;
            keywords?: undefined;
            targetLocation?: undefined;
            competitors?: undefined;
            analyzeStrategy?: undefined;
            marketplace?: undefined;
            itemSelection?: undefined;
            priceStrategy?: undefined;
            segmentBy?: undefined;
            includeChurnRisk?: undefined;
            includeLTV?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            itemUPCs: {
                type: string;
                items: {
                    type: string;
                };
                description?: undefined;
            };
            campaignStyle: {
                type: string;
                enum: string[];
            };
            includeEmojis: {
                type: string;
                description: string;
                default: boolean;
            };
            callToAction: {
                type: string;
                enum: string[];
            };
            tone: {
                type: string;
                enum: string[];
            };
            platform?: undefined;
            campaignType?: undefined;
            budget?: undefined;
            duration?: undefined;
            targetAudience?: undefined;
            customTargeting?: undefined;
            adCreativeStyle?: undefined;
            campaignId?: undefined;
            metrics?: undefined;
            ecommercePlatform?: undefined;
            syncFrequency?: undefined;
            itemsToSync?: undefined;
            promoId?: undefined;
            targetSegment?: undefined;
            notificationMethod?: undefined;
            sendAt?: undefined;
            recipientSegment?: undefined;
            sendDate?: undefined;
            optimizationFocus?: undefined;
            rules?: undefined;
            adType?: undefined;
            keywords?: undefined;
            targetLocation?: undefined;
            competitors?: undefined;
            analyzeStrategy?: undefined;
            marketplace?: undefined;
            itemSelection?: undefined;
            priceStrategy?: undefined;
            segmentBy?: undefined;
            includeChurnRisk?: undefined;
            includeLTV?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            campaignId: {
                type: string;
                description: string;
            };
            platform: {
                type: string;
                enum: string[];
                description?: undefined;
            };
            metrics: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            campaignType?: undefined;
            itemUPCs?: undefined;
            budget?: undefined;
            duration?: undefined;
            targetAudience?: undefined;
            customTargeting?: undefined;
            adCreativeStyle?: undefined;
            campaignStyle?: undefined;
            includeEmojis?: undefined;
            callToAction?: undefined;
            tone?: undefined;
            ecommercePlatform?: undefined;
            syncFrequency?: undefined;
            itemsToSync?: undefined;
            promoId?: undefined;
            targetSegment?: undefined;
            notificationMethod?: undefined;
            sendAt?: undefined;
            recipientSegment?: undefined;
            sendDate?: undefined;
            optimizationFocus?: undefined;
            rules?: undefined;
            adType?: undefined;
            keywords?: undefined;
            targetLocation?: undefined;
            competitors?: undefined;
            analyzeStrategy?: undefined;
            marketplace?: undefined;
            itemSelection?: undefined;
            priceStrategy?: undefined;
            segmentBy?: undefined;
            includeChurnRisk?: undefined;
            includeLTV?: undefined;
        };
        required: never[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            ecommercePlatform: {
                type: string;
                enum: string[];
            };
            syncFrequency: {
                type: string;
                enum: string[];
                description: string;
            };
            itemsToSync: {
                type: string;
                enum: string[];
            };
            platform?: undefined;
            campaignType?: undefined;
            itemUPCs?: undefined;
            budget?: undefined;
            duration?: undefined;
            targetAudience?: undefined;
            customTargeting?: undefined;
            adCreativeStyle?: undefined;
            campaignStyle?: undefined;
            includeEmojis?: undefined;
            callToAction?: undefined;
            tone?: undefined;
            campaignId?: undefined;
            metrics?: undefined;
            promoId?: undefined;
            targetSegment?: undefined;
            notificationMethod?: undefined;
            sendAt?: undefined;
            recipientSegment?: undefined;
            sendDate?: undefined;
            optimizationFocus?: undefined;
            rules?: undefined;
            adType?: undefined;
            keywords?: undefined;
            targetLocation?: undefined;
            competitors?: undefined;
            analyzeStrategy?: undefined;
            marketplace?: undefined;
            itemSelection?: undefined;
            priceStrategy?: undefined;
            segmentBy?: undefined;
            includeChurnRisk?: undefined;
            includeLTV?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            promoId: {
                type: string;
                description: string;
            };
            targetSegment: {
                type: string;
                enum: string[];
            };
            notificationMethod: {
                type: string;
                enum: string[];
            };
            sendAt: {
                type: string;
                description: string;
            };
            platform?: undefined;
            campaignType?: undefined;
            itemUPCs?: undefined;
            budget?: undefined;
            duration?: undefined;
            targetAudience?: undefined;
            customTargeting?: undefined;
            adCreativeStyle?: undefined;
            campaignStyle?: undefined;
            includeEmojis?: undefined;
            callToAction?: undefined;
            tone?: undefined;
            campaignId?: undefined;
            metrics?: undefined;
            ecommercePlatform?: undefined;
            syncFrequency?: undefined;
            itemsToSync?: undefined;
            recipientSegment?: undefined;
            sendDate?: undefined;
            optimizationFocus?: undefined;
            rules?: undefined;
            adType?: undefined;
            keywords?: undefined;
            targetLocation?: undefined;
            competitors?: undefined;
            analyzeStrategy?: undefined;
            marketplace?: undefined;
            itemSelection?: undefined;
            priceStrategy?: undefined;
            segmentBy?: undefined;
            includeChurnRisk?: undefined;
            includeLTV?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            campaignType: {
                type: string;
                enum: string[];
                description?: undefined;
            };
            recipientSegment: {
                type: string;
                enum: string[];
            };
            itemUPCs: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            sendDate: {
                type: string;
                description: string;
            };
            platform?: undefined;
            budget?: undefined;
            duration?: undefined;
            targetAudience?: undefined;
            customTargeting?: undefined;
            adCreativeStyle?: undefined;
            campaignStyle?: undefined;
            includeEmojis?: undefined;
            callToAction?: undefined;
            tone?: undefined;
            campaignId?: undefined;
            metrics?: undefined;
            ecommercePlatform?: undefined;
            syncFrequency?: undefined;
            itemsToSync?: undefined;
            promoId?: undefined;
            targetSegment?: undefined;
            notificationMethod?: undefined;
            sendAt?: undefined;
            optimizationFocus?: undefined;
            rules?: undefined;
            adType?: undefined;
            keywords?: undefined;
            targetLocation?: undefined;
            competitors?: undefined;
            analyzeStrategy?: undefined;
            marketplace?: undefined;
            itemSelection?: undefined;
            priceStrategy?: undefined;
            segmentBy?: undefined;
            includeChurnRisk?: undefined;
            includeLTV?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            optimizationFocus: {
                type: string;
                enum: string[];
            };
            rules: {
                type: string;
                description: string;
            };
            platform?: undefined;
            campaignType?: undefined;
            itemUPCs?: undefined;
            budget?: undefined;
            duration?: undefined;
            targetAudience?: undefined;
            customTargeting?: undefined;
            adCreativeStyle?: undefined;
            campaignStyle?: undefined;
            includeEmojis?: undefined;
            callToAction?: undefined;
            tone?: undefined;
            campaignId?: undefined;
            metrics?: undefined;
            ecommercePlatform?: undefined;
            syncFrequency?: undefined;
            itemsToSync?: undefined;
            promoId?: undefined;
            targetSegment?: undefined;
            notificationMethod?: undefined;
            sendAt?: undefined;
            recipientSegment?: undefined;
            sendDate?: undefined;
            adType?: undefined;
            keywords?: undefined;
            targetLocation?: undefined;
            competitors?: undefined;
            analyzeStrategy?: undefined;
            marketplace?: undefined;
            itemSelection?: undefined;
            priceStrategy?: undefined;
            segmentBy?: undefined;
            includeChurnRisk?: undefined;
            includeLTV?: undefined;
        };
        required: never[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            adType: {
                type: string;
                enum: string[];
                description: string;
            };
            keywords: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            itemUPCs: {
                type: string;
                items: {
                    type: string;
                };
                description?: undefined;
            };
            budget: {
                type: string;
                description: string;
            };
            duration: {
                type: string;
                description: string;
            };
            targetLocation: {
                type: string;
                enum: string[];
            };
            platform?: undefined;
            campaignType?: undefined;
            targetAudience?: undefined;
            customTargeting?: undefined;
            adCreativeStyle?: undefined;
            campaignStyle?: undefined;
            includeEmojis?: undefined;
            callToAction?: undefined;
            tone?: undefined;
            campaignId?: undefined;
            metrics?: undefined;
            ecommercePlatform?: undefined;
            syncFrequency?: undefined;
            itemsToSync?: undefined;
            promoId?: undefined;
            targetSegment?: undefined;
            notificationMethod?: undefined;
            sendAt?: undefined;
            recipientSegment?: undefined;
            sendDate?: undefined;
            optimizationFocus?: undefined;
            rules?: undefined;
            competitors?: undefined;
            analyzeStrategy?: undefined;
            marketplace?: undefined;
            itemSelection?: undefined;
            priceStrategy?: undefined;
            segmentBy?: undefined;
            includeChurnRisk?: undefined;
            includeLTV?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            itemUPCs: {
                type: string;
                items: {
                    type: string;
                };
                description?: undefined;
            };
            competitors: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            analyzeStrategy: {
                type: string;
                enum: string[];
            };
            platform?: undefined;
            campaignType?: undefined;
            budget?: undefined;
            duration?: undefined;
            targetAudience?: undefined;
            customTargeting?: undefined;
            adCreativeStyle?: undefined;
            campaignStyle?: undefined;
            includeEmojis?: undefined;
            callToAction?: undefined;
            tone?: undefined;
            campaignId?: undefined;
            metrics?: undefined;
            ecommercePlatform?: undefined;
            syncFrequency?: undefined;
            itemsToSync?: undefined;
            promoId?: undefined;
            targetSegment?: undefined;
            notificationMethod?: undefined;
            sendAt?: undefined;
            recipientSegment?: undefined;
            sendDate?: undefined;
            optimizationFocus?: undefined;
            rules?: undefined;
            adType?: undefined;
            keywords?: undefined;
            targetLocation?: undefined;
            marketplace?: undefined;
            itemSelection?: undefined;
            priceStrategy?: undefined;
            segmentBy?: undefined;
            includeChurnRisk?: undefined;
            includeLTV?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            marketplace: {
                type: string;
                enum: string[];
            };
            itemSelection: {
                type: string;
                enum: string[];
            };
            priceStrategy: {
                type: string;
                enum: string[];
            };
            platform?: undefined;
            campaignType?: undefined;
            itemUPCs?: undefined;
            budget?: undefined;
            duration?: undefined;
            targetAudience?: undefined;
            customTargeting?: undefined;
            adCreativeStyle?: undefined;
            campaignStyle?: undefined;
            includeEmojis?: undefined;
            callToAction?: undefined;
            tone?: undefined;
            campaignId?: undefined;
            metrics?: undefined;
            ecommercePlatform?: undefined;
            syncFrequency?: undefined;
            itemsToSync?: undefined;
            promoId?: undefined;
            targetSegment?: undefined;
            notificationMethod?: undefined;
            sendAt?: undefined;
            recipientSegment?: undefined;
            sendDate?: undefined;
            optimizationFocus?: undefined;
            rules?: undefined;
            adType?: undefined;
            keywords?: undefined;
            targetLocation?: undefined;
            competitors?: undefined;
            analyzeStrategy?: undefined;
            segmentBy?: undefined;
            includeChurnRisk?: undefined;
            includeLTV?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            segmentBy: {
                type: string;
                enum: string[];
            };
            includeChurnRisk: {
                type: string;
                description: string;
                default: boolean;
            };
            includeLTV: {
                type: string;
                description: string;
                default: boolean;
            };
            platform?: undefined;
            campaignType?: undefined;
            itemUPCs?: undefined;
            budget?: undefined;
            duration?: undefined;
            targetAudience?: undefined;
            customTargeting?: undefined;
            adCreativeStyle?: undefined;
            campaignStyle?: undefined;
            includeEmojis?: undefined;
            callToAction?: undefined;
            tone?: undefined;
            campaignId?: undefined;
            metrics?: undefined;
            ecommercePlatform?: undefined;
            syncFrequency?: undefined;
            itemsToSync?: undefined;
            promoId?: undefined;
            targetSegment?: undefined;
            notificationMethod?: undefined;
            sendAt?: undefined;
            recipientSegment?: undefined;
            sendDate?: undefined;
            optimizationFocus?: undefined;
            rules?: undefined;
            adType?: undefined;
            keywords?: undefined;
            targetLocation?: undefined;
            competitors?: undefined;
            analyzeStrategy?: undefined;
            marketplace?: undefined;
            itemSelection?: undefined;
            priceStrategy?: undefined;
        };
        required: never[];
    };
})[];
