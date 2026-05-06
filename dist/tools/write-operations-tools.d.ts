/**
 * Write Operations Tools - Modify RapidRMS Data
 * ⚠️ All require RAPIDRMS_WRITE_ENABLED=true
 */
export declare const writeOperationsTools: ({
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
})[];
