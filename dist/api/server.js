/**
 * HTTP API wrapper for RapidRMS tools
 * Run this and expose to Claude via URL
 */
import express from 'express';
import { executeTool } from '../executors/index.js';
import { createLogger } from '../utils/logger.js';
const log = createLogger('api-server');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
/**
 * Health check
 */
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});
/**
 * Execute a tool
 * POST /api/tools/{toolName}
 * Body: { input object }
 */
app.post('/api/tools/:toolName', async (req, res) => {
    const { toolName } = req.params;
    const input = req.body;
    log.info('Tool request', { toolName });
    try {
        const result = await executeTool(toolName, input);
        res.json({
            success: !result.is_error,
            toolName,
            result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            toolName,
            error: error.message,
        });
    }
});
/**
 * List available tools
 */
app.get('/api/tools', (req, res) => {
    const { allTools } = require('../tools/index.js');
    res.json({
        count: allTools.length,
        tools: allTools.map((t) => ({
            name: t.name,
            description: t.description,
        })),
    });
});
app.listen(PORT, () => {
    log.info(`RapidRMS API server listening on port ${PORT}`);
    console.log(`🚀 API ready: http://localhost:${PORT}`);
    console.log(`📋 Tools: http://localhost:${PORT}/api/tools`);
    console.log(`💬 Example: POST http://localhost:${PORT}/api/tools/rapidrms_get_sales_report`);
});
