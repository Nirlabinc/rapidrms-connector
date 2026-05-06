/**
 * Advanced Inventory & Purchase Order Tools
 */
export declare const advancedInventoryTools: ({
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
})[];
