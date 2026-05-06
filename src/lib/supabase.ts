/**
 * Supabase client initialization for RapidRMS connector
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error(
    'Missing SUPABASE_URL or SUPABASE_SERVICE_KEY environment variables'
  );
}

export const supabase = createClient(supabaseUrl, supabaseServiceKey);

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
