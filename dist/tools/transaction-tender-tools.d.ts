/**
 * Transaction & Tender Detailed Tools
 */
export declare const transactionTenderTools: ({
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
})[];
