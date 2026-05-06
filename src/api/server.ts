/**
 * HTTP API wrapper for RapidRMS tools
 * Run this and expose to Claude via URL
 */

import express from 'express';
import { executeTool } from '../executors/index.js';
import { createLogger } from '../utils/logger.js';
import { authMiddleware } from './middleware/auth.js';
import connectRoutes from './routes/connect.js';

const log = createLogger('api-server');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/connect', connectRoutes);

/**
 * Health check
 */
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

/**
 * Execute a tool
 * POST /api/tools/{toolName}
 * Requires: Authorization: Bearer <api_key>
 * Body: { input object }
 */
app.post('/api/tools/:toolName', authMiddleware, async (req: any, res) => {
  const { toolName } = req.params;
  const input = req.body;
  const startTime = Date.now();

  log.info('Tool request', { toolName });

  try {
    const result = await executeTool(toolName, input, req.rapidrms?.credentials);
    const responseMs = Date.now() - startTime;

    if (req.rapidrms?.apiKeyId) {
      const { logToolUsage } = await import('../lib/supabase.js');
      logToolUsage(req.rapidrms.apiKeyId, toolName, 'success', responseMs).catch((e: any) =>
        log.error('Failed to log usage', { error: e.message })
      );
    }

    res.json({
      success: !result.is_error,
      toolName,
      result,
    });
  } catch (error) {
    const responseMs = Date.now() - startTime;
    if (req.rapidrms?.apiKeyId) {
      const { logToolUsage } = await import('../lib/supabase.js');
      logToolUsage(req.rapidrms.apiKeyId, toolName, 'error', responseMs).catch((e: any) =>
        log.error('Failed to log usage', { error: e.message })
      );
    }

    res.status(500).json({
      success: false,
      toolName,
      error: (error as Error).message,
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
    tools: allTools.map((t: any) => ({
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
