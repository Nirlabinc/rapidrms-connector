/**
 * Supabase client initialization for RapidRMS connector
 */

import { createClient } from '@supabase/supabase-js';
import ws from 'ws';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error(
    'Missing SUPABASE_URL or SUPABASE_SERVICE_KEY environment variables'
  );
}

export const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  realtime: {
    ws: ws,
  },
} as any);

export async function getUserIdFromApiKey(
  keyHash: string
): Promise<string | null> {
  const { data, error } = await supabase
    .from('api_keys')
    .select('user_id, connection_id')
    .eq('key_hash', keyHash)
    .eq('revoked_at', null)
    .single();

  if (error || !data) {
    return null;
  }

  return data.user_id;
}

export async function getConnectionForKey(
  keyHash: string
): Promise<any | null> {
  const { data, error } = await supabase
    .from('api_keys')
    .select(
      `
      id,
      user_id,
      connection_id,
      rapidrms_connections(
        client_id,
        email,
        encrypted_password,
        api_base
      )
    `
    )
    .eq('key_hash', keyHash)
    .eq('revoked_at', null)
    .single();

  if (error || !data) {
    return null;
  }

  return data;
}

export async function createVaultEntry(entry: {
  user_id: string;
  api_key_id: string;
  label: string;
  encrypted_payload: string;
  expires_at: string | null;
}) {
  const { data, error } = await supabase
    .from('vault_entries')
    .insert(entry)
    .select('id, label, created_at, expires_at')
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getVaultEntryById(id: string) {
  const { data, error } = await supabase
    .from('vault_entries')
    .select('id, user_id, encrypted_payload, label, created_at, expires_at')
    .eq('id', id)
    .single();

  if (error || !data) {
    return null;
  }

  if (data.expires_at && new Date(data.expires_at).getTime() < Date.now()) {
    return null;
  }

  return data;
}

export async function logToolUsage(
  apiKeyId: string,
  toolName: string,
  status: 'success' | 'error',
  responseMs: number
) {
  await supabase.from('usage_logs').insert({
    api_key_id: apiKeyId,
    tool_name: toolName,
    status,
    response_ms: responseMs,
    created_at: new Date().toISOString(),
  });
}

export async function updateKeyLastUsed(apiKeyId: string) {
  await supabase
    .from('api_keys')
    .update({ last_used_at: new Date().toISOString() })
    .eq('id', apiKeyId);
}
