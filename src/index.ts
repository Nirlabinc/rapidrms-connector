/**
 * RapidRMS Connector Main Export
 * Use as NPM package in Claude SDK, or import for custom integrations
 */

import * as toolsModule from './tools/index.js';
import * as executorsModule from './executors/index.js';

export { RapidRMSClient } from './client/rapidrms-api.js';
export { getAuth, getCredentialsFromEnv, clearAuthCache } from './client/auth.js';

export {
  allTools,
  salesTools,
  inventoryTools,
  operationsTools,
  employeeTools,
  promotionPricingTools,
  advancedInventoryTools,
  transactionTenderTools,
  writeOperationsTools,
  analyticsInsightsTools,
  marketingIntegrationTools,
  toolStats,
} from './tools/index.js';

export { allExecutors, executeTool, salesExecutors, inventoryExecutors, operationsExecutors } from './executors/index.js';

export type {
  RapidRMSCredentials,
  AuthToken,
  SalesData,
  Inventory,
  Vendor,
  Department,
  AlertEvent,
  ToolResult,
  ToolInput,
} from './types.js';

export { createLogger } from './utils/logger.js';

/**
 * Quick start: get all tools for Claude SDK
 */
export function getClaudeTools() {
  return {
    tools: toolsModule.allTools,
    executors: executorsModule.allExecutors,
  };
}
