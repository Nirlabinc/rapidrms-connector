# Hostinger Deployment — Quick Start

**Status:** Ready to deploy. You have:
- ✅ Supabase URL: `https://ffokkgozkjffvtqnzfio.supabase.co`
- ✅ Supabase Service Key: (you have it)
- ✅ Encryption Master Key: `2ec25af62035d76490f76b2ebd012eb0525bd1e2624ab83706e66c2fbf6c532f`

---

## 1. SSH into Hostinger

```bash
ssh user@your-vps-ip
# Or: ssh user@your-domain.com
```

---

## 2. Download & Run Deployment Script

```bash
cd /tmp
curl -O https://raw.githubusercontent.com/Nirlabinc/rapidrms-connector/main/hostinger-deploy.sh
chmod +x hostinger-deploy.sh
./hostinger-deploy.sh
```

**What it does:**
- Installs Node.js 20 + PM2
- Clones the repository
- Installs dependencies & builds
- Creates `.env` file template
- Starts the API server

---

## 3. Edit Environment Variables

The script created `.env` with a placeholder for SERVICE_KEY:

```bash
nano /home/$(whoami)/apps/rapidrms-connector/.env
```

**Replace this line:**
```
SUPABASE_SERVICE_KEY=PASTE_YOUR_SERVICE_KEY_HERE
```

**With your actual Service Key** (keep everything else as-is):
```
SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Save: `Ctrl+O → Enter → Ctrl+X`

---

## 4. Restart API Server

```bash
pm2 restart rapidrms-api
```

---

## 5. Verify It's Running

```bash
curl http://localhost:3000/health
```

Expected output:
```json
{"status":"ok","timestamp":"2026-05-06T..."}
```

---

## 6. Configure Nginx (HTTPS)

Install Nginx:
```bash
sudo apt-get update
sudo apt-get install -y nginx certbot python3-certbot-nginx
```

Apply Nginx config:
```bash
sudo tee /etc/nginx/sites-available/rapidrms > /dev/null << 'EOF'
server {
  listen 80;
  server_name api.rapidrms.shre.ai;

  location / {
    proxy_pass http://localhost:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
EOF

sudo ln -s /etc/nginx/sites-available/rapidrms /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

Enable HTTPS:
```bash
sudo certbot --nginx -d api.rapidrms.shre.ai
```

**Update your domain DNS A record to point to your VPS IP.**

---

## 7. Test with HTTPS

```bash
curl https://api.rapidrms.shre.ai/health
```

Should return: `{"status":"ok","timestamp":"..."}`

---

## 8. Create Test User & Get API Key

Create a test user in Supabase (Settings → Auth Users → Add User manually, or use their Auth UI).

Then register RapidRMS credentials:

```bash
curl -X POST https://api.rapidrms.shre.ai/connect \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <supabase-jwt-token>" \
  -d '{
    "clientId": "2",
    "email": "partyliquor@hotmail.com",
    "password": "Admin$101",
    "storeName": "Party Liquor Test"
  }'
```

Response:
```json
{
  "success": true,
  "apiKey": "a1b2c3d4...",
  "keyPrefix": "a1b2c3d4"
}
```

**Save the apiKey.**

---

## 9. Test Tool Execution

```bash
curl -X POST https://api.rapidrms.shre.ai/api/tools/rapidrms_get_sales_report \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer a1b2c3d4..." \
  -d '{
    "startDate": "2026-05-01",
    "endDate": "2026-05-06"
  }'
```

Should return sales data from RapidRMS.

---

## 10. Monitor Logs

```bash
# Real-time logs
pm2 logs rapidrms-api

# Historical
pm2 logs rapidrms-api --lines 100

# Monitor process
pm2 monit
```

---

## Done! 🎉

Your RapidRMS Connector SaaS is now:
- ✅ Running on Hostinger
- ✅ Accessible via HTTPS
- ✅ Connected to your Supabase database
- ✅ Ready for users to register & use

**Users can now:**
1. Sign up
2. Register their RapidRMS credentials
3. Get an API key
4. Use in Claude: `Authorization: Bearer <api-key>`
5. Ask questions about their sales/inventory/employees/etc.

---

## Troubleshooting

### "Connection refused"
```bash
pm2 status
pm2 logs rapidrms-api
```

### "SUPABASE_SERVICE_KEY error"
- Edit `.env` again: `nano /home/$(whoami)/apps/rapidrms-connector/.env`
- Verify SERVICE_KEY is correct (no missing characters)
- Restart: `pm2 restart rapidrms-api`

### "Invalid Authorization header"
- Verify your Supabase JWT token is correct
- Check `api_keys` table in Supabase (row should exist)

### "RapidRMS API error"
- Verify RapidRMS credentials are correct in the test
- Check network connectivity: `curl https://rapidrmsapi.azurewebsites.net`

---

## Next: Create Signup Page (Optional)

See `SAAS-SETUP.md` for building a simple web UI for users to register their credentials.

---

**Questions?** See `DEPLOYMENT-CHECKLIST.md` or `SAAS-SETUP.md` (comprehensive guides).
