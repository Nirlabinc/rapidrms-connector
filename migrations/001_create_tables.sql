-- RapidRMS Connector Supabase Schema
-- Run this in Supabase SQL Editor

-- rapidrms_connections: Store user's RapidRMS credentials
CREATE TABLE IF NOT EXISTS rapidrms_connections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  store_name TEXT NOT NULL,
  client_id TEXT NOT NULL,
  email TEXT NOT NULL,
  encrypted_password TEXT NOT NULL,
  api_base TEXT DEFAULT 'https://rapidrmsapi.azurewebsites.net',
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_rapidrms_connections_user_id ON rapidrms_connections(user_id);
CREATE INDEX idx_rapidrms_connections_active ON rapidrms_connections(active);

-- api_keys: Hashed API keys for authentication
CREATE TABLE IF NOT EXISTS api_keys (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  connection_id UUID NOT NULL REFERENCES rapidrms_connections(id) ON DELETE CASCADE,
  key_hash TEXT NOT NULL UNIQUE,
  key_prefix TEXT NOT NULL,
  label TEXT,
  last_used_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  revoked_at TIMESTAMPTZ
);

CREATE INDEX idx_api_keys_user_id ON api_keys(user_id);
CREATE INDEX idx_api_keys_key_hash ON api_keys(key_hash);
CREATE INDEX idx_api_keys_revoked ON api_keys(revoked_at);

-- usage_logs: Track tool usage and performance
CREATE TABLE IF NOT EXISTS usage_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  api_key_id UUID REFERENCES api_keys(id),
  tool_name TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('success', 'error')),
  response_ms INTEGER,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_usage_logs_api_key_id ON usage_logs(api_key_id);
CREATE INDEX idx_usage_logs_tool_name ON usage_logs(tool_name);
CREATE INDEX idx_usage_logs_created_at ON usage_logs(created_at);

-- Enable RLS (Row Level Security)
ALTER TABLE rapidrms_connections ENABLE ROW LEVEL SECURITY;
ALTER TABLE api_keys ENABLE ROW LEVEL SECURITY;
ALTER TABLE usage_logs ENABLE ROW LEVEL SECURITY;

-- RLS Policies for rapidrms_connections: Users can only see their own
CREATE POLICY "Users can view their own connections"
  ON rapidrms_connections FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own connections"
  ON rapidrms_connections FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own connections"
  ON rapidrms_connections FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own connections"
  ON rapidrms_connections FOR DELETE
  USING (auth.uid() = user_id);

-- RLS Policies for api_keys: Users can only see their own
CREATE POLICY "Users can view their own API keys"
  ON api_keys FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own API keys"
  ON api_keys FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can revoke their own API keys"
  ON api_keys FOR UPDATE
  USING (auth.uid() = user_id);

-- RLS Policies for usage_logs: Service role can read all
-- (usage_logs are written by service role, not users directly)
CREATE POLICY "Service can log usage"
  ON usage_logs FOR INSERT
  WITH CHECK (true);
