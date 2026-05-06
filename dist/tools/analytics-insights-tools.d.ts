/**
 * Advanced Analytics & Business Insights Tools
 */
export declare const analyticsInsightsTools: ({
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
})[];
