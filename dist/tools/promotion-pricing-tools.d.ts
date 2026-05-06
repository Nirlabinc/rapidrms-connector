/**
 * Promotions & Pricing Tools
 */
export declare const promotionPricingTools: ({
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            period: {
                type: string;
                enum: string[];
                description: string;
                default: string;
            };
            promoId: {
                type: string;
                description: string;
            };
            metric: {
                type: string;
                enum: string[];
                description: string;
            };
            startDate?: undefined;
            endDate?: undefined;
            changeType?: undefined;
            itemId?: undefined;
            categoryId?: undefined;
            minImpact?: undefined;
            lookbackMonths?: undefined;
            marketBaseline?: undefined;
            promoType?: undefined;
            isActive?: undefined;
            strategy?: undefined;
            targetMargin?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            startDate: {
                type: string;
                description: string;
            };
            endDate: {
                type: string;
                description: string;
            };
            changeType: {
                type: string;
                enum: string[];
                description: string;
            };
            itemId: {
                type: string;
                description: string;
            };
            categoryId: {
                type: string;
                description: string;
            };
            period?: undefined;
            promoId?: undefined;
            metric?: undefined;
            minImpact?: undefined;
            lookbackMonths?: undefined;
            marketBaseline?: undefined;
            promoType?: undefined;
            isActive?: undefined;
            strategy?: undefined;
            targetMargin?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            period: {
                type: string;
                enum: string[];
                description: string;
                default?: undefined;
            };
            minImpact: {
                type: string;
                description: string;
                default: number;
            };
            promoId?: undefined;
            metric?: undefined;
            startDate?: undefined;
            endDate?: undefined;
            changeType?: undefined;
            itemId?: undefined;
            categoryId?: undefined;
            lookbackMonths?: undefined;
            marketBaseline?: undefined;
            promoType?: undefined;
            isActive?: undefined;
            strategy?: undefined;
            targetMargin?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            lookbackMonths: {
                type: string;
                description: string;
                default: number;
            };
            categoryId: {
                type: string;
                description: string;
            };
            period?: undefined;
            promoId?: undefined;
            metric?: undefined;
            startDate?: undefined;
            endDate?: undefined;
            changeType?: undefined;
            itemId?: undefined;
            minImpact?: undefined;
            marketBaseline?: undefined;
            promoType?: undefined;
            isActive?: undefined;
            strategy?: undefined;
            targetMargin?: undefined;
        };
        required: never[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            categoryId: {
                type: string;
                description: string;
            };
            marketBaseline: {
                type: string;
                description: string;
                default: number;
            };
            period?: undefined;
            promoId?: undefined;
            metric?: undefined;
            startDate?: undefined;
            endDate?: undefined;
            changeType?: undefined;
            itemId?: undefined;
            minImpact?: undefined;
            lookbackMonths?: undefined;
            promoType?: undefined;
            isActive?: undefined;
            strategy?: undefined;
            targetMargin?: undefined;
        };
        required: never[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            startDate: {
                type: string;
                description: string;
            };
            endDate: {
                type: string;
                description: string;
            };
            promoType: {
                type: string;
                enum: string[];
            };
            period?: undefined;
            promoId?: undefined;
            metric?: undefined;
            changeType?: undefined;
            itemId?: undefined;
            categoryId?: undefined;
            minImpact?: undefined;
            lookbackMonths?: undefined;
            marketBaseline?: undefined;
            isActive?: undefined;
            strategy?: undefined;
            targetMargin?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            categoryId: {
                type: string;
                description: string;
            };
            isActive: {
                type: string;
                description: string;
                default: boolean;
            };
            period?: undefined;
            promoId?: undefined;
            metric?: undefined;
            startDate?: undefined;
            endDate?: undefined;
            changeType?: undefined;
            itemId?: undefined;
            minImpact?: undefined;
            lookbackMonths?: undefined;
            marketBaseline?: undefined;
            promoType?: undefined;
            strategy?: undefined;
            targetMargin?: undefined;
        };
        required: never[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            strategy: {
                type: string;
                enum: string[];
                description: string;
            };
            targetMargin: {
                type: string;
                description: string;
                default: number;
            };
            period?: undefined;
            promoId?: undefined;
            metric?: undefined;
            startDate?: undefined;
            endDate?: undefined;
            changeType?: undefined;
            itemId?: undefined;
            categoryId?: undefined;
            minImpact?: undefined;
            lookbackMonths?: undefined;
            marketBaseline?: undefined;
            promoType?: undefined;
            isActive?: undefined;
        };
        required: string[];
    };
})[];
