/**
 * All tool definitions for RapidRMS Connector
 * Export for use in Claude SDK, MCP servers, OpenAPI specs
 */
import { salesTools } from './sales-tools.js';
import { inventoryTools } from './inventory-tools.js';
import { operationsTools } from './operations-tools.js';
import { employeeTools } from './employee-tools.js';
import { promotionPricingTools } from './promotion-pricing-tools.js';
import { advancedInventoryTools } from './advanced-inventory-tools.js';
import { transactionTenderTools } from './transaction-tender-tools.js';
import { writeOperationsTools } from './write-operations-tools.js';
import { analyticsInsightsTools } from './analytics-insights-tools.js';
import { marketingIntegrationTools } from './marketing-integration-tools.js';
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
export const allTools = [
    ...salesTools,
    ...inventoryTools,
    ...operationsTools,
    ...employeeTools,
    ...promotionPricingTools,
    ...advancedInventoryTools,
    ...transactionTenderTools,
    ...writeOperationsTools,
    ...analyticsInsightsTools,
    ...marketingIntegrationTools,
];
/**
 * Tool count by category
 */
export const toolStats = {
    sales: salesTools.length,
    inventory: inventoryTools.length,
    operations: operationsTools.length,
    employee: employeeTools.length,
    promotionPricing: promotionPricingTools.length,
    advancedInventory: advancedInventoryTools.length,
    transactionTender: transactionTenderTools.length,
    writeOperations: writeOperationsTools.length,
    analyticsInsights: analyticsInsightsTools.length,
    marketingIntegration: marketingIntegrationTools.length,
    total: allTools.length,
};
