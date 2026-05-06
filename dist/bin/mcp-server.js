#!/usr/bin/env node
/**
 * CLI entry point for MCP server
 * Run: npx rapidrms-mcp
 */
import { startServer } from '../mcp/server.js';
startServer().catch((error) => {
    console.error('Failed to start MCP server:', error);
    process.exit(1);
});
