/**
 * All tool definitions for RapidRMS Connector
 * Export for use in Claude SDK, MCP servers, OpenAPI specs
 */
export { salesTools } from './sales-tools.js';
export { inventoryTools } from './inventory-tools.js';
export { operationsTools } from './operations-tools.js';
export { employeeTools } from './employee-tools.js';
export { promotionPricingTools } from './promotion-pricing-tools.js';
export { advancedInventoryTools } from './advanced-inventory-tools.js';
export { transactionTenderTools } from './transaction-tender-tools.js';
export { writeOperationsTools } from './write-operations-tools.js';
export { analyticsInsightsTools } from './analytics-insights-tools.js';
export { marketingIntegrationTools } from './marketing-integration-tools.js';
/**
 * All tools combined for registration
 */
export declare const allTools: ({
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
            locationId: {
                type: string;
                description: string;
            };
            employeeId: {
                type: string;
                description: string;
            };
            period?: undefined;
            metric?: undefined;
            limit?: undefined;
            sortBy?: undefined;
            period1Start?: undefined;
            period1End?: undefined;
            period2Start?: undefined;
            period2End?: undefined;
            departmentId?: undefined;
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
            };
            locationId: {
                type: string;
                description: string;
            };
            startDate?: undefined;
            endDate?: undefined;
            employeeId?: undefined;
            metric?: undefined;
            limit?: undefined;
            sortBy?: undefined;
            period1Start?: undefined;
            period1End?: undefined;
            period2Start?: undefined;
            period2End?: undefined;
            departmentId?: undefined;
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
            };
            metric: {
                type: string;
                enum: string[];
                description: string;
            };
            limit: {
                type: string;
                description: string;
                default: number;
            };
            locationId: {
                type: string;
                description: string;
            };
            startDate?: undefined;
            endDate?: undefined;
            employeeId?: undefined;
            sortBy?: undefined;
            period1Start?: undefined;
            period1End?: undefined;
            period2Start?: undefined;
            period2End?: undefined;
            departmentId?: undefined;
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
            };
            metric: {
                type: string;
                enum: string[];
                description: string;
            };
            limit: {
                type: string;
                description: string;
                default: number;
            };
            startDate?: undefined;
            endDate?: undefined;
            locationId?: undefined;
            employeeId?: undefined;
            sortBy?: undefined;
            period1Start?: undefined;
            period1End?: undefined;
            period2Start?: undefined;
            period2End?: undefined;
            departmentId?: undefined;
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
            };
            sortBy: {
                type: string;
                enum: string[];
                description: string;
            };
            limit: {
                type: string;
                description: string;
                default: number;
            };
            startDate?: undefined;
            endDate?: undefined;
            locationId?: undefined;
            employeeId?: undefined;
            metric?: undefined;
            period1Start?: undefined;
            period1End?: undefined;
            period2Start?: undefined;
            period2End?: undefined;
            departmentId?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            period1Start: {
                type: string;
                description: string;
            };
            period1End: {
                type: string;
                description: string;
            };
            period2Start: {
                type: string;
                description: string;
            };
            period2End: {
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
            locationId?: undefined;
            employeeId?: undefined;
            period?: undefined;
            limit?: undefined;
            sortBy?: undefined;
            departmentId?: undefined;
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
            departmentId: {
                type: string;
                description: string;
            };
            locationId?: undefined;
            employeeId?: undefined;
            period?: undefined;
            metric?: undefined;
            limit?: undefined;
            sortBy?: undefined;
            period1Start?: undefined;
            period1End?: undefined;
            period2Start?: undefined;
            period2End?: undefined;
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
            locationId?: undefined;
            employeeId?: undefined;
            period?: undefined;
            metric?: undefined;
            limit?: undefined;
            sortBy?: undefined;
            period1Start?: undefined;
            period1End?: undefined;
            period2Start?: undefined;
            period2End?: undefined;
            departmentId?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            category: {
                type: string;
                description: string;
            };
            itemId: {
                type: string;
                description: string;
            };
            categoryId?: undefined;
            urgency?: undefined;
            threshold?: undefined;
            locationId?: undefined;
            lookbackDays?: undefined;
            forecastDays?: undefined;
            safetyStock?: undefined;
            period?: undefined;
            groupBy?: undefined;
            vendorId?: undefined;
            items?: undefined;
            notes?: undefined;
            autoSubmit?: undefined;
            asOfDate?: undefined;
            byCategory?: undefined;
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
            urgency: {
                type: string;
                enum: string[];
                description: string;
                default: string;
            };
            category?: undefined;
            itemId?: undefined;
            threshold?: undefined;
            locationId?: undefined;
            lookbackDays?: undefined;
            forecastDays?: undefined;
            safetyStock?: undefined;
            period?: undefined;
            groupBy?: undefined;
            vendorId?: undefined;
            items?: undefined;
            notes?: undefined;
            autoSubmit?: undefined;
            asOfDate?: undefined;
            byCategory?: undefined;
        };
        required: never[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            threshold: {
                type: string;
                description: string;
                default: number;
            };
            locationId: {
                type: string;
                description: string;
            };
            category?: undefined;
            itemId?: undefined;
            categoryId?: undefined;
            urgency?: undefined;
            lookbackDays?: undefined;
            forecastDays?: undefined;
            safetyStock?: undefined;
            period?: undefined;
            groupBy?: undefined;
            vendorId?: undefined;
            items?: undefined;
            notes?: undefined;
            autoSubmit?: undefined;
            asOfDate?: undefined;
            byCategory?: undefined;
        };
        required: never[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            lookbackDays: {
                type: string;
                description: string;
                default: number;
            };
            forecastDays: {
                type: string;
                description: string;
                default: number;
            };
            safetyStock: {
                type: string;
                description: string;
                default: number;
            };
            category?: undefined;
            itemId?: undefined;
            categoryId?: undefined;
            urgency?: undefined;
            threshold?: undefined;
            locationId?: undefined;
            period?: undefined;
            groupBy?: undefined;
            vendorId?: undefined;
            items?: undefined;
            notes?: undefined;
            autoSubmit?: undefined;
            asOfDate?: undefined;
            byCategory?: undefined;
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
            groupBy: {
                type: string;
                enum: string[];
                description: string;
                default: string;
            };
            category?: undefined;
            itemId?: undefined;
            categoryId?: undefined;
            urgency?: undefined;
            threshold?: undefined;
            locationId?: undefined;
            lookbackDays?: undefined;
            forecastDays?: undefined;
            safetyStock?: undefined;
            vendorId?: undefined;
            items?: undefined;
            notes?: undefined;
            autoSubmit?: undefined;
            asOfDate?: undefined;
            byCategory?: undefined;
        };
        required: never[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            vendorId: {
                type: string;
                description: string;
            };
            items: {
                type: string;
                description: string;
                items: {
                    type: string;
                    properties: {
                        itemId: {
                            type: string;
                        };
                        quantity: {
                            type: string;
                        };
                        unitPrice: {
                            type: string;
                        };
                    };
                    required: string[];
                };
            };
            notes: {
                type: string;
                description: string;
            };
            autoSubmit: {
                type: string;
                description: string;
                default: boolean;
            };
            category?: undefined;
            itemId?: undefined;
            categoryId?: undefined;
            urgency?: undefined;
            threshold?: undefined;
            locationId?: undefined;
            lookbackDays?: undefined;
            forecastDays?: undefined;
            safetyStock?: undefined;
            period?: undefined;
            groupBy?: undefined;
            asOfDate?: undefined;
            byCategory?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            vendorId: {
                type: string;
                description: string;
            };
            period: {
                type: string;
                enum: string[];
                description: string;
                default: string;
            };
            category?: undefined;
            itemId?: undefined;
            categoryId?: undefined;
            urgency?: undefined;
            threshold?: undefined;
            locationId?: undefined;
            lookbackDays?: undefined;
            forecastDays?: undefined;
            safetyStock?: undefined;
            groupBy?: undefined;
            items?: undefined;
            notes?: undefined;
            autoSubmit?: undefined;
            asOfDate?: undefined;
            byCategory?: undefined;
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
            category?: undefined;
            itemId?: undefined;
            categoryId?: undefined;
            urgency?: undefined;
            threshold?: undefined;
            locationId?: undefined;
            lookbackDays?: undefined;
            forecastDays?: undefined;
            safetyStock?: undefined;
            groupBy?: undefined;
            vendorId?: undefined;
            items?: undefined;
            notes?: undefined;
            autoSubmit?: undefined;
            asOfDate?: undefined;
            byCategory?: undefined;
        };
        required: never[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            asOfDate: {
                type: string;
                description: string;
            };
            byCategory: {
                type: string;
                description: string;
                default: boolean;
            };
            category?: undefined;
            itemId?: undefined;
            categoryId?: undefined;
            urgency?: undefined;
            threshold?: undefined;
            locationId?: undefined;
            lookbackDays?: undefined;
            forecastDays?: undefined;
            safetyStock?: undefined;
            period?: undefined;
            groupBy?: undefined;
            vendorId?: undefined;
            items?: undefined;
            notes?: undefined;
            autoSubmit?: undefined;
        };
        required: never[];
    };
} | {
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
            employeeId: {
                type: string;
                description: string;
            };
            locationId: {
                type: string;
                description: string;
            };
            groupBy?: undefined;
            reportDate?: undefined;
            shiftNumber?: undefined;
            cardType?: undefined;
            includeDeclined?: undefined;
            keyword?: undefined;
            minAmount?: undefined;
            maxAmount?: undefined;
            transactionType?: undefined;
            paymentMethod?: undefined;
            period?: undefined;
            sortBy?: undefined;
            includeTerminated?: undefined;
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
            employeeId: {
                type: string;
                description: string;
            };
            groupBy: {
                type: string;
                enum: string[];
                description: string;
            };
            locationId?: undefined;
            reportDate?: undefined;
            shiftNumber?: undefined;
            cardType?: undefined;
            includeDeclined?: undefined;
            keyword?: undefined;
            minAmount?: undefined;
            maxAmount?: undefined;
            transactionType?: undefined;
            paymentMethod?: undefined;
            period?: undefined;
            sortBy?: undefined;
            includeTerminated?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            reportDate: {
                type: string;
                description: string;
            };
            shiftNumber: {
                type: string;
                description: string;
            };
            locationId: {
                type: string;
                description: string;
            };
            startDate?: undefined;
            endDate?: undefined;
            employeeId?: undefined;
            groupBy?: undefined;
            cardType?: undefined;
            includeDeclined?: undefined;
            keyword?: undefined;
            minAmount?: undefined;
            maxAmount?: undefined;
            transactionType?: undefined;
            paymentMethod?: undefined;
            period?: undefined;
            sortBy?: undefined;
            includeTerminated?: undefined;
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
            locationId: {
                type: string;
                description: string;
            };
            employeeId?: undefined;
            groupBy?: undefined;
            reportDate?: undefined;
            shiftNumber?: undefined;
            cardType?: undefined;
            includeDeclined?: undefined;
            keyword?: undefined;
            minAmount?: undefined;
            maxAmount?: undefined;
            transactionType?: undefined;
            paymentMethod?: undefined;
            period?: undefined;
            sortBy?: undefined;
            includeTerminated?: undefined;
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
            cardType: {
                type: string;
                enum: string[];
                description: string;
            };
            includeDeclined: {
                type: string;
                description: string;
                default: boolean;
            };
            employeeId?: undefined;
            locationId?: undefined;
            groupBy?: undefined;
            reportDate?: undefined;
            shiftNumber?: undefined;
            keyword?: undefined;
            minAmount?: undefined;
            maxAmount?: undefined;
            transactionType?: undefined;
            paymentMethod?: undefined;
            period?: undefined;
            sortBy?: undefined;
            includeTerminated?: undefined;
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
            keyword: {
                type: string;
                description: string;
            };
            minAmount: {
                type: string;
                description: string;
            };
            maxAmount: {
                type: string;
                description: string;
            };
            transactionType: {
                type: string;
                enum: string[];
            };
            employeeId: {
                type: string;
                description: string;
            };
            paymentMethod: {
                type: string;
                enum: string[];
            };
            locationId?: undefined;
            groupBy?: undefined;
            reportDate?: undefined;
            shiftNumber?: undefined;
            cardType?: undefined;
            includeDeclined?: undefined;
            period?: undefined;
            sortBy?: undefined;
            includeTerminated?: undefined;
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
            };
            sortBy: {
                type: string;
                enum: string[];
                description: string;
            };
            includeTerminated: {
                type: string;
                description: string;
                default: boolean;
            };
            startDate?: undefined;
            endDate?: undefined;
            employeeId?: undefined;
            locationId?: undefined;
            groupBy?: undefined;
            reportDate?: undefined;
            shiftNumber?: undefined;
            cardType?: undefined;
            includeDeclined?: undefined;
            keyword?: undefined;
            minAmount?: undefined;
            maxAmount?: undefined;
            transactionType?: undefined;
            paymentMethod?: undefined;
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
            };
            endDate: {
                type: string;
                description: string;
            };
            employeeId: {
                type: string;
                description: string;
            };
            startDate?: undefined;
            locationId?: undefined;
            groupBy?: undefined;
            reportDate?: undefined;
            shiftNumber?: undefined;
            cardType?: undefined;
            includeDeclined?: undefined;
            keyword?: undefined;
            minAmount?: undefined;
            maxAmount?: undefined;
            transactionType?: undefined;
            paymentMethod?: undefined;
            sortBy?: undefined;
            includeTerminated?: undefined;
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
            };
            employeeId: {
                type: string;
                description: string;
            };
            startDate?: undefined;
            endDate?: undefined;
            locationId?: undefined;
            groupBy?: undefined;
            reportDate?: undefined;
            shiftNumber?: undefined;
            cardType?: undefined;
            includeDeclined?: undefined;
            keyword?: undefined;
            minAmount?: undefined;
            maxAmount?: undefined;
            transactionType?: undefined;
            paymentMethod?: undefined;
            sortBy?: undefined;
            includeTerminated?: undefined;
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
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            itemId: {
                type: string;
                description: string;
            };
            includeHistory: {
                type: string;
                description: string;
                default: boolean;
            };
            historyMonths: {
                type: string;
                description: string;
                default: number;
            };
            categoryId?: undefined;
            urgencyLevel?: undefined;
            includeRecommendedVendor?: undefined;
            period?: undefined;
            groupBy?: undefined;
            sortBy?: undefined;
            minRevenue?: undefined;
            analysisStartDate?: undefined;
            analysisEndDate?: undefined;
            comparisonPeriod?: undefined;
            vendorId?: undefined;
            safetyStock?: undefined;
            autoSubmit?: undefined;
            period1Start?: undefined;
            period1End?: undefined;
            period2Start?: undefined;
            period2End?: undefined;
            showGrowth?: undefined;
            includeHistorical?: undefined;
            statusFilter?: undefined;
            showAging?: undefined;
            forecastPeriod?: undefined;
            weeksAhead?: undefined;
            accountForSeasonal?: undefined;
            daysOld?: undefined;
            includeHoldingCost?: undefined;
            minValue?: undefined;
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
            urgencyLevel: {
                type: string;
                enum: string[];
                description: string;
                default: string;
            };
            includeRecommendedVendor: {
                type: string;
                description: string;
                default: boolean;
            };
            itemId?: undefined;
            includeHistory?: undefined;
            historyMonths?: undefined;
            period?: undefined;
            groupBy?: undefined;
            sortBy?: undefined;
            minRevenue?: undefined;
            analysisStartDate?: undefined;
            analysisEndDate?: undefined;
            comparisonPeriod?: undefined;
            vendorId?: undefined;
            safetyStock?: undefined;
            autoSubmit?: undefined;
            period1Start?: undefined;
            period1End?: undefined;
            period2Start?: undefined;
            period2End?: undefined;
            showGrowth?: undefined;
            includeHistorical?: undefined;
            statusFilter?: undefined;
            showAging?: undefined;
            forecastPeriod?: undefined;
            weeksAhead?: undefined;
            accountForSeasonal?: undefined;
            daysOld?: undefined;
            includeHoldingCost?: undefined;
            minValue?: undefined;
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
            };
            groupBy: {
                type: string;
                enum: string[];
                description: string;
                default?: undefined;
            };
            sortBy: {
                type: string;
                enum: string[];
                description: string;
            };
            minRevenue: {
                type: string;
                description: string;
            };
            itemId?: undefined;
            includeHistory?: undefined;
            historyMonths?: undefined;
            categoryId?: undefined;
            urgencyLevel?: undefined;
            includeRecommendedVendor?: undefined;
            analysisStartDate?: undefined;
            analysisEndDate?: undefined;
            comparisonPeriod?: undefined;
            vendorId?: undefined;
            safetyStock?: undefined;
            autoSubmit?: undefined;
            period1Start?: undefined;
            period1End?: undefined;
            period2Start?: undefined;
            period2End?: undefined;
            showGrowth?: undefined;
            includeHistorical?: undefined;
            statusFilter?: undefined;
            showAging?: undefined;
            forecastPeriod?: undefined;
            weeksAhead?: undefined;
            accountForSeasonal?: undefined;
            daysOld?: undefined;
            includeHoldingCost?: undefined;
            minValue?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            analysisStartDate: {
                type: string;
                description: string;
            };
            analysisEndDate: {
                type: string;
                description: string;
            };
            comparisonPeriod: {
                type: string;
                enum: string[];
                description: string;
                default: string;
            };
            vendorId: {
                type: string;
                description: string;
            };
            categoryId: {
                type: string;
                description: string;
            };
            safetyStock: {
                type: string;
                description: string;
                default: number;
            };
            autoSubmit: {
                type: string;
                description: string;
                default: boolean;
            };
            itemId?: undefined;
            includeHistory?: undefined;
            historyMonths?: undefined;
            urgencyLevel?: undefined;
            includeRecommendedVendor?: undefined;
            period?: undefined;
            groupBy?: undefined;
            sortBy?: undefined;
            minRevenue?: undefined;
            period1Start?: undefined;
            period1End?: undefined;
            period2Start?: undefined;
            period2End?: undefined;
            showGrowth?: undefined;
            includeHistorical?: undefined;
            statusFilter?: undefined;
            showAging?: undefined;
            forecastPeriod?: undefined;
            weeksAhead?: undefined;
            accountForSeasonal?: undefined;
            daysOld?: undefined;
            includeHoldingCost?: undefined;
            minValue?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            period1Start: {
                type: string;
                description: string;
            };
            period1End: {
                type: string;
                description: string;
            };
            period2Start: {
                type: string;
                description: string;
            };
            period2End: {
                type: string;
                description: string;
            };
            groupBy: {
                type: string;
                enum: string[];
                description: string;
                default: string;
            };
            showGrowth: {
                type: string;
                description: string;
                default: boolean;
            };
            itemId?: undefined;
            includeHistory?: undefined;
            historyMonths?: undefined;
            categoryId?: undefined;
            urgencyLevel?: undefined;
            includeRecommendedVendor?: undefined;
            period?: undefined;
            sortBy?: undefined;
            minRevenue?: undefined;
            analysisStartDate?: undefined;
            analysisEndDate?: undefined;
            comparisonPeriod?: undefined;
            vendorId?: undefined;
            safetyStock?: undefined;
            autoSubmit?: undefined;
            includeHistorical?: undefined;
            statusFilter?: undefined;
            showAging?: undefined;
            forecastPeriod?: undefined;
            weeksAhead?: undefined;
            accountForSeasonal?: undefined;
            daysOld?: undefined;
            includeHoldingCost?: undefined;
            minValue?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            itemId: {
                type: string;
                description: string;
            };
            includeHistorical: {
                type: string;
                description: string;
                default: boolean;
            };
            includeHistory?: undefined;
            historyMonths?: undefined;
            categoryId?: undefined;
            urgencyLevel?: undefined;
            includeRecommendedVendor?: undefined;
            period?: undefined;
            groupBy?: undefined;
            sortBy?: undefined;
            minRevenue?: undefined;
            analysisStartDate?: undefined;
            analysisEndDate?: undefined;
            comparisonPeriod?: undefined;
            vendorId?: undefined;
            safetyStock?: undefined;
            autoSubmit?: undefined;
            period1Start?: undefined;
            period1End?: undefined;
            period2Start?: undefined;
            period2End?: undefined;
            showGrowth?: undefined;
            statusFilter?: undefined;
            showAging?: undefined;
            forecastPeriod?: undefined;
            weeksAhead?: undefined;
            accountForSeasonal?: undefined;
            daysOld?: undefined;
            includeHoldingCost?: undefined;
            minValue?: undefined;
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
            };
            vendorId: {
                type: string;
                description: string;
            };
            itemId: {
                type: string;
                description: string;
            };
            statusFilter: {
                type: string;
                enum: string[];
                description: string;
            };
            includeHistory?: undefined;
            historyMonths?: undefined;
            categoryId?: undefined;
            urgencyLevel?: undefined;
            includeRecommendedVendor?: undefined;
            groupBy?: undefined;
            sortBy?: undefined;
            minRevenue?: undefined;
            analysisStartDate?: undefined;
            analysisEndDate?: undefined;
            comparisonPeriod?: undefined;
            safetyStock?: undefined;
            autoSubmit?: undefined;
            period1Start?: undefined;
            period1End?: undefined;
            period2Start?: undefined;
            period2End?: undefined;
            showGrowth?: undefined;
            includeHistorical?: undefined;
            showAging?: undefined;
            forecastPeriod?: undefined;
            weeksAhead?: undefined;
            accountForSeasonal?: undefined;
            daysOld?: undefined;
            includeHoldingCost?: undefined;
            minValue?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            itemId: {
                type: string;
                description: string;
            };
            period: {
                type: string;
                enum: string[];
                description: string;
            };
            showAging: {
                type: string;
                description: string;
                default: boolean;
            };
            includeHistory?: undefined;
            historyMonths?: undefined;
            categoryId?: undefined;
            urgencyLevel?: undefined;
            includeRecommendedVendor?: undefined;
            groupBy?: undefined;
            sortBy?: undefined;
            minRevenue?: undefined;
            analysisStartDate?: undefined;
            analysisEndDate?: undefined;
            comparisonPeriod?: undefined;
            vendorId?: undefined;
            safetyStock?: undefined;
            autoSubmit?: undefined;
            period1Start?: undefined;
            period1End?: undefined;
            period2Start?: undefined;
            period2End?: undefined;
            showGrowth?: undefined;
            includeHistorical?: undefined;
            statusFilter?: undefined;
            forecastPeriod?: undefined;
            weeksAhead?: undefined;
            accountForSeasonal?: undefined;
            daysOld?: undefined;
            includeHoldingCost?: undefined;
            minValue?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            forecastPeriod: {
                type: string;
                enum: string[];
                description: string;
            };
            weeksAhead: {
                type: string;
                description: string;
                default: number;
            };
            accountForSeasonal: {
                type: string;
                description: string;
                default: boolean;
            };
            vendorId: {
                type: string;
                description: string;
            };
            itemId?: undefined;
            includeHistory?: undefined;
            historyMonths?: undefined;
            categoryId?: undefined;
            urgencyLevel?: undefined;
            includeRecommendedVendor?: undefined;
            period?: undefined;
            groupBy?: undefined;
            sortBy?: undefined;
            minRevenue?: undefined;
            analysisStartDate?: undefined;
            analysisEndDate?: undefined;
            comparisonPeriod?: undefined;
            safetyStock?: undefined;
            autoSubmit?: undefined;
            period1Start?: undefined;
            period1End?: undefined;
            period2Start?: undefined;
            period2End?: undefined;
            showGrowth?: undefined;
            includeHistorical?: undefined;
            statusFilter?: undefined;
            showAging?: undefined;
            daysOld?: undefined;
            includeHoldingCost?: undefined;
            minValue?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            daysOld: {
                type: string;
                description: string;
                default: number;
            };
            includeHoldingCost: {
                type: string;
                description: string;
                default: boolean;
            };
            minValue: {
                type: string;
                description: string;
            };
            itemId?: undefined;
            includeHistory?: undefined;
            historyMonths?: undefined;
            categoryId?: undefined;
            urgencyLevel?: undefined;
            includeRecommendedVendor?: undefined;
            period?: undefined;
            groupBy?: undefined;
            sortBy?: undefined;
            minRevenue?: undefined;
            analysisStartDate?: undefined;
            analysisEndDate?: undefined;
            comparisonPeriod?: undefined;
            vendorId?: undefined;
            safetyStock?: undefined;
            autoSubmit?: undefined;
            period1Start?: undefined;
            period1End?: undefined;
            period2Start?: undefined;
            period2End?: undefined;
            showGrowth?: undefined;
            includeHistorical?: undefined;
            statusFilter?: undefined;
            showAging?: undefined;
            forecastPeriod?: undefined;
            weeksAhead?: undefined;
            accountForSeasonal?: undefined;
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
            tenderType: {
                type: string;
                enum: string[];
                description: string;
            };
            locationId: {
                type: string;
                description: string;
            };
            employeeId?: undefined;
            hasDiscrepancy?: undefined;
            threshold?: undefined;
            itemId?: undefined;
            minAmount?: undefined;
            reason?: undefined;
            minDiscountAmount?: undefined;
            groupByDay?: undefined;
            identifyPeakHours?: undefined;
            showSubDept?: undefined;
            sortBy?: undefined;
            period?: undefined;
            minTransactions?: undefined;
            showChurn?: undefined;
            customerId?: undefined;
            phoneNumber?: undefined;
            pointsStatus?: undefined;
            categoryId?: undefined;
            minInventoryValue?: undefined;
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
            employeeId: {
                type: string;
                description: string;
            };
            hasDiscrepancy: {
                type: string;
                description: string;
            };
            tenderType?: undefined;
            locationId?: undefined;
            threshold?: undefined;
            itemId?: undefined;
            minAmount?: undefined;
            reason?: undefined;
            minDiscountAmount?: undefined;
            groupByDay?: undefined;
            identifyPeakHours?: undefined;
            showSubDept?: undefined;
            sortBy?: undefined;
            period?: undefined;
            minTransactions?: undefined;
            showChurn?: undefined;
            customerId?: undefined;
            phoneNumber?: undefined;
            pointsStatus?: undefined;
            categoryId?: undefined;
            minInventoryValue?: undefined;
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
            employeeId: {
                type: string;
                description: string;
            };
            threshold: {
                type: string;
                description: string;
                default: number;
            };
            tenderType?: undefined;
            locationId?: undefined;
            hasDiscrepancy?: undefined;
            itemId?: undefined;
            minAmount?: undefined;
            reason?: undefined;
            minDiscountAmount?: undefined;
            groupByDay?: undefined;
            identifyPeakHours?: undefined;
            showSubDept?: undefined;
            sortBy?: undefined;
            period?: undefined;
            minTransactions?: undefined;
            showChurn?: undefined;
            customerId?: undefined;
            phoneNumber?: undefined;
            pointsStatus?: undefined;
            categoryId?: undefined;
            minInventoryValue?: undefined;
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
            itemId: {
                type: string;
                description: string;
            };
            employeeId: {
                type: string;
                description: string;
            };
            minAmount: {
                type: string;
                description: string;
            };
            tenderType?: undefined;
            locationId?: undefined;
            hasDiscrepancy?: undefined;
            threshold?: undefined;
            reason?: undefined;
            minDiscountAmount?: undefined;
            groupByDay?: undefined;
            identifyPeakHours?: undefined;
            showSubDept?: undefined;
            sortBy?: undefined;
            period?: undefined;
            minTransactions?: undefined;
            showChurn?: undefined;
            customerId?: undefined;
            phoneNumber?: undefined;
            pointsStatus?: undefined;
            categoryId?: undefined;
            minInventoryValue?: undefined;
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
            reason: {
                type: string;
                enum: string[];
            };
            employeeId: {
                type: string;
                description: string;
            };
            tenderType?: undefined;
            locationId?: undefined;
            hasDiscrepancy?: undefined;
            threshold?: undefined;
            itemId?: undefined;
            minAmount?: undefined;
            minDiscountAmount?: undefined;
            groupByDay?: undefined;
            identifyPeakHours?: undefined;
            showSubDept?: undefined;
            sortBy?: undefined;
            period?: undefined;
            minTransactions?: undefined;
            showChurn?: undefined;
            customerId?: undefined;
            phoneNumber?: undefined;
            pointsStatus?: undefined;
            categoryId?: undefined;
            minInventoryValue?: undefined;
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
            minDiscountAmount: {
                type: string;
                description: string;
                default: number;
            };
            employeeId: {
                type: string;
                description: string;
            };
            tenderType?: undefined;
            locationId?: undefined;
            hasDiscrepancy?: undefined;
            threshold?: undefined;
            itemId?: undefined;
            minAmount?: undefined;
            reason?: undefined;
            groupByDay?: undefined;
            identifyPeakHours?: undefined;
            showSubDept?: undefined;
            sortBy?: undefined;
            period?: undefined;
            minTransactions?: undefined;
            showChurn?: undefined;
            customerId?: undefined;
            phoneNumber?: undefined;
            pointsStatus?: undefined;
            categoryId?: undefined;
            minInventoryValue?: undefined;
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
            groupByDay: {
                type: string;
                description: string;
                default: boolean;
            };
            identifyPeakHours: {
                type: string;
                description: string;
                default: boolean;
            };
            tenderType?: undefined;
            locationId?: undefined;
            employeeId?: undefined;
            hasDiscrepancy?: undefined;
            threshold?: undefined;
            itemId?: undefined;
            minAmount?: undefined;
            reason?: undefined;
            minDiscountAmount?: undefined;
            showSubDept?: undefined;
            sortBy?: undefined;
            period?: undefined;
            minTransactions?: undefined;
            showChurn?: undefined;
            customerId?: undefined;
            phoneNumber?: undefined;
            pointsStatus?: undefined;
            categoryId?: undefined;
            minInventoryValue?: undefined;
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
            showSubDept: {
                type: string;
                description: string;
                default: boolean;
            };
            sortBy: {
                type: string;
                enum: string[];
                description: string;
            };
            tenderType?: undefined;
            locationId?: undefined;
            employeeId?: undefined;
            hasDiscrepancy?: undefined;
            threshold?: undefined;
            itemId?: undefined;
            minAmount?: undefined;
            reason?: undefined;
            minDiscountAmount?: undefined;
            groupByDay?: undefined;
            identifyPeakHours?: undefined;
            period?: undefined;
            minTransactions?: undefined;
            showChurn?: undefined;
            customerId?: undefined;
            phoneNumber?: undefined;
            pointsStatus?: undefined;
            categoryId?: undefined;
            minInventoryValue?: undefined;
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
            };
            minTransactions: {
                type: string;
                description: string;
                default: number;
            };
            showChurn: {
                type: string;
                description: string;
                default: boolean;
            };
            startDate?: undefined;
            endDate?: undefined;
            tenderType?: undefined;
            locationId?: undefined;
            employeeId?: undefined;
            hasDiscrepancy?: undefined;
            threshold?: undefined;
            itemId?: undefined;
            minAmount?: undefined;
            reason?: undefined;
            minDiscountAmount?: undefined;
            groupByDay?: undefined;
            identifyPeakHours?: undefined;
            showSubDept?: undefined;
            sortBy?: undefined;
            customerId?: undefined;
            phoneNumber?: undefined;
            pointsStatus?: undefined;
            categoryId?: undefined;
            minInventoryValue?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            customerId: {
                type: string;
                description: string;
            };
            phoneNumber: {
                type: string;
                description: string;
            };
            pointsStatus: {
                type: string;
                enum: string[];
            };
            startDate?: undefined;
            endDate?: undefined;
            tenderType?: undefined;
            locationId?: undefined;
            employeeId?: undefined;
            hasDiscrepancy?: undefined;
            threshold?: undefined;
            itemId?: undefined;
            minAmount?: undefined;
            reason?: undefined;
            minDiscountAmount?: undefined;
            groupByDay?: undefined;
            identifyPeakHours?: undefined;
            showSubDept?: undefined;
            sortBy?: undefined;
            period?: undefined;
            minTransactions?: undefined;
            showChurn?: undefined;
            categoryId?: undefined;
            minInventoryValue?: undefined;
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
            };
            categoryId: {
                type: string;
                description: string;
            };
            minInventoryValue: {
                type: string;
                description: string;
            };
            startDate?: undefined;
            endDate?: undefined;
            tenderType?: undefined;
            locationId?: undefined;
            employeeId?: undefined;
            hasDiscrepancy?: undefined;
            threshold?: undefined;
            itemId?: undefined;
            minAmount?: undefined;
            reason?: undefined;
            minDiscountAmount?: undefined;
            groupByDay?: undefined;
            identifyPeakHours?: undefined;
            showSubDept?: undefined;
            sortBy?: undefined;
            minTransactions?: undefined;
            showChurn?: undefined;
            customerId?: undefined;
            phoneNumber?: undefined;
            pointsStatus?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            upc: {
                type: string;
                description: string;
            };
            unitType: {
                type: string;
                enum: string[];
                description: string;
            };
            newPrice: {
                type: string;
                description: string;
            };
            effectiveDate: {
                type: string;
                description: string;
            };
            reason: {
                type: string;
                description: string;
                enum?: undefined;
            };
            newCost?: undefined;
            locationId?: undefined;
            newQuantity?: undefined;
            notes?: undefined;
            targetMarginPercent?: undefined;
            adjustPrice?: undefined;
            adjustCost?: undefined;
            itemName?: undefined;
            description?: undefined;
            categoryId?: undefined;
            subCategoryId?: undefined;
            supplierId?: undefined;
            baseSingleUPC?: undefined;
            singlePrice?: undefined;
            singleCost?: undefined;
            caseQty?: undefined;
            casePrice?: undefined;
            caseCost?: undefined;
            caseUPC?: undefined;
            packQty?: undefined;
            packPrice?: undefined;
            packCost?: undefined;
            packUPC?: undefined;
            filterBy?: undefined;
            filterId?: undefined;
            upcList?: undefined;
            changeType?: undefined;
            changeValue?: undefined;
            minimumQty?: undefined;
            reorderQty?: undefined;
            promoName?: undefined;
            promoType?: undefined;
            startDate?: undefined;
            endDate?: undefined;
            items?: undefined;
            discountAmount?: undefined;
            discountType?: undefined;
            minPurchase?: undefined;
            maxUses?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            upc: {
                type: string;
                description: string;
            };
            unitType: {
                type: string;
                enum: string[];
                description: string;
            };
            newCost: {
                type: string;
                description: string;
            };
            effectiveDate: {
                type: string;
                description: string;
            };
            newPrice?: undefined;
            reason?: undefined;
            locationId?: undefined;
            newQuantity?: undefined;
            notes?: undefined;
            targetMarginPercent?: undefined;
            adjustPrice?: undefined;
            adjustCost?: undefined;
            itemName?: undefined;
            description?: undefined;
            categoryId?: undefined;
            subCategoryId?: undefined;
            supplierId?: undefined;
            baseSingleUPC?: undefined;
            singlePrice?: undefined;
            singleCost?: undefined;
            caseQty?: undefined;
            casePrice?: undefined;
            caseCost?: undefined;
            caseUPC?: undefined;
            packQty?: undefined;
            packPrice?: undefined;
            packCost?: undefined;
            packUPC?: undefined;
            filterBy?: undefined;
            filterId?: undefined;
            upcList?: undefined;
            changeType?: undefined;
            changeValue?: undefined;
            minimumQty?: undefined;
            reorderQty?: undefined;
            promoName?: undefined;
            promoType?: undefined;
            startDate?: undefined;
            endDate?: undefined;
            items?: undefined;
            discountAmount?: undefined;
            discountType?: undefined;
            minPurchase?: undefined;
            maxUses?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            upc: {
                type: string;
                description: string;
            };
            locationId: {
                type: string;
                description: string;
            };
            newQuantity: {
                type: string;
                description: string;
            };
            reason: {
                type: string;
                enum: string[];
                description: string;
            };
            notes: {
                type: string;
                description: string;
            };
            unitType?: undefined;
            newPrice?: undefined;
            effectiveDate?: undefined;
            newCost?: undefined;
            targetMarginPercent?: undefined;
            adjustPrice?: undefined;
            adjustCost?: undefined;
            itemName?: undefined;
            description?: undefined;
            categoryId?: undefined;
            subCategoryId?: undefined;
            supplierId?: undefined;
            baseSingleUPC?: undefined;
            singlePrice?: undefined;
            singleCost?: undefined;
            caseQty?: undefined;
            casePrice?: undefined;
            caseCost?: undefined;
            caseUPC?: undefined;
            packQty?: undefined;
            packPrice?: undefined;
            packCost?: undefined;
            packUPC?: undefined;
            filterBy?: undefined;
            filterId?: undefined;
            upcList?: undefined;
            changeType?: undefined;
            changeValue?: undefined;
            minimumQty?: undefined;
            reorderQty?: undefined;
            promoName?: undefined;
            promoType?: undefined;
            startDate?: undefined;
            endDate?: undefined;
            items?: undefined;
            discountAmount?: undefined;
            discountType?: undefined;
            minPurchase?: undefined;
            maxUses?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            upc: {
                type: string;
                description: string;
            };
            unitType: {
                type: string;
                enum: string[];
                description?: undefined;
            };
            targetMarginPercent: {
                type: string;
                description: string;
            };
            adjustPrice: {
                type: string;
                description: string;
                default: boolean;
            };
            adjustCost: {
                type: string;
                description: string;
                default: boolean;
            };
            newPrice?: undefined;
            effectiveDate?: undefined;
            reason?: undefined;
            newCost?: undefined;
            locationId?: undefined;
            newQuantity?: undefined;
            notes?: undefined;
            itemName?: undefined;
            description?: undefined;
            categoryId?: undefined;
            subCategoryId?: undefined;
            supplierId?: undefined;
            baseSingleUPC?: undefined;
            singlePrice?: undefined;
            singleCost?: undefined;
            caseQty?: undefined;
            casePrice?: undefined;
            caseCost?: undefined;
            caseUPC?: undefined;
            packQty?: undefined;
            packPrice?: undefined;
            packCost?: undefined;
            packUPC?: undefined;
            filterBy?: undefined;
            filterId?: undefined;
            upcList?: undefined;
            changeType?: undefined;
            changeValue?: undefined;
            minimumQty?: undefined;
            reorderQty?: undefined;
            promoName?: undefined;
            promoType?: undefined;
            startDate?: undefined;
            endDate?: undefined;
            items?: undefined;
            discountAmount?: undefined;
            discountType?: undefined;
            minPurchase?: undefined;
            maxUses?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            upc: {
                type: string;
                description: string;
            };
            itemName: {
                type: string;
                description: string;
            };
            description: {
                type: string;
                description: string;
            };
            categoryId: {
                type: string;
                description: string;
            };
            subCategoryId: {
                type: string;
                description: string;
            };
            supplierId: {
                type: string;
                description: string;
            };
            unitType?: undefined;
            newPrice?: undefined;
            effectiveDate?: undefined;
            reason?: undefined;
            newCost?: undefined;
            locationId?: undefined;
            newQuantity?: undefined;
            notes?: undefined;
            targetMarginPercent?: undefined;
            adjustPrice?: undefined;
            adjustCost?: undefined;
            baseSingleUPC?: undefined;
            singlePrice?: undefined;
            singleCost?: undefined;
            caseQty?: undefined;
            casePrice?: undefined;
            caseCost?: undefined;
            caseUPC?: undefined;
            packQty?: undefined;
            packPrice?: undefined;
            packCost?: undefined;
            packUPC?: undefined;
            filterBy?: undefined;
            filterId?: undefined;
            upcList?: undefined;
            changeType?: undefined;
            changeValue?: undefined;
            minimumQty?: undefined;
            reorderQty?: undefined;
            promoName?: undefined;
            promoType?: undefined;
            startDate?: undefined;
            endDate?: undefined;
            items?: undefined;
            discountAmount?: undefined;
            discountType?: undefined;
            minPurchase?: undefined;
            maxUses?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            itemName: {
                type: string;
                description: string;
            };
            baseSingleUPC: {
                type: string;
                description: string;
            };
            categoryId: {
                type: string;
                description: string;
            };
            supplierId: {
                type: string;
                description: string;
            };
            singlePrice: {
                type: string;
                description: string;
            };
            singleCost: {
                type: string;
                description: string;
            };
            caseQty: {
                type: string;
                description: string;
            };
            casePrice: {
                type: string;
                description: string;
            };
            caseCost: {
                type: string;
                description: string;
            };
            caseUPC: {
                type: string;
                description: string;
            };
            packQty: {
                type: string;
                description: string;
            };
            packPrice: {
                type: string;
                description: string;
            };
            packCost: {
                type: string;
                description: string;
            };
            packUPC: {
                type: string;
                description: string;
            };
            upc?: undefined;
            unitType?: undefined;
            newPrice?: undefined;
            effectiveDate?: undefined;
            reason?: undefined;
            newCost?: undefined;
            locationId?: undefined;
            newQuantity?: undefined;
            notes?: undefined;
            targetMarginPercent?: undefined;
            adjustPrice?: undefined;
            adjustCost?: undefined;
            description?: undefined;
            subCategoryId?: undefined;
            filterBy?: undefined;
            filterId?: undefined;
            upcList?: undefined;
            changeType?: undefined;
            changeValue?: undefined;
            minimumQty?: undefined;
            reorderQty?: undefined;
            promoName?: undefined;
            promoType?: undefined;
            startDate?: undefined;
            endDate?: undefined;
            items?: undefined;
            discountAmount?: undefined;
            discountType?: undefined;
            minPurchase?: undefined;
            maxUses?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            filterBy: {
                type: string;
                enum: string[];
                description: string;
            };
            filterId: {
                type: string;
                description: string;
            };
            upcList: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            changeType: {
                type: string;
                enum: string[];
                description: string;
            };
            changeValue: {
                type: string;
                description: string;
            };
            unitType: {
                type: string;
                enum: string[];
                description: string;
            };
            effectiveDate: {
                type: string;
                description: string;
            };
            upc?: undefined;
            newPrice?: undefined;
            reason?: undefined;
            newCost?: undefined;
            locationId?: undefined;
            newQuantity?: undefined;
            notes?: undefined;
            targetMarginPercent?: undefined;
            adjustPrice?: undefined;
            adjustCost?: undefined;
            itemName?: undefined;
            description?: undefined;
            categoryId?: undefined;
            subCategoryId?: undefined;
            supplierId?: undefined;
            baseSingleUPC?: undefined;
            singlePrice?: undefined;
            singleCost?: undefined;
            caseQty?: undefined;
            casePrice?: undefined;
            caseCost?: undefined;
            caseUPC?: undefined;
            packQty?: undefined;
            packPrice?: undefined;
            packCost?: undefined;
            packUPC?: undefined;
            minimumQty?: undefined;
            reorderQty?: undefined;
            promoName?: undefined;
            promoType?: undefined;
            startDate?: undefined;
            endDate?: undefined;
            items?: undefined;
            discountAmount?: undefined;
            discountType?: undefined;
            minPurchase?: undefined;
            maxUses?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            upc: {
                type: string;
                description: string;
            };
            locationId: {
                type: string;
                description: string;
            };
            minimumQty: {
                type: string;
                description: string;
            };
            reorderQty: {
                type: string;
                description: string;
            };
            unitType?: undefined;
            newPrice?: undefined;
            effectiveDate?: undefined;
            reason?: undefined;
            newCost?: undefined;
            newQuantity?: undefined;
            notes?: undefined;
            targetMarginPercent?: undefined;
            adjustPrice?: undefined;
            adjustCost?: undefined;
            itemName?: undefined;
            description?: undefined;
            categoryId?: undefined;
            subCategoryId?: undefined;
            supplierId?: undefined;
            baseSingleUPC?: undefined;
            singlePrice?: undefined;
            singleCost?: undefined;
            caseQty?: undefined;
            casePrice?: undefined;
            caseCost?: undefined;
            caseUPC?: undefined;
            packQty?: undefined;
            packPrice?: undefined;
            packCost?: undefined;
            packUPC?: undefined;
            filterBy?: undefined;
            filterId?: undefined;
            upcList?: undefined;
            changeType?: undefined;
            changeValue?: undefined;
            promoName?: undefined;
            promoType?: undefined;
            startDate?: undefined;
            endDate?: undefined;
            items?: undefined;
            discountAmount?: undefined;
            discountType?: undefined;
            minPurchase?: undefined;
            maxUses?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            promoName: {
                type: string;
                description: string;
            };
            promoType: {
                type: string;
                enum: string[];
            };
            startDate: {
                type: string;
                description: string;
            };
            endDate: {
                type: string;
                description: string;
            };
            items: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            discountAmount: {
                type: string;
                description: string;
            };
            discountType: {
                type: string;
                enum: string[];
            };
            minPurchase: {
                type: string;
                description: string;
            };
            maxUses: {
                type: string;
                description: string;
            };
            upc?: undefined;
            unitType?: undefined;
            newPrice?: undefined;
            effectiveDate?: undefined;
            reason?: undefined;
            newCost?: undefined;
            locationId?: undefined;
            newQuantity?: undefined;
            notes?: undefined;
            targetMarginPercent?: undefined;
            adjustPrice?: undefined;
            adjustCost?: undefined;
            itemName?: undefined;
            description?: undefined;
            categoryId?: undefined;
            subCategoryId?: undefined;
            supplierId?: undefined;
            baseSingleUPC?: undefined;
            singlePrice?: undefined;
            singleCost?: undefined;
            caseQty?: undefined;
            casePrice?: undefined;
            caseCost?: undefined;
            caseUPC?: undefined;
            packQty?: undefined;
            packPrice?: undefined;
            packCost?: undefined;
            packUPC?: undefined;
            filterBy?: undefined;
            filterId?: undefined;
            upcList?: undefined;
            changeType?: undefined;
            changeValue?: undefined;
            minimumQty?: undefined;
            reorderQty?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            upc: {
                type: string;
                description: string;
            };
            reason: {
                type: string;
                enum: string[];
                description?: undefined;
            };
            notes: {
                type: string;
                description: string;
            };
            unitType?: undefined;
            newPrice?: undefined;
            effectiveDate?: undefined;
            newCost?: undefined;
            locationId?: undefined;
            newQuantity?: undefined;
            targetMarginPercent?: undefined;
            adjustPrice?: undefined;
            adjustCost?: undefined;
            itemName?: undefined;
            description?: undefined;
            categoryId?: undefined;
            subCategoryId?: undefined;
            supplierId?: undefined;
            baseSingleUPC?: undefined;
            singlePrice?: undefined;
            singleCost?: undefined;
            caseQty?: undefined;
            casePrice?: undefined;
            caseCost?: undefined;
            caseUPC?: undefined;
            packQty?: undefined;
            packPrice?: undefined;
            packCost?: undefined;
            packUPC?: undefined;
            filterBy?: undefined;
            filterId?: undefined;
            upcList?: undefined;
            changeType?: undefined;
            changeValue?: undefined;
            minimumQty?: undefined;
            reorderQty?: undefined;
            promoName?: undefined;
            promoType?: undefined;
            startDate?: undefined;
            endDate?: undefined;
            items?: undefined;
            discountAmount?: undefined;
            discountType?: undefined;
            minPurchase?: undefined;
            maxUses?: undefined;
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
            };
            includeSubDept: {
                type: string;
                description: string;
            };
            sortBy: {
                type: string;
                enum: string[];
                description: string;
            };
            minUnitsPerWeek?: undefined;
            minMarginPct?: undefined;
            limit?: undefined;
            unitsPerMonthThreshold?: undefined;
            minInventoryValue?: undefined;
            categoryFilter?: undefined;
            includePerformance?: undefined;
            urgencyLevel?: undefined;
            daysToStockout?: undefined;
            includeReorderSuggestion?: undefined;
            minDaysSupply?: undefined;
            maxUnitsPerWeek?: undefined;
            groupBy?: undefined;
            showROI?: undefined;
            months?: undefined;
            groupByMonth?: undefined;
            identifyPeakSeasons?: undefined;
            showPareto?: undefined;
            vendorId?: undefined;
            includeAlternatives?: undefined;
            lowMarginThreshold?: undefined;
            highVolumeThreshold?: undefined;
            analyzeElasticity?: undefined;
            forecastPeriod?: undefined;
            accountForSeasonal?: undefined;
            showByDept?: undefined;
            confidenceLevel?: undefined;
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
            };
            minUnitsPerWeek: {
                type: string;
                description: string;
                default: number;
            };
            minMarginPct: {
                type: string;
                description: string;
                default: number;
            };
            limit: {
                type: string;
                description: string;
                default: number;
            };
            includeSubDept?: undefined;
            sortBy?: undefined;
            unitsPerMonthThreshold?: undefined;
            minInventoryValue?: undefined;
            categoryFilter?: undefined;
            includePerformance?: undefined;
            urgencyLevel?: undefined;
            daysToStockout?: undefined;
            includeReorderSuggestion?: undefined;
            minDaysSupply?: undefined;
            maxUnitsPerWeek?: undefined;
            groupBy?: undefined;
            showROI?: undefined;
            months?: undefined;
            groupByMonth?: undefined;
            identifyPeakSeasons?: undefined;
            showPareto?: undefined;
            vendorId?: undefined;
            includeAlternatives?: undefined;
            lowMarginThreshold?: undefined;
            highVolumeThreshold?: undefined;
            analyzeElasticity?: undefined;
            forecastPeriod?: undefined;
            accountForSeasonal?: undefined;
            showByDept?: undefined;
            confidenceLevel?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            unitsPerMonthThreshold: {
                type: string;
                description: string;
                default: number;
            };
            minInventoryValue: {
                type: string;
                description: string;
            };
            categoryFilter: {
                type: string;
                description: string;
            };
            period?: undefined;
            includeSubDept?: undefined;
            sortBy?: undefined;
            minUnitsPerWeek?: undefined;
            minMarginPct?: undefined;
            limit?: undefined;
            includePerformance?: undefined;
            urgencyLevel?: undefined;
            daysToStockout?: undefined;
            includeReorderSuggestion?: undefined;
            minDaysSupply?: undefined;
            maxUnitsPerWeek?: undefined;
            groupBy?: undefined;
            showROI?: undefined;
            months?: undefined;
            groupByMonth?: undefined;
            identifyPeakSeasons?: undefined;
            showPareto?: undefined;
            vendorId?: undefined;
            includeAlternatives?: undefined;
            lowMarginThreshold?: undefined;
            highVolumeThreshold?: undefined;
            analyzeElasticity?: undefined;
            forecastPeriod?: undefined;
            accountForSeasonal?: undefined;
            showByDept?: undefined;
            confidenceLevel?: undefined;
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
            };
            includePerformance: {
                type: string;
                description: string;
                default: boolean;
            };
            includeSubDept?: undefined;
            sortBy?: undefined;
            minUnitsPerWeek?: undefined;
            minMarginPct?: undefined;
            limit?: undefined;
            unitsPerMonthThreshold?: undefined;
            minInventoryValue?: undefined;
            categoryFilter?: undefined;
            urgencyLevel?: undefined;
            daysToStockout?: undefined;
            includeReorderSuggestion?: undefined;
            minDaysSupply?: undefined;
            maxUnitsPerWeek?: undefined;
            groupBy?: undefined;
            showROI?: undefined;
            months?: undefined;
            groupByMonth?: undefined;
            identifyPeakSeasons?: undefined;
            showPareto?: undefined;
            vendorId?: undefined;
            includeAlternatives?: undefined;
            lowMarginThreshold?: undefined;
            highVolumeThreshold?: undefined;
            analyzeElasticity?: undefined;
            forecastPeriod?: undefined;
            accountForSeasonal?: undefined;
            showByDept?: undefined;
            confidenceLevel?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            urgencyLevel: {
                type: string;
                enum: string[];
                description: string;
                default: string;
            };
            daysToStockout: {
                type: string;
                description: string;
            };
            categoryFilter: {
                type: string;
                description: string;
            };
            includeReorderSuggestion: {
                type: string;
                description: string;
                default: boolean;
            };
            period?: undefined;
            includeSubDept?: undefined;
            sortBy?: undefined;
            minUnitsPerWeek?: undefined;
            minMarginPct?: undefined;
            limit?: undefined;
            unitsPerMonthThreshold?: undefined;
            minInventoryValue?: undefined;
            includePerformance?: undefined;
            minDaysSupply?: undefined;
            maxUnitsPerWeek?: undefined;
            groupBy?: undefined;
            showROI?: undefined;
            months?: undefined;
            groupByMonth?: undefined;
            identifyPeakSeasons?: undefined;
            showPareto?: undefined;
            vendorId?: undefined;
            includeAlternatives?: undefined;
            lowMarginThreshold?: undefined;
            highVolumeThreshold?: undefined;
            analyzeElasticity?: undefined;
            forecastPeriod?: undefined;
            accountForSeasonal?: undefined;
            showByDept?: undefined;
            confidenceLevel?: undefined;
        };
        required: never[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            minDaysSupply: {
                type: string;
                description: string;
                default: number;
            };
            maxUnitsPerWeek: {
                type: string;
                description: string;
                default: number;
            };
            minInventoryValue: {
                type: string;
                description: string;
            };
            period?: undefined;
            includeSubDept?: undefined;
            sortBy?: undefined;
            minUnitsPerWeek?: undefined;
            minMarginPct?: undefined;
            limit?: undefined;
            unitsPerMonthThreshold?: undefined;
            categoryFilter?: undefined;
            includePerformance?: undefined;
            urgencyLevel?: undefined;
            daysToStockout?: undefined;
            includeReorderSuggestion?: undefined;
            groupBy?: undefined;
            showROI?: undefined;
            months?: undefined;
            groupByMonth?: undefined;
            identifyPeakSeasons?: undefined;
            showPareto?: undefined;
            vendorId?: undefined;
            includeAlternatives?: undefined;
            lowMarginThreshold?: undefined;
            highVolumeThreshold?: undefined;
            analyzeElasticity?: undefined;
            forecastPeriod?: undefined;
            accountForSeasonal?: undefined;
            showByDept?: undefined;
            confidenceLevel?: undefined;
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
            };
            minUnitsPerWeek: {
                type: string;
                description: string;
                default?: undefined;
            };
            minMarginPct: {
                type: string;
                description: string;
                default?: undefined;
            };
            includeSubDept?: undefined;
            sortBy?: undefined;
            limit?: undefined;
            unitsPerMonthThreshold?: undefined;
            minInventoryValue?: undefined;
            categoryFilter?: undefined;
            includePerformance?: undefined;
            urgencyLevel?: undefined;
            daysToStockout?: undefined;
            includeReorderSuggestion?: undefined;
            minDaysSupply?: undefined;
            maxUnitsPerWeek?: undefined;
            groupBy?: undefined;
            showROI?: undefined;
            months?: undefined;
            groupByMonth?: undefined;
            identifyPeakSeasons?: undefined;
            showPareto?: undefined;
            vendorId?: undefined;
            includeAlternatives?: undefined;
            lowMarginThreshold?: undefined;
            highVolumeThreshold?: undefined;
            analyzeElasticity?: undefined;
            forecastPeriod?: undefined;
            accountForSeasonal?: undefined;
            showByDept?: undefined;
            confidenceLevel?: undefined;
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
            };
            groupBy: {
                type: string;
                enum: string[];
                description: string;
            };
            showROI: {
                type: string;
                description: string;
                default: boolean;
            };
            includeSubDept?: undefined;
            sortBy?: undefined;
            minUnitsPerWeek?: undefined;
            minMarginPct?: undefined;
            limit?: undefined;
            unitsPerMonthThreshold?: undefined;
            minInventoryValue?: undefined;
            categoryFilter?: undefined;
            includePerformance?: undefined;
            urgencyLevel?: undefined;
            daysToStockout?: undefined;
            includeReorderSuggestion?: undefined;
            minDaysSupply?: undefined;
            maxUnitsPerWeek?: undefined;
            months?: undefined;
            groupByMonth?: undefined;
            identifyPeakSeasons?: undefined;
            showPareto?: undefined;
            vendorId?: undefined;
            includeAlternatives?: undefined;
            lowMarginThreshold?: undefined;
            highVolumeThreshold?: undefined;
            analyzeElasticity?: undefined;
            forecastPeriod?: undefined;
            accountForSeasonal?: undefined;
            showByDept?: undefined;
            confidenceLevel?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            months: {
                type: string;
                description: string;
                default: number;
            };
            groupByMonth: {
                type: string;
                description: string;
            };
            identifyPeakSeasons: {
                type: string;
                description: string;
                default: boolean;
            };
            period?: undefined;
            includeSubDept?: undefined;
            sortBy?: undefined;
            minUnitsPerWeek?: undefined;
            minMarginPct?: undefined;
            limit?: undefined;
            unitsPerMonthThreshold?: undefined;
            minInventoryValue?: undefined;
            categoryFilter?: undefined;
            includePerformance?: undefined;
            urgencyLevel?: undefined;
            daysToStockout?: undefined;
            includeReorderSuggestion?: undefined;
            minDaysSupply?: undefined;
            maxUnitsPerWeek?: undefined;
            groupBy?: undefined;
            showROI?: undefined;
            showPareto?: undefined;
            vendorId?: undefined;
            includeAlternatives?: undefined;
            lowMarginThreshold?: undefined;
            highVolumeThreshold?: undefined;
            analyzeElasticity?: undefined;
            forecastPeriod?: undefined;
            accountForSeasonal?: undefined;
            showByDept?: undefined;
            confidenceLevel?: undefined;
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
            };
            showPareto: {
                type: string;
                description: string;
                default: boolean;
            };
            includeSubDept?: undefined;
            sortBy?: undefined;
            minUnitsPerWeek?: undefined;
            minMarginPct?: undefined;
            limit?: undefined;
            unitsPerMonthThreshold?: undefined;
            minInventoryValue?: undefined;
            categoryFilter?: undefined;
            includePerformance?: undefined;
            urgencyLevel?: undefined;
            daysToStockout?: undefined;
            includeReorderSuggestion?: undefined;
            minDaysSupply?: undefined;
            maxUnitsPerWeek?: undefined;
            groupBy?: undefined;
            showROI?: undefined;
            months?: undefined;
            groupByMonth?: undefined;
            identifyPeakSeasons?: undefined;
            vendorId?: undefined;
            includeAlternatives?: undefined;
            lowMarginThreshold?: undefined;
            highVolumeThreshold?: undefined;
            analyzeElasticity?: undefined;
            forecastPeriod?: undefined;
            accountForSeasonal?: undefined;
            showByDept?: undefined;
            confidenceLevel?: undefined;
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
            };
            vendorId: {
                type: string;
                description: string;
            };
            includeAlternatives: {
                type: string;
                description: string;
                default: boolean;
            };
            includeSubDept?: undefined;
            sortBy?: undefined;
            minUnitsPerWeek?: undefined;
            minMarginPct?: undefined;
            limit?: undefined;
            unitsPerMonthThreshold?: undefined;
            minInventoryValue?: undefined;
            categoryFilter?: undefined;
            includePerformance?: undefined;
            urgencyLevel?: undefined;
            daysToStockout?: undefined;
            includeReorderSuggestion?: undefined;
            minDaysSupply?: undefined;
            maxUnitsPerWeek?: undefined;
            groupBy?: undefined;
            showROI?: undefined;
            months?: undefined;
            groupByMonth?: undefined;
            identifyPeakSeasons?: undefined;
            showPareto?: undefined;
            lowMarginThreshold?: undefined;
            highVolumeThreshold?: undefined;
            analyzeElasticity?: undefined;
            forecastPeriod?: undefined;
            accountForSeasonal?: undefined;
            showByDept?: undefined;
            confidenceLevel?: undefined;
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
            };
            groupBy: {
                type: string;
                enum: string[];
                description: string;
            };
            includeSubDept?: undefined;
            sortBy?: undefined;
            minUnitsPerWeek?: undefined;
            minMarginPct?: undefined;
            limit?: undefined;
            unitsPerMonthThreshold?: undefined;
            minInventoryValue?: undefined;
            categoryFilter?: undefined;
            includePerformance?: undefined;
            urgencyLevel?: undefined;
            daysToStockout?: undefined;
            includeReorderSuggestion?: undefined;
            minDaysSupply?: undefined;
            maxUnitsPerWeek?: undefined;
            showROI?: undefined;
            months?: undefined;
            groupByMonth?: undefined;
            identifyPeakSeasons?: undefined;
            showPareto?: undefined;
            vendorId?: undefined;
            includeAlternatives?: undefined;
            lowMarginThreshold?: undefined;
            highVolumeThreshold?: undefined;
            analyzeElasticity?: undefined;
            forecastPeriod?: undefined;
            accountForSeasonal?: undefined;
            showByDept?: undefined;
            confidenceLevel?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            lowMarginThreshold: {
                type: string;
                description: string;
                default: number;
            };
            highVolumeThreshold: {
                type: string;
                description: string;
                default: number;
            };
            analyzeElasticity: {
                type: string;
                description: string;
                default: boolean;
            };
            period?: undefined;
            includeSubDept?: undefined;
            sortBy?: undefined;
            minUnitsPerWeek?: undefined;
            minMarginPct?: undefined;
            limit?: undefined;
            unitsPerMonthThreshold?: undefined;
            minInventoryValue?: undefined;
            categoryFilter?: undefined;
            includePerformance?: undefined;
            urgencyLevel?: undefined;
            daysToStockout?: undefined;
            includeReorderSuggestion?: undefined;
            minDaysSupply?: undefined;
            maxUnitsPerWeek?: undefined;
            groupBy?: undefined;
            showROI?: undefined;
            months?: undefined;
            groupByMonth?: undefined;
            identifyPeakSeasons?: undefined;
            showPareto?: undefined;
            vendorId?: undefined;
            includeAlternatives?: undefined;
            forecastPeriod?: undefined;
            accountForSeasonal?: undefined;
            showByDept?: undefined;
            confidenceLevel?: undefined;
        };
        required: never[];
    };
} | {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: {
            forecastPeriod: {
                type: string;
                enum: string[];
                description: string;
            };
            accountForSeasonal: {
                type: string;
                description: string;
            };
            showByDept: {
                type: string;
                description: string;
            };
            confidenceLevel: {
                type: string;
                enum: string[];
                description: string;
            };
            period?: undefined;
            includeSubDept?: undefined;
            sortBy?: undefined;
            minUnitsPerWeek?: undefined;
            minMarginPct?: undefined;
            limit?: undefined;
            unitsPerMonthThreshold?: undefined;
            minInventoryValue?: undefined;
            categoryFilter?: undefined;
            includePerformance?: undefined;
            urgencyLevel?: undefined;
            daysToStockout?: undefined;
            includeReorderSuggestion?: undefined;
            minDaysSupply?: undefined;
            maxUnitsPerWeek?: undefined;
            groupBy?: undefined;
            showROI?: undefined;
            months?: undefined;
            groupByMonth?: undefined;
            identifyPeakSeasons?: undefined;
            showPareto?: undefined;
            vendorId?: undefined;
            includeAlternatives?: undefined;
            lowMarginThreshold?: undefined;
            highVolumeThreshold?: undefined;
            analyzeElasticity?: undefined;
        };
        required: string[];
    };
} | {
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
/**
 * Tool count by category
 */
export declare const toolStats: {
    sales: number;
    inventory: number;
    operations: number;
    employee: number;
    promotionPricing: number;
    advancedInventory: number;
    transactionTender: number;
    writeOperations: number;
    analyticsInsights: number;
    marketingIntegration: number;
    total: number;
};
