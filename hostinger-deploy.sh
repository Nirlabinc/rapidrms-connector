#!/bin/bash
# RapidRMS Connector SaaS — Hostinger Deployment Script
# Run this on your Hostinger VPS via SSH

set -e

echo "🚀 RapidRMS Connector SaaS Deployment"
echo "===================================="

# Step 1: System setup
echo "Step 1/5: Installing Node.js & PM2..."
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - > /dev/null 2>&1
sudo apt-get install -y nodejs > /dev/null 2>&1
sudo npm install -g pm2 > /dev/null 2>&1
echo "✅ Node.js & PM2 installed"

# Step 2: Clone & build
echo ""
echo "Step 2/5: Cloning repository..."
cd /home/$(whoami)/apps 2>/dev/null || mkdir -p /home/$(whoami)/apps && cd /home/$(whoami)/apps
rm -rf rapidrms-connector 2>/dev/null || true
git clone https://github.com/Nirlabinc/rapidrms-connector.git > /dev/null 2>&1
cd rapidrms-connector
echo "✅ Repository cloned"

echo ""
echo "Step 3/5: Installing dependencies..."
npm install > /dev/null 2>&1
npm run build > /dev/null 2>&1
echo "✅ Dependencies installed & TypeScript compiled"

# Step 4: Environment setup
echo ""
echo "Step 4/5: Creating .env file..."
cat > .env << 'ENVFILE'
PORT=3000
NODE_ENV=production
SUPABASE_URL=https://ffokkgozkjffvtqnzfio.supabase.co
SUPABASE_SERVICE_KEY=PASTE_YOUR_SERVICE_KEY_HERE
ENCRYPTION_MASTER_KEY=2ec25af62035d76490f76b2ebd012eb0525bd1e2624ab83706e66c2fbf6c532f
LOG_LEVEL=info
ENVFILE

echo "⚠️  IMPORTANT: Edit .env and replace PASTE_YOUR_SERVICE_KEY_HERE"
echo "   nano .env"
echo ""

# Step 5: Start service
echo "Step 5/5: Starting API server with PM2..."
pm2 delete rapidrms-api 2>/dev/null || true
pm2 start npm --name "rapidrms-api" -- run api > /dev/null 2>&1
pm2 save > /dev/null 2>&1
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u $(whoami) --hp /home/$(whoami) > /dev/null 2>&1
echo "✅ API server started"

echo ""
echo "===================================="
echo "✅ DEPLOYMENT COMPLETE"
echo "===================================="
echo ""
echo "📝 NEXT STEPS:"
echo "1. Edit .env file:"
echo "   nano /home/$(whoami)/apps/rapidrms-connector/.env"
echo ""
echo "2. Replace 'PASTE_YOUR_SERVICE_KEY_HERE' with your Supabase Service Key"
echo ""
echo "3. Restart the service:"
echo "   pm2 restart rapidrms-api"
echo ""
echo "4. Verify it's running:"
echo "   curl http://localhost:3000/health"
echo ""
echo "5. Configure Nginx (see DEPLOYMENT-CHECKLIST.md)"
echo "   sudo apt-get install -y nginx certbot python3-certbot-nginx"
echo ""
echo "📍 Service location: /home/$(whoami)/apps/rapidrms-connector"
echo "📍 Logs: pm2 logs rapidrms-api"
echo ""
