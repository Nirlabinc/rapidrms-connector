# Setting Up RapidRMS Connector for Google Gemini

Gemini supports **Google Plugins** (Actions) using OpenAPI + plugin manifest.

## Quick Start (10 minutes)

### 1. Create Plugin Manifest

Create `public/plugin.json`:

```json
{
  "schema_version": "v1",
  "name_for_model": "RapidRMS",
  "name_for_human": "RapidRMS Connector",
  "description_for_model": "Access RapidRMS POS data: sales, inventory, employees, reports",
  "description_for_human": "Connect to your RapidRMS account to view sales, inventory, and business metrics",
  "auth": {
    "type": "oauth",
    "client_id": "YOUR_OAUTH_CLIENT_ID",
    "scope": "openid profile email"
  },
  "api": {
    "type": "openapi",
    "url": "https://your-rapidrms-api.com/openapi.yaml"
  },
  "logo_url": "https://your-rapidrms-api.com/logo.png"
}
```

### 2. Generate OpenAPI Spec

Same as Copilot:

```bash
npm run generate-openapi
```

Creates `dist/openapi.yaml`

### 3. Host Files

Host both `plugin.json` and `openapi.yaml` on same domain:

```
https://your-rapidrms-api.com/
  ├── plugin.json
  ├── openapi.yaml
  └── logo.png
```

### 4. Register with Google

1. Go to [Google AI Studio](https://aistudio.google.com)
2. Create new conversation
3. Click "+" → "Import from URL"
4. Paste: `https://your-rapidrms-api.com/plugin.json`
5. Done!

Users can now:
```
@rapidrms Show me today's sales
```

## Plugin Manifest Details

### Required Fields

| Field | Purpose |
|-------|---------|
| `schema_version` | Must be `v1` |
| `name_for_model` | Machine-readable name (no spaces) |
| `name_for_human` | Display name |
| `description_for_model` | What the model should know |
| `description_for_human` | User-facing description |
| `api.type` | Must be `openapi` |
| `api.url` | HTTP URL to your OpenAPI spec |

### Optional Fields

```json
{
  "contact_email": "support@rapidrms.com",
  "legal_info_url": "https://rapidrms.com/legal",
  "logo_url": "https://your-host/logo.png",
  "privacy_policy_url": "https://rapidrms.com/privacy",
  "auth": {
    "type": "oauth",
    "client_id": "...",
    "authorization_url": "https://rapidrms.com/oauth/authorize",
    "token_url": "https://rapidrms.com/oauth/token",
    "scope": "openid profile email"
  }
}
```

## OpenAPI Spec for Gemini

Gemini is stricter than Copilot. Requirements:

✅ All paths must have `operationId`  
✅ All parameters must have `description`  
✅ Response must have `200` status with `schema`  
✅ No required parameters in query string (use requestBody)  
✅ Timeout: 60 seconds  
✅ Max response: 4KB  

### Good Example

```yaml
paths:
  /tools/rapidrms_get_sales_report:
    post:
      operationId: getSalesReport
      description: "Get sales data for a date range"
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                startDate:
                  type: string
                  format: date
                  description: "Start date (YYYY-MM-DD)"
                endDate:
                  type: string
                  format: date
                  description: "End date (YYYY-MM-DD)"
              required: ["startDate", "endDate"]
      responses:
        "200":
          description: "Sales report"
          content:
            application/json:
              schema:
                type: object
                properties:
                  revenue:
                    type: number
                  transactions:
                    type: integer
```

## Authentication Flow

### OAuth Setup (Recommended)

1. **Register OAuth app** with RapidRMS:
   - Redirect URL: `https://gemini.google.com/oauth/callback`
   - Scopes: `openid profile email`

2. **In plugin.json:**
   ```json
   {
     "auth": {
       "type": "oauth",
       "client_id": "YOUR_CLIENT_ID",
       "authorization_url": "https://rapidrms.com/oauth/authorize",
       "token_url": "https://rapidrms.com/oauth/token",
       "scope": "openid profile email"
     }
   }
   ```

3. **First user flow:**
   - Gemini → Google's OAuth proxy → RapidRMS login
   - User approves
   - Google stores refresh token
   - Google includes token in API calls

### API Key Setup (Testing Only)

```json
{
  "auth": {
    "type": "apiKey",
    "in": "header",
    "name": "X-API-Key"
  }
}
```

User provides key in Gemini settings. Less secure, but simpler for testing.

## Hosting

### Option 1: Google Cloud Run

```bash
gcloud run deploy rapidrms-connector \
  --source . \
  --region us-central1 \
  --allow-unauthenticated
```

### Option 2: Firebase Hosting

```bash
npm run build
firebase deploy --only hosting
```

### Option 3: Vercel

```bash
vercel deploy --prod
```

Your plugin.json URL becomes:
```
https://your-vercel-app.vercel.app/plugin.json
```

## Testing

### Before Publishing

```bash
# Validate OpenAPI spec
npx swagger-cli validate dist/openapi.yaml

# Validate plugin.json
npx schema-validator public/plugin.json
```

### In Google AI Studio

1. Import plugin: `https://your-host/plugin.json`
2. Test query: `@rapidrms What was our sales last week?`
3. Check logs in browser DevTools (Network tab)

### Common Issues

**"Plugin not found"**
- Check URL returns valid plugin.json with correct `api.url`
- CORS: Make sure your server sends:
  ```
  Access-Control-Allow-Origin: https://gemini.google.com
  ```

**"API returns error"**
- Check OpenAPI spec matches your endpoints
- Verify Auth token is included in request
- Response must be ≤ 4KB

**"Timeout (>60s)"**
- RapidRMS API is slow
- Implement caching for common queries
- Consider async jobs for large requests

## Deployment Checklist

- [ ] plugin.json hosted at `https://your-host/plugin.json`
- [ ] openapi.yaml hosted at `https://your-host/openapi.yaml`
- [ ] Both files valid (schema validation passed)
- [ ] OAuth credentials configured (or API key)
- [ ] CORS headers enabled for gemini.google.com
- [ ] Tested in AI Studio
- [ ] Logo uploaded (optional but recommended)
- [ ] Privacy policy available (required for public plugins)

## Going Public

To publish to Google Plugin Store:

1. Request review: Google plugin dashboard
2. Pass security review
3. Pass functionality review
4. Get listed in plugin marketplace

For internal use only:
- Send plugin.json URL to users
- They import in their Gemini
- No public listing needed

## Support

- [Google Plugin Docs](https://ai.google.dev/docs/plugins)
- [OpenAPI Spec Guide](https://spec.openapis.org/)
- [RapidRMS API Docs](../API.md)
