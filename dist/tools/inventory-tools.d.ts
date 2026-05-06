/**
 * Inventory Management Tools
 */
export declare const inventoryTools: ({
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
})[];
