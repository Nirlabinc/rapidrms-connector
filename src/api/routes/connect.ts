/**
 * RapidRMS credential management routes
 * POST /connect - Add new RapidRMS store connection
 * GET /connect - List user's connections
 * DELETE /connect/:id - Remove connection
 */

import { Router, Request, Response } from 'express';
import crypto from 'crypto';
import { supabase } from '../../lib/supabase.js';
import { encryptToString } from '../middleware/encrypt.js';
import { createLogger } from '../../utils/logger.js';

const log = createLogger('connect-routes');
const router = Router();

interface ConnectRequest extends Request {
  user?: {
    id: string;
    email?: string;
  };
}

/**
 * POST /connect
 * Requires: Authorization header with Supabase JWT
 * Body: { clientId, email, password, storeName, apiBase? }
 * Returns: { apiKey, keyPrefix, connectionId }
 */
router.post('/connect', async (req: ConnectRequest, res: Response) => {
  try {
    const { clientId, email, password, storeName, apiBase } = req.body;
    const masterKey = process.env.ENCRYPTION_MASTER_KEY;

    if (!masterKey) {
      return res.status(500).json({ error: 'Server configuration error' });
    }

    if (!clientId || !email || !password || !storeName) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['clientId', 'email', 'password', 'storeName'],
      });
    }

    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({
        error: 'Authentication required',
        message: 'Include Supabase JWT in Authorization header',
      });
    }

    const encryptedPassword = encryptToString(password, masterKey);

    const { data: connection, error: connError } = await supabase
      .from('rapidrms_connections')
      .insert({
        user_id: userId,
        store_name: storeName,
        client_id: clientId,
        email,
        encrypted_password: encryptedPassword,
        api_base: apiBase || 'https://rapidrmsapi.azurewebsites.net',
      })
      .select()
      .single();

    if (connError || !connection) {
      log.error('Failed to create connection', { error: connError });
      return res.status(500).json({ error: 'Failed to create connection' });
    }

    const apiKey = crypto.randomBytes(32).toString('hex');
    const keyHash = crypto.createHash('sha256').update(apiKey).digest('hex');
    const keyPrefix = apiKey.slice(0, 8);

    const { data: apiKeyRecord, error: keyError } = await supabase
      .from('api_keys')
      .insert({
        user_id: userId,
        connection_id: connection.id,
        key_hash: keyHash,
        key_prefix: keyPrefix,
        label: `${storeName} - Production`,
      })
      .select()
      .single();

    if (keyError || !apiKeyRecord) {
      log.error('Failed to create API key', { error: keyError });
      return res.status(500).json({ error: 'Failed to create API key' });
    }

    log.info('Connection created', {
      userId,
      storeName,
      connectionId: connection.id,
    });

    res.json({
      success: true,
      apiKey,
      keyPrefix,
      connectionId: connection.id,
      message:
        'Save your API key - it will not be displayed again. Use it in Claude: Authorization: Bearer <api_key>',
    });
  } catch (error) {
    log.error('Connect route error', { error: (error as Error).message });
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * GET /connect
 * Requires: Supabase JWT
 * Returns: List of user's connections
 */
router.get('/connect', async (req: ConnectRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const { data: connections, error } = await supabase
      .from('rapidrms_connections')
      .select('id, store_name, email, api_base, active, created_at')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      log.error('Failed to fetch connections', { error });
      return res.status(500).json({ error: 'Failed to fetch connections' });
    }

    const { data: keys, error: keysError } = await supabase
      .from('api_keys')
      .select('id, connection_id, key_prefix, label, last_used_at')
      .eq('user_id', userId)
      .eq('revoked_at', null);

    if (keysError) {
      log.error('Failed to fetch keys', { error: keysError });
    }

    const connectionsWithKeys = (connections || []).map((conn: any) => ({
      ...conn,
      apiKeys: (keys || []).filter((k: any) => k.connection_id === conn.id),
    }));

    res.json({
      connections: connectionsWithKeys,
      count: connectionsWithKeys.length,
    });
  } catch (error) {
    log.error('Get connections error', { error: (error as Error).message });
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * DELETE /connect/:id
 * Requires: Supabase JWT
 * Deletes connection and all associated API keys
 */
router.delete('/connect/:id', async (req: ConnectRequest, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const { data: connection, error: fetchError } = await supabase
      .from('rapidrms_connections')
      .select('user_id')
      .eq('id', id)
      .single();

    if (fetchError || !connection) {
      return res.status(404).json({ error: 'Connection not found' });
    }

    if (connection.user_id !== userId) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    await supabase.from('rapidrms_connections').delete().eq('id', id);

    log.info('Connection deleted', { userId, connectionId: id });

    res.json({ success: true, message: 'Connection deleted' });
  } catch (error) {
    log.error('Delete connection error', { error: (error as Error).message });
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
