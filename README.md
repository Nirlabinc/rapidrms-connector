# RapidRMS Connector

Connect RapidRMS to Claude, Copilot, and Gemini. Access your POS data, inventory, and business metrics through AI.

**Quick Start:** 60 seconds to get your first sales report via Claude.

## Features

✅ **40+ Enterprise Tools** covering:
- Sales & Revenue Analysis (8)
- Inventory Management (9)
- Operations & Alerts (8)
- Employee & Payroll (8)
- Promotions & Pricing (8)
- Advanced Inventory & PO (10)

✅ **Multi-Platform Support:**
- Claude Desktop (MCP)
- Copilot (OpenAPI/Skills)
- Gemini (Google Plugin)

✅ **Same Authentication** as RapidRMS production systems
- Bearer token auth with automatic refresh
- Client ID + email + password
- 9-minute token caching
- OAuth support for enterprise

✅ **Safe by default:**
- Read-only by default
- Write operations require explicit `RAPIDRMS_WRITE_ENABLED=true`
- All credentials stored locally in `.env`

## Installation

### For Claude Desktop

1. **Install package:**
   ```bash
   npm install @rapidrms/connector
   ```

2. **Get RapidRMS credentials:**
   - Log in to RapidRMS portal
   - Find your Client ID (Account Settings)
   - Use your portal email + password

3. **Add to Claude Desktop config:**
   Create/edit `~/.claude/config.json`:
   ```json
   {
     "mcpServers": {
       "rapidrms": {
         "command": "node",
         "args": ["<npm-prefix>/node_modules/@rapidrms/connector/dist/bin/mcp-server.js"],
         "env": {
           "RAPIDRMS_CLIENT_ID": "2",
           "RAPIDRMS_EMAIL": "your-email@example.com",
           "RAPIDRMS_PASSWORD": "your-password"
         }
       }
     }
   }
   ```

4. **Restart Claude Desktop**

5. **Ask Claude:**
   > What was our total revenue this month?

### For Copilot

See [SETUP-COPILOT.md](./docs/SETUP-COPILOT.md)

### For Gemini

See [SETUP-GEMINI.md](./docs/SETUP-GEMINI.md)

### Standalone (Docker)

```bash
docker-compose up
```

## Usage

Once connected, ask your AI assistant:

**Sales:**
- "Show me revenue for the last 30 days"
- "What were the top 10 products last month?"
- "Compare March vs April sales"
- "How did employees perform this week?"

**Inventory:**
- "Which items are below minimum stock?"
- "Create a purchase order for [vendor]"
- "What's the inventory turnover rate by category?"
- "Forecast stock needs for the next 2 weeks"

**Operations:**
- "Show me active alerts"
- "Analyze shrinkage for Q1"
- "Which items are slow-moving?"
- "Compare store locations by sales"

## Environment Variables

```bash
RAPIDRMS_CLIENT_ID      # Your RapidRMS client ID
RAPIDRMS_EMAIL          # Portal email
RAPIDRMS_PASSWORD       # Portal password
RAPIDRMS_API_BASE       # Default: https://rapidrmsapi.azurewebsites.net

RAPIDRMS_STORE_NAME     # Optional: store name (display only)
RAPIDRMS_ENVIRONMENT    # Optional: PRODUCTION | STAGING | QA

LOG_LEVEL               # Optional: debug | info | warn | error
```

## Architecture

```
┌─────────────┐
│  Claude     │
│  Copilot    │ ────┐
│  Gemini     │     │ MCP / OpenAPI
└─────────────┘     │
                    │
           ┌────────▼──────────┐
           │ rapidrms-connector│
           │                   │
           │ ┌────────────────┐│
           │ │  25+ Tools     ││ (Sales, Inventory, Ops)
           │ └────────┬───────┘│
           │          │        │
           │ ┌────────▼───────┐│
           │ │  RapidRMS API  ││ (Bearer token auth)
           │ └────────────────┘│
           └───────────────────┘
                    │
           ┌────────▼──────────┐
           │   RapidRMS.com    │
           │   Production DB   │
           └───────────────────┘
```

## Tools Reference (40+)

### Sales Tools (8)
- `rapidrms_get_sales_report` — Sales by date range
- `rapidrms_get_revenue_summary` — Revenue overview
- `rapidrms_get_top_products` — Best sellers
- `rapidrms_get_bottom_products` — Low performers
- `rapidrms_get_employee_performance` — Staff rankings
- `rapidrms_compare_periods` — Period-over-period comparison
- `rapidrms_get_category_sales` — Sales by department/vendor
- `rapidrms_get_daily_trends` — Daily trends

### Inventory Tools (9)
- `rapidrms_get_inventory_status` — Current stock levels
- `rapidrms_get_low_stock_alerts` — Below minimum
- `rapidrms_get_excess_inventory` — Overstocked items
- `rapidrms_forecast_stock_need` — Demand forecast
- `rapidrms_get_turnover_rate` — Inventory turns
- `rapidrms_create_purchase_order` — Create draft PO
- `rapidrms_get_supplier_performance` — Vendor analysis
- `rapidrms_get_stockout_history` — Stockout events
- `rapidrms_get_cost_of_goods` — COGS & inventory value

### Operations Tools (8)
- `rapidrms_get_active_alerts` — Current issues
- `rapidrms_get_shrinkage_analysis` — Loss analysis
- `rapidrms_get_dead_stock` — Slow movers
- `rapidrms_get_markdown_recommendations` — Discount advice
- `rapidrms_get_discrepancy_report` — Count vs system
- `rapidrms_get_reorder_recommendations` — Smart reorder
- `rapidrms_get_waste_report` — Damage/expiration tracking
- `rapidrms_get_location_performance` — Store comparison

### Employee & Payroll Tools (8)
- `rapidrms_get_employee_clockin_logs` — Clock in/out logs
- `rapidrms_get_shift_report` — Shift summary
- `rapidrms_get_z_report` — End-of-shift report
- `rapidrms_get_zz_report` — End-of-day settlement
- `rapidrms_get_credit_card_report` — Card transactions
- `rapidrms_search_transactions` — Advanced search
- `rapidrms_get_employee_report` — Performance metrics
- `rapidrms_get_attendance_report` — Absences, tardies

### Promotions & Pricing Tools (8)
- `rapidrms_get_promotion_report` — Promo ROI analysis
- `rapidrms_get_price_changes` — Price/cost history
- `rapidrms_get_cost_price_variance` — Margin impact
- `rapidrms_get_price_elasticity` — Price sensitivity
- `rapidrms_get_competitive_pricing` — Market comparison
- `rapidrms_get_promotion_roi` — ROI per promotion
- `rapidrms_get_pricing_rules` — Tier pricing rules
- `rapidrms_recommend_price_changes` — AI pricing recommendations

### Advanced Inventory & PO Tools (10)
- `rapidrms_get_inventory_detail` — Item-level detail
- `rapidrms_get_low_stock_items` — Items needing order
- `rapidrms_get_item_sold_report` — Sold by dept/vendor
- `rapidrms_generate_po_smart` — Smart PO (custom period + compare)
- `rapidrms_compare_period_sales` — Biweekly/monthly comparison
- `rapidrms_get_vendor_comparison` — Vendor pricing for items
- `rapidrms_get_po_history` — Past purchase orders
- `rapidrms_analyze_stock_movement` — Inbound/outbound/aging
- `rapidrms_forecast_po_needs` — PO forecast (biweekly, monthly, 3mo)
- `rapidrms_get_inventory_aging` — Old inventory analysis

See [API.md](./docs/API.md) for full reference with examples.

## Development

```bash
# Install deps
npm install

# Build
npm run build

# Dev (watch mode)
npm run dev

# Test MCP server
npm run mcp:dev

# Tests
npm run test

# Lint
npm run lint
```

## Security

- ✅ Credentials stored locally in `.env` (never sent to cloud)
- ✅ Bearer token generated per-session, cached 9 min
- ✅ Write operations require explicit env var
- ✅ No data logging by default
- ✅ Open source — audit the code

## Troubleshooting

**"Missing RapidRMS credentials"**
- Check `.env` file has all required vars
- Verify ClientID, email, password are correct

**"Auth HTTP 401"**
- Password expired? Reset in RapidRMS portal
- Wrong ClientID? Check Account Settings

**"Tool not found"**
- MCP server not running? Restart Claude Desktop
- Try clearing cache: `~/.claude` folder

**"Slow responses"**
- RapidRMS API can be slow for large date ranges
- Try narrowing: specific products or locations

See [TROUBLESHOOTING.md](./docs/TROUBLESHOOTING.md) for more.

## GitHub

Open issues & PRs at: https://github.com/rapidrms/connector

## License

MIT
