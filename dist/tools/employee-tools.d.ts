/**
 * Employee Management & Payroll Tools
 */
export declare const employeeTools: ({
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
})[];
