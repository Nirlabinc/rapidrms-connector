# Using RapidRMS Connector in Claude

Your RapidRMS Connector API is live at: **http://187.124.85.107:3000**

## Step 1: Get an API Key

### Option A: Register Test Credentials

First, create a Supabase user account manually via Supabase dashboard. Then register RapidRMS credentials:

```bash
curl -X POST http://187.124.85.107:3000/connect \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your-supabase-jwt>" \
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
  "apiKey": "a1b2c3d4e5f6...",
  "keyPrefix": "a1b2c3d4"
}
```

**Save the apiKey!**

---

## Step 2: Configure Claude Desktop (MCP)

Add to `~/.claude/config.json`:

```json
{
  "mcpServers": {
    "rapidrms": {
      "command": "curl",
      "args": ["-X", "POST", "http://187.124.85.107:3000/api/tools/{name}", "-H", "Authorization: Bearer YOUR_API_KEY"],
      "env": {
        "API_KEY": "a1b2c3d4e5f6..."
      }
    }
  }
}
```

OR use a simpler approach below.

---

## Step 3: Query via Claude (Simple HTTP)

You can ask Claude to call your API directly using curl in the conversation. Add this to your Claude prompt:

```
When I ask about RapidRMS sales, inventory, or employees, call:

POST http://187.124.85.107:3000/api/tools/rapidrms_get_sales_report
Header: Authorization: Bearer YOUR_API_KEY
Header: Content-Type: application/json
Body: {"startDate":"2026-05-01","endDate":"2026-05-06"}

Then interpret the response and explain it to me.
```

---

## Step 4: Test with curl

```bash
# Get your API key from Step 1
API_KEY="a1b2c3d4e5f6..."

# Test sales report
curl -X POST http://187.124.85.107:3000/api/tools/rapidrms_get_sales_report \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $API_KEY" \
  -d '{
    "startDate": "2026-05-01",
    "endDate": "2026-05-06"
  }'

# Test inventory
curl -X POST http://187.124.85.107:3000/api/tools/rapidrms_get_inventory_status \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $API_KEY" \
  -d '{}'

# Test employee performance
curl -X POST http://187.124.85.107:3000/api/tools/rapidrms_get_employee_performance \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $API_KEY" \
  -d '{
    "period": "month"
  }'
```

---

## Available Tools

### Sales
- `rapidrms_get_sales_report` - Sales by date range
- `rapidrms_get_revenue_summary` - Revenue for today/week/month/year
- `rapidrms_get_top_products` - Top performing products
- `rapidrms_get_employee_performance` - Sales by employee

### Inventory
- `rapidrms_get_inventory_status` - Current stock levels
- `rapidrms_get_low_stock_items` - Critical & below-minimum items

### Analytics
- `rapidrms_get_department_margins` - Revenue by department

---

## Example: Ask Claude (with instructions)

Give Claude these instructions:

> "You have access to a RapidRMS API at: http://187.124.85.107:3000
> 
> To query it, make HTTP POST requests with:
> - URL: http://187.124.85.107:3000/api/tools/{toolName}
> - Header: Authorization: Bearer eyJ...truncated...
> - Header: Content-Type: application/json
> - Body: JSON parameters
> 
> Available tools:
> - rapidrms_get_sales_report {startDate, endDate}
> - rapidrms_get_inventory_status {}
> - rapidrms_get_employee_performance {period: 'month'}
> 
> Please answer my questions about my RapidRMS data using these tools."

Then ask Claude:

> "What were my sales last week?"

Claude will call the API and get the data!

---

## Troubleshooting

### "Invalid API Key"
- Verify Bearer token is correct: `Authorization: Bearer <key>`
- Check key hasn't been revoked: `GET /connect`

### "Connection refused"
- API might be down. Check: `curl http://187.124.85.107:3000/health`
- If offline, SSH to server and restart: `pm2 restart rapidrms-api`

### "RapidRMS API error"
- Check credentials are correct (try in RapidRMS web UI)
- Verify network connectivity to `https://rapidrmsapi.azurewebsites.net`

---

## What's Next

1. **Set up Nginx + HTTPS** (see `DEPLOYMENT-CHECKLIST.md`)
   ```bash
   sudo apt install nginx certbot python3-certbot-nginx
   sudo certbot --nginx -d api.rapidrms.shre.ai
   ```

2. **Build a web UI** for credential registration (optional)

3. **Integrate with other models**:
   - Copilot: Export OpenAPI spec
   - Gemini: Create plugin.json

---

**API is live. Start querying!**
