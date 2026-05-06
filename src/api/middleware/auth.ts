/**
 * Bearer token authentication middleware for RapidRMS connector
 */

import crypto from 'crypto';
import { Request, Response, NextFunction } from 'express';
import { supabase, getConnectionForKey } from '../../lib/supabase.js';
import { decryptFromString } from './encrypt.js';
import { createLogger } from '../../utils/logger.js';

const log = createLogger('auth-middleware');

export interface RapidRMSCredentials {
  clientId: number;
  email: string;
  password: string;
  apiBaseUrl: string;
}

export interface AuthRequest extends Request {
  rapidrms?: {
    credentials: RapidRMSCredentials;
    apiKeyId: string;
  };
}

export function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      error: 'Missing or invalid Authorization header',
      message: 'Use: Authorization: Bearer <api_key>',
    });
  }

  const apiKey = authHeader.slice(7);
  const keyHash = crypto.createHash('sha256').update(apiKey).digest('hex');

  validateApiKey(keyHash, req as AuthRequest, res, next);
}

async function validateApiKey(
  keyHash: string,
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  try {
    const masterKey = process.env.ENCRYPTION_MASTER_KEY;
    if (!masterKey) {
      log.error('ENCRYPTION_MASTER_KEY not configured');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    const connectionData = await getConnectionForKey(keyHash);
    if (!connectionData) {
      log.warn('Invalid API key attempted');
      return res.status(401).json({
        error: 'Invalid or revoked API key',
      });
    }

    const conn = connectionData.rapidrms_connections[0];
    if (!conn) {
      log.error('Connection data missing for valid key');
      return res.status(500).json({ error: 'Connection data error' });
    }

    const password = decryptFromString(conn.encrypted_password, masterKey);

    req.rapidrms = {
      credentials: {
        clientId: parseInt(conn.client_id, 10),
        email: conn.email,
        password,
        apiBaseUrl: conn.api_base,
      },
      apiKeyId: connectionData.id,
    };

    log.info('API key validated', { keyPrefix: keyHash.slice(0, 8) });
    next();
  } catch (error) {
    log.error('Auth validation error', { error: (error as Error).message });
    res.status(500).json({ error: 'Authentication error' });
  }
}
