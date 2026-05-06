# RapidRMS Connector — SaaS Setup Guide

This guide walks through setting up a hosted RapidRMS connector service using Supabase for credential storage and user management.

## Architecture

```
User (Claude)
  ↓
  POST /api/tools/rapidrms_get_sales_report
  + Authorization: Bearer <api_key>
  ↓
API Server (Express.js)
  ↓ validates key
  ↓ loads encrypted creds from Supabase
  ↓ calls RapidRMS API with user's credentials
  ↓
RapidRMS API → Response → Back to Claude
```

## Prerequisites

- Supabase project (free tier at supabase.com)
- Node.js 20+
- Hostinger VPS or similar hosting (optional, can run locally)
- `openssl` command-line tool

## Step 1: Create Supabase Project

1. Go to https://supabase.com and create a free project
2. Note your **Project URL**: `https://xxxxx.supabase.co`
3. Go to **Settings → API** and copy the **Service Role Key**

## Step 2: Create Database Tables

1. In Supabase, go to **SQL Editor**
2. Create a new query and paste the contents of `migrations/001_create_tables.sql`
3. Run the query
4. Verify tables are created: `rapidrms_connections`, `api_keys`, `usage_logs`

## Step 3: Generate Encryption Master Key

```bash
openssl rand -hex 32
# Output: a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6
```

Save this key securely — it's needed for the server and **never share it**.

## Step 4: Configure Environment Variables

Create a `.env` file in the project root:

```bash
# Server
PORT=3000
NODE_ENV=production

# Supabase
SUPABASE_URL=https://cghdgckuavydvfkyfpgn.supabase.co
SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Encryption
ENCRYPTION_MASTER_KEY=a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6

# Logging
LOG_LEVEL=info
```

**⚠️ Never commit `.env` to git. Use `.env.local` or environment secrets.**

## Step 5: Install Dependencies

```bash
npm install
# or
pnpm install
```

## Step 6: Build TypeScript

```bash
npm run build
```

## Step 7: Start the Server

**Development (with hot reload):**

```bash
npm run api:dev
```

**Production:**

```bash
npm run api
```

Server runs on `http://localhost:3000`

## Step 8: Test Locally

### 1. Sign up a test user

Use Supabase's authentication UI or API. For testing, you can manually insert:

```sql
-- In Supabase SQL Editor
-- Note: You'll need to use Supabase Auth instead, but this is for reference
INSERT INTO auth.users (id, email, phone)
VALUES ('test-user-id', 'test@example.com', NULL);
```

Better: Use Supabase's built-in Auth UI or a frontend to sign up.

### 2. Register RapidRMS credentials

```bash
curl -X POST http://localhost:3000/connect \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <supabase-jwt-token>" \
  -d '{
    "clientId": "2",
    "email": "partyliquor@hotmail.com",
    "password": "Admin$101",
    "storeName": "Party Liquor"
  }'
```

Response:

```json
{
  "success": true,
  "apiKey": "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6",
  "keyPrefix": "a1b2c3d4",
  "connectionId": "uuid-here",
  "message": "Save your API key - it will not be displayed again."
}
```

**Save the `apiKey` — you won't see it again.**

### 3. Query a tool

```bash
curl -X POST http://localhost:3000/api/tools/rapidrms_get_sales_report \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6" \
  -d '{
    "startDate": "2026-05-01",
    "endDate": "2026-05-06"
  }'
```

Response:

```json
{
  "success": true,
  "toolName": "rapidrms_get_sales_report",
  "result": {
    "content": "📊 Sales Report (2026-05-01 to 2026-05-06)..."
  }
}
```

### 4. List user's connections

```bash
curl -X GET http://localhost:3000/connect \
  -H "Authorization: Bearer <supabase-jwt-token>"
```

### 5. Revoke an API key

```bash
curl -X DELETE http://localhost:3000/connect/<connection-id> \
  -H "Authorization: Bearer <supabase-jwt-token>"
```

## Step 9: Deploy to Hostinger (or Similar VPS)

### Option A: Using Node.js on Hostinger

1. **SSH into Hostinger:**

   ```bash
   ssh user@aros.nirtek.net
   ```

2. **Clone the repo:**

   ```bash
   cd /home/user/apps
   git clone https://github.com/Nirlabinc/rapidrms-connector.git
   cd rapidrms-connector
   npm install
   npm run build
   ```

3. **Create `.env` with production secrets** (use Hostinger's file manager or `scp`)

4. **Run with PM2 (process manager):**

   ```bash
   npm install -g pm2
   pm2 start npm --name "rapidrms-api" -- run api
   pm2 save
   pm2 startup
   ```

5. **Set up reverse proxy (Nginx):**

   ```nginx
   server {
     listen 80;
     server_name api.rapidrms.shre.ai;

     location / {
       proxy_pass http://localhost:3000;
       proxy_set_header Host $host;
       proxy_set_header X-Real-IP $remote_addr;
       proxy_set_header Authorization $http_authorization;
     }
   }
   ```

6. **Enable HTTPS with Let's Encrypt:**

   ```bash
   certbot --nginx -d api.rapidrms.shre.ai
   ```

7. **Verify:**

   ```bash
   curl https://api.rapidrms.shre.ai/health
   ```

### Option B: Using Docker on Hostinger

1. **Create `Dockerfile`:**

   ```dockerfile
   FROM node:20-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY src ./src
   COPY tsconfig.json ./
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "run", "api"]
   ```

2. **Create `docker-compose.yml`:**

   ```yaml
   version: '3.8'
   services:
     api:
       build: .
       ports:
         - "3000:3000"
       environment:
         - SUPABASE_URL=${SUPABASE_URL}
         - SUPABASE_SERVICE_KEY=${SUPABASE_SERVICE_KEY}
         - ENCRYPTION_MASTER_KEY=${ENCRYPTION_MASTER_KEY}
         - PORT=3000
       restart: unless-stopped
   ```

3. **Deploy:**

   ```bash
   docker-compose up -d
   ```

## Using in Claude

Once deployed, configure Claude to use your RapidRMS API.

### Claude Desktop

Add to `~/.claude/config.json`:

```json
{
  "tools": [
    {
      "type": "http",
      "name": "RapidRMS",
      "baseUrl": "https://api.rapidrms.shre.ai",
      "headers": {
        "Authorization": "Bearer <your-api-key>"
      }
    }
  ]
}
```

Then ask Claude:

```
"What were my sales last week?"
```

Claude will call `POST /api/tools/rapidrms_get_sales_report` automatically.

### Web Interface (Future)

Create a simple web signup flow:

1. User signs up → Supabase Auth
2. User enters RapidRMS credentials → `/connect`
3. User gets API key → Copy to clipboard
4. User pastes into Claude config

## Monitoring & Logs

View usage logs in Supabase:

```sql
SELECT
  tool_name,
  status,
  COUNT(*) as calls,
  AVG(response_ms) as avg_ms
FROM usage_logs
WHERE created_at > NOW() - INTERVAL '24 hours'
GROUP BY tool_name, status
ORDER BY calls DESC;
```

## Troubleshooting

### "Invalid or revoked API key"

- Check the Bearer token is correct
- Verify it hasn't been revoked (`revoked_at IS NOT NULL`)
- Check `api_keys.revoked_at` in Supabase

### "Server configuration error"

- `ENCRYPTION_MASTER_KEY` is missing or not valid hex
- `SUPABASE_URL` or `SUPABASE_SERVICE_KEY` not set

### "Connection not found"

- The RapidRMS credentials were never saved
- Try `/connect` again to register

### "RapidRMS API error: Unauthorized"

- RapidRMS credentials are wrong (clientId, email, password)
- Try the same credentials in RapidRMS web interface to verify

## Summary

✅ Supabase database configured
✅ Encryption set up
✅ API server running
✅ Users can register credentials once
✅ Claude accesses RapidRMS via API key
✅ No local setup required for users

**Next:** Deploy to Hostinger, configure Nginx/HTTPS, test with Claude.
