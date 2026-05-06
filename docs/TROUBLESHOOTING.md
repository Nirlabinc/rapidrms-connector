# Troubleshooting Guide

## Common Issues & Solutions

### Installation & Setup

#### npm install fails

```
error: gyp ERR! configure error
```

**Fix:**
```bash
npm install --verbose
# or
npm install --no-optional
```

Ensure you have:
- Node.js ≥ 18
- Python 3
- C++ build tools (`xcode-select --install` on Mac)

#### Claude Desktop doesn't see MCP server

**Symptoms:**
- No tools available
- Error: "MCP server failed to connect"

**Checks:**
1. Is server running?
   ```bash
   npm run mcp:dev
   ```
   Should print: `MCP server started successfully`

2. Is config correct?
   ```bash
   cat ~/.claude/config.json
   ```
   Check:
   - `command` points to correct node path
   - `args` path exists
   - `env` variables are set

3. Restart Claude Desktop completely (not just reload)

4. Check logs:
   ```bash
   # macOS
   tail -f ~/Library/Logs/Claude/debug.log
   
   # Linux
   tail -f ~/.local/share/Claude/debug.log
   ```

---

### Authentication Issues

#### "Missing RapidRMS credentials"

```
Error: Missing RapidRMS credentials. Set: RAPIDRMS_CLIENT_ID, RAPIDRMS_EMAIL, RAPIDRMS_PASSWORD
```

**Fix:**
```bash
# Check .env exists
cat .env

# Should have:
RAPIDRMS_CLIENT_ID=...
RAPIDRMS_EMAIL=...
RAPIDRMS_PASSWORD=...
```

If missing, copy from `.env.example`:
```bash
cp .env.example .env
# Edit with your credentials
```

#### "Auth HTTP 401"

```
Error: [party-liquor] Auth HTTP 401
```

**Cause:** Invalid credentials

**Fix:**
1. Manually test login in portal: https://www.rapidrms.com
2. If login fails there, password is wrong
3. Reset password in portal
4. Update `.env`
5. Test again

#### "Auth rejected: Invalid client_id"

```
Error: [party-liquor] Auth rejected: {"code":"500","message":"Invalid client_id"}
```

**Causes:**
- Client ID doesn't match account
- Account suspended
- Wrong API endpoint

**Fix:**
```bash
# Verify in RapidRMS portal
- Account Settings → check Client ID
- Status → should be "Active"

# Check API base URL
RAPIDRMS_API_BASE=https://rapidrmsapi.azurewebsites.net
```

#### "Token expires immediately"

Tokens work for a few seconds then fail.

**Cause:** System clock out of sync

**Fix:**
```bash
# macOS
date  # Check time
# If wrong, system clock issue

# Check RapidRMS server time
curl -I https://rapidrmsapi.azurewebsites.net
```

---

### Tool Execution

#### "Tool not found"

```
Error: Tool not found: rapidrms_get_sales_report
```

**Causes:**
- Typo in tool name
- MCP server not reloaded after adding new tools
- Wrong tool category

**Fix:**
1. Check spelling (must be exact)
2. Restart Claude Desktop
3. List available tools:
   ```bash
   npm run mcp:dev
   # Output should show all tools
   ```

#### "Tool execution timeout"

```
Error: Tool timed out after 30 seconds
```

**Cause:** RapidRMS API is slow

**Fix:**
1. Try narrower date range
2. Filter by location/category
3. Check RapidRMS status: Are they experiencing issues?
4. Increase timeout in `stream-proxy.ts`:
   ```typescript
   const TOOL_TIMEOUT = 60000;  // 60 seconds
   ```

#### "Tool returns empty data"

```
No data found for period 2024-01-01 to 2024-01-31
```

**Causes:**
- Wrong date range
- Store had no transactions
- Filters too restrictive

**Fix:**
1. Try different date range (e.g., last 30 days)
2. Remove filters (category, location)
3. Check: Did store operate on those dates?

---

### Data Issues

#### Sales are 0 but should be higher

**Cause:** Filtering by wrong location/employee

**Fix:**
- Try without location filter
- Verify locationId exists
- Check date range

#### PO generation suggests 0 units

```
Recommended: Smirnoff Vodka - 0 units
```

**Cause:** No historical sales data

**Fix:**
1. Expand analysis period (use previous month)
2. Check item was actually sold
3. Verify inventory is tracked

#### "Cost of goods shows $0"

**Cause:** Item doesn't have cost set in RapidRMS

**Fix:**
1. Go to RapidRMS portal
2. Item Management → update cost for items
3. Re-run report

---

### Performance

#### Slow response times (>15s)

**Cause:** Large date ranges or unfiltered queries

**Fix:**
```
Instead of: "Sales for the last 2 years"
Try: "Sales for the last month"

Instead of: "All items by revenue"
Try: "Top 20 items by revenue"
```

#### High API usage / rate limits

```
Error: Rate limit exceeded. 100 req/minute max
```

**Fix:**
1. Add caching (see ARCHITECTURE.md)
2. Combine multiple queries into one
3. Batch requests
4. Reduce polling frequency

---

### Integration Issues

#### Copilot: "Plugin not working"

1. Test OpenAPI spec:
   ```bash
   npx swagger-cli validate dist/openapi.yaml
   ```

2. Test API endpoint:
   ```bash
   curl -X POST https://your-api.com/tools/rapidrms_get_sales_report \
     -H "Authorization: Bearer YOUR_TOKEN" \
     -d '{"startDate":"2024-01-01","endDate":"2024-01-31"}'
   ```

3. Check CORS headers:
   ```bash
   curl -I https://your-api.com
   # Should include:
   # Access-Control-Allow-Origin: https://copilot.microsoft.com
   ```

#### Gemini: "Plugin import fails"

1. Validate plugin.json:
   ```bash
   npx schema-validator public/plugin.json
   ```

2. Check URLs are correct:
   ```bash
   curl https://your-host/plugin.json
   curl https://your-host/openapi.yaml
   # Both must return valid JSON/YAML
   ```

3. Test plugin import by URL manually in AI Studio

---

### Docker Issues

#### Container won't start

```
Error: Cannot find module
```

**Fix:**
```bash
docker-compose build --no-cache
docker-compose up
```

#### MCP connection fails in Docker

**Cause:** stdin/stdout not connected properly

**Fix:**
```yaml
# docker-compose.yml
stdin_open: true
tty: true
```

---

### Build/Deployment

#### TypeScript compile errors

```
error TS2307: Cannot find module 'xyz'
```

**Fix:**
```bash
npm install  # Reinstall deps
npm run build
```

#### npm publish fails

```
error: You must be logged in to publish
```

**Fix:**
```bash
npm login
# Enter username, password, OTP
npm publish
```

---

## Debug Mode

Enable verbose logging:

```bash
LOG_LEVEL=debug npm run mcp:dev
```

Shows:
- All API calls
- Token refresh events
- Tool execution steps
- Error details

---

## Getting Help

1. Check this guide first (Ctrl+F to search)
2. Check [API.md](API.md) for tool reference
3. Enable debug logging (see above)
4. Check GitHub issues: https://github.com/rapidrms/connector/issues
5. Create new issue with:
   - Error message (exact)
   - Steps to reproduce
   - Debug logs (sanitize credentials!)
   - Environment (Node version, OS)

---

## Known Limitations

### RapidRMS API

- Slow for large date ranges (>1 year)
- No real-time streaming
- Rate limit: 100 req/min
- Response timeout: 30-60 seconds
- Limited historical data (typically 3-5 years)

### Connector

- In-memory token cache (restarts lose session)
- No built-in data persistence
- Single-threaded execution
- Max response size: ~4KB for Gemini

### Workarounds

```typescript
// For persistence, use Redis cache:
import redis from 'redis';
const cache = redis.createClient();

// For multi-threading, use worker threads:
import { Worker } from 'worker_threads';

// For large responses, stream or paginate:
const limit = 100;
let offset = 0;
while (moreData) {
  const page = await api.get(..., { limit, offset });
  offset += limit;
}
```

---

## FAQ

**Q: Can I use the same connector for multiple stores?**
A: Yes, via environment variables or multi-tenant setup. See ARCHITECTURE.md.

**Q: How often do tokens refresh?**
A: Automatically every 9 minutes. No action needed.

**Q: Can I modify tool definitions?**
A: Yes, edit `src/tools/*.ts` and rebuild.

**Q: Is my data secure?**
A: Credentials stored locally, not sent anywhere except RapidRMS API.

**Q: Can I add custom tools?**
A: Yes, see ARCHITECTURE.md → "Extending with Custom Tools"

**Q: How do I cache results?**
A: See ARCHITECTURE.md → "Caching Strategy"
