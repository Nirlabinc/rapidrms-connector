/**
 * All tool executors - implementations that run tools
 */
import { ToolInput, ToolResult } from '../types.js';
/**
 * Executor signature
 */
type ExecutorFn = (input: ToolInput) => Promise<ToolResult>;
/**
 * Sales executors
 */
export declare const salesExecutors: Record<string, ExecutorFn>;
/**
 * Inventory executors
 */
export declare const inventoryExecutors: Record<string, ExecutorFn>;
/**
 * Operations executors
 */
export declare const operationsExecutors: Record<string, ExecutorFn>;
/**
 * Analytics executors
 */
export declare const analyticsExecutors: Record<string, ExecutorFn>;
/**
 * All executors combined
 */
export declare const allExecutors: Record<string, ExecutorFn>;
/**
 * Execute a tool by name
 */
export declare function executeTool(toolName: string, input: ToolInput): Promise<ToolResult>;
export {};
