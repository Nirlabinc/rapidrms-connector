/**
 * MCP Server for RapidRMS Connector
 * Implements Model Context Protocol for Claude Desktop integration
 */
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema, } from '@modelcontextprotocol/sdk/types.js';
import { allTools } from '../tools/index.js';
import { executeTool, allExecutors } from '../executors/index.js';
import { createLogger } from '../utils/logger.js';
const log = createLogger('mcp-server');
// Create MCP server with tools capability
const server = new Server({
    name: 'rapidrms-connector',
    version: '0.1.0',
}, {
    capabilities: {
        tools: {},
    },
});
/**
 * Transform tool definitions from snake_case to MCP camelCase format
 */
function transformToolsForMCP(tools) {
    return tools.map((tool) => ({
        name: tool.name,
        description: tool.description,
        inputSchema: tool.input_schema, // Convert input_schema to inputSchema
    }));
}
/**
 * Handler for listing available tools
 */
server.setRequestHandler(ListToolsRequestSchema, async () => {
    log.info('Listing tools', { count: allTools.length });
    return {
        tools: transformToolsForMCP(allTools),
    };
});
/**
 * Handler for calling a tool
 */
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    log.info('Tool call received', { toolName: name });
    if (!allExecutors[name]) {
        return {
            content: [
                {
                    type: 'text',
                    text: `Tool not found: ${name}`,
                },
            ],
            isError: true,
        };
    }
    try {
        const result = await executeTool(name, args || {});
        return {
            content: [
                {
                    type: 'text',
                    text: result.content,
                },
            ],
            isError: result.is_error || false,
        };
    }
    catch (error) {
        log.error('Tool execution failed', { toolName: name, error: String(error) });
        return {
            content: [
                {
                    type: 'text',
                    text: `Error executing tool: ${error.message}`,
                },
            ],
            isError: true,
        };
    }
});
/**
 * Start the MCP server
 */
export async function startServer() {
    const transport = new StdioServerTransport();
    log.info('Starting RapidRMS MCP server');
    await server.connect(transport);
    log.info('MCP server started successfully');
}
// Auto-start if run directly
if (import.meta.url === `file://${process.argv[1]}`) {
    startServer().catch((error) => {
        log.error('Failed to start server', { error: String(error) });
        process.exit(1);
    });
}
