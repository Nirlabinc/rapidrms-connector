# Setting Up RapidRMS Connector for Copilot

Copilot uses **Skills** (similar to plugins). We expose RapidRMS tools via OpenAPI spec.

## Quick Start (5 minutes)

### 1. Generate OpenAPI Spec

```bash
npm run generate-openapi
```

This creates `dist/openapi.yaml` with all 40+ tools.

### 2. Host the OpenAPI Spec

You have two options:

#### Option A: GitHub Pages (Free)

```bash
# Push to gh-pages branch
git checkout --orphan gh-pages
git add dist/openapi.yaml
git commit -m "Add OpenAPI spec"
git push origin gh-pages

# Your spec is now at:
# https://github.com/YOUR-ORG/rapidrms-connector/raw/gh-pages/openapi.yaml
```

#### Option B: Self-Hosted Server

```bash
npm run http-server
# Runs on http://localhost:3000
# Spec at: http://localhost:3000/openapi.yaml
```

### 3. Add to Copilot

In Copilot (or Teams):
- Settings → Plugins → Add custom plugin
- Paste OpenAPI spec URL: `https://your-host/openapi.yaml`
- Authenticate with RapidRMS credentials
- Done!

## OpenAPI Schema Example

```yaml
openapi: 3.0.0
info:
  title: RapidRMS Connector
  version: 0.1.0
servers:
  - url: https://your-rapidrms-api-server.com
paths:
  /tools/rapidrms_get_sales_report:
    post:
      operationId: getRapidRMSSalesReport
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                startDate:
                  type: string
                  format: date
                endDate:
                  type: string
                  format: date
      responses:
        "200":
          description: Sales report
```

## Authentication

Copilot supports OAuth or API key auth. We use:

**OAuth Flow:**
1. User approves: Copilot → RapidRMS API
2. Copilot stores refresh token
3. Copilot includes token in all requests

**API Key Flow (simpler for testing):**
- User provides API key in settings
- Copilot adds to Authorization header

## Hosting the API Endpoint

If using OpenAPI skills, Copilot calls your HTTP API. Two options:

### Option 1: Standalone HTTP Server

Create `src/http-server.ts`:

```typescript
import express from 'express';
import { executeTool } from './executors/index.js';

const app = express();
app.use(express.json());

// Generate OpenAPI spec
app.get('/openapi.yaml', (req, res) => {
  res.type('application/yaml').send(generateOpenAPISpec());
});

// Tool execution endpoint
app.post('/tools/:toolName', async (req, res) => {
  const { toolName } = req.params;
  const result = await executeTool(toolName, req.body);
  res.json(result);
});

app.listen(3000);
```

Deploy to:
- Heroku (free tier)
- AWS Lambda + API Gateway
- Your own server
- Replit

### Option 2: Vercel Serverless

Create `api/tools.ts`:

```typescript
import { executeTool } from '../src/executors/index.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const result = await executeTool(req.query.tool, req.body);
    res.json(result);
  }
}
```

Deploy:
```bash
vercel deploy
```

Then in OpenAPI spec:
```yaml
servers:
  - url: https://your-vercel-app.vercel.app/api
```

## Testing

### Test with curl:

```bash
curl -X POST http://localhost:3000/tools/rapidrms_get_sales_report \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "startDate": "2024-01-01",
    "endDate": "2024-01-31"
  }'
```

### Test in Copilot:

```
@rapidrms What was our revenue in January?
```

## Troubleshooting

**"Skill not working"**
- Check OpenAPI spec syntax: `npx swagger-cli validate openapi.yaml`
- Verify auth token is valid
- Check server logs for errors

**"Slow responses"**
- Add caching to common queries
- Consider async/background processing
- Use Copilot's timeout: 30s max

**"CORS errors"**
- Add CORS headers to your server:
```typescript
app.use(cors({
  origin: ['https://copilot.microsoft.com'],
  credentials: true
}));
```

## Advanced: Custom Auth

If you need custom OAuth:

```typescript
// In http-server.ts
import { oauth2Client } from './oauth.js';

app.get('/auth/callback', async (req, res) => {
  const code = req.query.code;
  const token = await oauth2Client.getToken(code);
  // Store token for user
  res.redirect('/success');
});
```

See `docs/AUTH.md` for full OAuth flow.
