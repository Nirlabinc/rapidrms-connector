# Authentication Guide

RapidRMS Connector supports two authentication methods.

## Method 1: API Key (Recommended for MVP)

Simplest setup. Store credentials locally.

### Setup

1. **Get your credentials from RapidRMS:**
   - Log in to portal
   - Account Settings → API Credentials
   - Copy:
     - Client ID (e.g., `2`)
     - Email (e.g., `partyliquor@hotmail.com`)
     - Password (your portal password)

2. **Set environment variables:**

   `.env`:
   ```bash
   RAPIDRMS_CLIENT_ID=2
   RAPIDRMS_EMAIL=partyliquor@hotmail.com
   RAPIDRMS_PASSWORD=Admin$101
   RAPIDRMS_API_BASE=https://rapidrmsapi.azurewebsites.net
   ```

3. **For Claude Desktop:**

   `~/.claude/config.json`:
   ```json
   {
     "mcpServers": {
       "rapidrms": {
         "command": "node",
         "args": ["..."],
         "env": {
           "RAPIDRMS_CLIENT_ID": "2",
           "RAPIDRMS_EMAIL": "...",
           "RAPIDRMS_PASSWORD": "..."
         }
       }
     }
   }
   ```

### Security

✅ Credentials stored **locally only** (not sent to cloud)  
✅ Bearer token generated per-session  
✅ Token cached 9 minutes (valid 10 min)  
⚠️ Password stored in plaintext in `.env` — **keep it secret**

### Token Refresh

Automatic. When token expires (after 9 min):
1. Connector detects 401 response
2. Auto-requests new token
3. Retries request
4. No user action needed

## Method 2: OAuth (Enterprise)

For multi-user or public deployments.

### Flow

```
User → RapidRMS Login → OAuth Server → Refresh Token → API Calls
```

### Setup

1. **Register OAuth app with RapidRMS:**
   - Contact: api@rapidrms.com
   - Provide:
     - Redirect URL: `https://your-app.com/auth/callback`
     - Scopes needed: `openid profile email`

2. **You receive:**
   - `OAUTH_CLIENT_ID`
   - `OAUTH_CLIENT_SECRET`
   - `OAUTH_AUTH_URL` (e.g., `https://rapidrms.com/oauth/authorize`)
   - `OAUTH_TOKEN_URL` (e.g., `https://rapidrms.com/oauth/token`)

3. **Implement OAuth callback:**

   `src/oauth-handler.ts`:
   ```typescript
   import { oauth2Client } from '@rapid rms/connector/oauth';

   app.get('/auth/callback', async (req, res) => {
     const code = req.query.code;
     
     // Exchange code for token
     const token = await oauth2Client.getToken({
       code,
       client_id: process.env.OAUTH_CLIENT_ID,
       client_secret: process.env.OAUTH_CLIENT_SECRET,
     });

     // Store token for user (e.g., in DB or session)
     req.session.rapidrmsToken = token;
     
     res.redirect('/dashboard');
   });
   ```

4. **In MCP server:**
   ```typescript
   // Get token from session/DB
   const token = getStoredToken(userId);
   
   const client = new RapidRMSClient(credentials, {
     accessToken: token.access_token,
     refreshToken: token.refresh_token,
   });
   ```

### Token Refresh (OAuth)

```typescript
// Auto-refresh on 401
if (response.status === 401) {
  const newToken = await oauth2Client.refreshToken(token.refresh_token);
  storeToken(userId, newToken);
  // Retry with new token
}
```

## Comparison

| Feature | API Key | OAuth |
|---------|---------|-------|
| Setup time | 5 min | 30 min |
| Multi-user | No | Yes |
| Local credentials | Yes | No |
| Token refresh | Auto | Auto |
| Complexity | Low | High |
| Security | Medium | High |
| Best for | MVP, testing | Production, multi-user |

## Troubleshooting

### "Missing credentials"

```
Error: Missing RapidRMS credentials. Set: RAPIDRMS_CLIENT_ID, RAPIDRMS_EMAIL, RAPIDRMS_PASSWORD
```

**Fix:** Set all required env vars in `.env` file.

### "Auth HTTP 401"

```
Error: Auth HTTP 401: Unauthorized
```

**Causes:**
- Wrong password (check caps lock)
- Password expired (reset in portal)
- Wrong client ID
- Account suspended

**Fix:**
1. Log in to RapidRMS portal manually (test password)
2. Verify Client ID in Account Settings
3. Reset password if needed

### "Auth HTTP 403"

```
Error: [party-liquor] Auth rejected: {"code":"500","message":"Invalid client_id"}
```

**Cause:** Client ID doesn't match email/password combo

**Fix:** Double-check all three match in portal

### "Token expires immediately"

If token expires after a few seconds:
1. Check system clock (must be accurate)
2. Check RapidRMS server time: API returns token validity in response
3. Reduce TOKEN_TTL_MS in `src/client/auth.ts` (from 9 min to 5 min)

### "OAuth callback fails"

```
Error: Invalid redirect_uri
```

**Fix:**
1. Verify redirect URL matches what's registered with RapidRMS
2. Check protocol: `https` vs `http`
3. Check port number if applicable

### "Token refresh doesn't work"

If you see repeated 401 errors:

```typescript
// In src/client/auth.ts
export async function getAuth(credentials, clientKey) {
  // Check token expiry
  if (Date.now() > cache.expiresAt + 5000) {  // 5s buffer
    clearAuthCache(clientKey);
  }
  // ... rest of function
}
```

## Rotating Credentials

### API Key Rotation

1. Generate new API key in RapidRMS portal
2. Update `.env` file
3. Restart connector
4. Delete old key in portal

### OAuth Token Rotation

Handled automatically. When refresh token expires (typically 90 days):

1. User must log in again
2. New refresh token issued
3. No manual action needed

## Security Best Practices

✅ **DO:**
- Store `.env` in `.gitignore` (never commit credentials)
- Use strong passwords
- Rotate credentials quarterly
- Use OAuth for production
- Use HTTPS for all API calls

❌ **DON'T:**
- Hardcode credentials in code
- Share `.env` file
- Log full credentials
- Use same password for multiple systems
- Commit to git (even in history)

## Advanced: Custom Token Storage

By default, tokens cached in-memory. For multi-instance setups:

```typescript
// Store in Redis
import redis from 'redis';

const cache = redis.createClient();

export async function getAuth(credentials, clientKey) {
  const cached = await cache.get(`auth:${clientKey}`);
  if (cached) return JSON.parse(cached);
  
  // Fetch new token
  const { token, dbName } = await authenticate(credentials, clientKey);
  
  // Store in Redis (9 min expiry)
  await cache.setex(`auth:${clientKey}`, 540, JSON.stringify({ token, dbName }));
  
  return { token, dbName };
}
```

See [ARCHITECTURE.md](ARCHITECTURE.md) for token storage options.
