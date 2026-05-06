/**
 * Operations & Alerts Tools
 */
export declare const operationsTools: ({
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            alertType: {
                type: string;
                enum: string[];
                description: string;
                default: string;
            };
            severity: {
                type: string;
                enum: string[];
                description: string;
                default: string;
            };
            period?: undefined;
            threshold?: undefined;
            locationId?: undefined;
            daysNoSale?: undefined;
            minValue?: undefined;
            categoryId?: undefined;
            minDiscount?: undefined;
            maxDiscount?: undefined;
            targetMargin?: undefined;
            daysSinceCycle?: undefined;
            includeVariance?: undefined;
            maxCost?: undefined;
            categoryFilter?: undefined;
            reasonCode?: undefined;
            sortBy?: undefined;
            limit?: undefined;
            includeExpiring?: undefined;
            daysToExpiry?: undefined;
            metric?: undefined;
        };
        required: never[];
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
                default: string;
            };
            threshold: {
                type: string;
                description: string;
                default: number;
            };
            locationId: {
                type: string;
                description: string;
            };
            alertType?: undefined;
            severity?: undefined;
            daysNoSale?: undefined;
            minValue?: undefined;
            categoryId?: undefined;
            minDiscount?: undefined;
            maxDiscount?: undefined;
            targetMargin?: undefined;
            daysSinceCycle?: undefined;
            includeVariance?: undefined;
            maxCost?: undefined;
            categoryFilter?: undefined;
            reasonCode?: undefined;
            sortBy?: undefined;
            limit?: undefined;
            includeExpiring?: undefined;
            daysToExpiry?: undefined;
            metric?: undefined;
        };
        required: never[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            daysNoSale: {
                type: string;
                description: string;
                default: number;
            };
            minValue: {
                type: string;
                description: string;
            };
            categoryId: {
                type: string;
                description: string;
            };
            alertType?: undefined;
            severity?: undefined;
            period?: undefined;
            threshold?: undefined;
            locationId?: undefined;
            minDiscount?: undefined;
            maxDiscount?: undefined;
            targetMargin?: undefined;
            daysSinceCycle?: undefined;
            includeVariance?: undefined;
            maxCost?: undefined;
            categoryFilter?: undefined;
            reasonCode?: undefined;
            sortBy?: undefined;
            limit?: undefined;
            includeExpiring?: undefined;
            daysToExpiry?: undefined;
            metric?: undefined;
        };
        required: never[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            minDiscount: {
                type: string;
                description: string;
                default: number;
            };
            maxDiscount: {
                type: string;
                description: string;
                default: number;
            };
            targetMargin: {
                type: string;
                description: string;
                default: number;
            };
            alertType?: undefined;
            severity?: undefined;
            period?: undefined;
            threshold?: undefined;
            locationId?: undefined;
            daysNoSale?: undefined;
            minValue?: undefined;
            categoryId?: undefined;
            daysSinceCycle?: undefined;
            includeVariance?: undefined;
            maxCost?: undefined;
            categoryFilter?: undefined;
            reasonCode?: undefined;
            sortBy?: undefined;
            limit?: undefined;
            includeExpiring?: undefined;
            daysToExpiry?: undefined;
            metric?: undefined;
        };
        required: never[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            locationId: {
                type: string;
                description: string;
            };
            daysSinceCycle: {
                type: string;
                description: string;
                default: number;
            };
            alertType?: undefined;
            severity?: undefined;
            period?: undefined;
            threshold?: undefined;
            daysNoSale?: undefined;
            minValue?: undefined;
            categoryId?: undefined;
            minDiscount?: undefined;
            maxDiscount?: undefined;
            targetMargin?: undefined;
            includeVariance?: undefined;
            maxCost?: undefined;
            categoryFilter?: undefined;
            reasonCode?: undefined;
            sortBy?: undefined;
            limit?: undefined;
            includeExpiring?: undefined;
            daysToExpiry?: undefined;
            metric?: undefined;
        };
        required: never[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            includeVariance: {
                type: string;
                description: string;
                default: boolean;
            };
            maxCost: {
                type: string;
                description: string;
            };
            categoryFilter: {
                type: string;
                description: string;
            };
            alertType?: undefined;
            severity?: undefined;
            period?: undefined;
            threshold?: undefined;
            locationId?: undefined;
            daysNoSale?: undefined;
            minValue?: undefined;
            categoryId?: undefined;
            minDiscount?: undefined;
            maxDiscount?: undefined;
            targetMargin?: undefined;
            daysSinceCycle?: undefined;
            reasonCode?: undefined;
            sortBy?: undefined;
            limit?: undefined;
            includeExpiring?: undefined;
            daysToExpiry?: undefined;
            metric?: undefined;
        };
        required: never[];
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
                default: string;
            };
            reasonCode: {
                type: string;
                enum: string[];
                description: string;
                default: string;
            };
            alertType?: undefined;
            severity?: undefined;
            threshold?: undefined;
            locationId?: undefined;
            daysNoSale?: undefined;
            minValue?: undefined;
            categoryId?: undefined;
            minDiscount?: undefined;
            maxDiscount?: undefined;
            targetMargin?: undefined;
            daysSinceCycle?: undefined;
            includeVariance?: undefined;
            maxCost?: undefined;
            categoryFilter?: undefined;
            sortBy?: undefined;
            limit?: undefined;
            includeExpiring?: undefined;
            daysToExpiry?: undefined;
            metric?: undefined;
        };
        required: never[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            sortBy: {
                type: string;
                enum: string[];
                description: string;
                default: string;
            };
            limit: {
                type: string;
                description: string;
                default: number;
            };
            alertType?: undefined;
            severity?: undefined;
            period?: undefined;
            threshold?: undefined;
            locationId?: undefined;
            daysNoSale?: undefined;
            minValue?: undefined;
            categoryId?: undefined;
            minDiscount?: undefined;
            maxDiscount?: undefined;
            targetMargin?: undefined;
            daysSinceCycle?: undefined;
            includeVariance?: undefined;
            maxCost?: undefined;
            categoryFilter?: undefined;
            reasonCode?: undefined;
            includeExpiring?: undefined;
            daysToExpiry?: undefined;
            metric?: undefined;
        };
        required: never[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            includeExpiring: {
                type: string;
                description: string;
                default: boolean;
            };
            daysToExpiry: {
                type: string;
                description: string;
                default: number;
            };
            alertType?: undefined;
            severity?: undefined;
            period?: undefined;
            threshold?: undefined;
            locationId?: undefined;
            daysNoSale?: undefined;
            minValue?: undefined;
            categoryId?: undefined;
            minDiscount?: undefined;
            maxDiscount?: undefined;
            targetMargin?: undefined;
            daysSinceCycle?: undefined;
            includeVariance?: undefined;
            maxCost?: undefined;
            categoryFilter?: undefined;
            reasonCode?: undefined;
            sortBy?: undefined;
            limit?: undefined;
            metric?: undefined;
        };
        required: never[];
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
                default: string;
            };
            metric: {
                type: string;
                enum: string[];
                description: string;
                default: string;
            };
            alertType?: undefined;
            severity?: undefined;
            threshold?: undefined;
            locationId?: undefined;
            daysNoSale?: undefined;
            minValue?: undefined;
            categoryId?: undefined;
            minDiscount?: undefined;
            maxDiscount?: undefined;
            targetMargin?: undefined;
            daysSinceCycle?: undefined;
            includeVariance?: undefined;
            maxCost?: undefined;
            categoryFilter?: undefined;
            reasonCode?: undefined;
            sortBy?: undefined;
            limit?: undefined;
            includeExpiring?: undefined;
            daysToExpiry?: undefined;
        };
        required: never[];
    };
})[];
