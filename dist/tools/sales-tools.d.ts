/**
 * Sales & Revenue Analysis Tools
 */
export declare const salesTools: ({
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
})[];
