# RapidRMS Connector - Complete Tool Catalog (100+ Tools)

## Overview

**Total Tools: 100+**
**Categories: 10**
**Phases: 4**
**Estimated Launch: 2-3 days (MVP) → 6-8 weeks (Full)**

---

## PHASE 1: READ-ONLY ANALYTICS (61 TOOLS) ✅

### 1. Sales Tools (8)
- `rapidrms_get_sales_report` — Sales by date range
- `rapidrms_get_revenue_summary` — Revenue overview
- `rapidrms_get_top_products` — Best sellers
- `rapidrms_get_bottom_products` — Low performers
- `rapidrms_get_employee_performance` — Staff rankings
- `rapidrms_compare_periods` — Period comparison
- `rapidrms_get_category_sales` — By dept/subdept
- `rapidrms_get_daily_trends` — Daily trends

**User Asks:**
> "What were our sales last month?"
> "Which products are top sellers?"
> "How did each employee perform?"

---

### 2. Inventory Tools (9)
- `rapidrms_get_inventory_status` — Stock levels
- `rapidrms_get_low_stock_alerts` — Below minimum
- `rapidrms_get_excess_inventory` — Overstocked
- `rapidrms_forecast_stock_need` — Demand forecast
- `rapidrms_get_turnover_rate` — Inventory turns
- `rapidrms_create_purchase_order` — Draft PO
- `rapidrms_get_supplier_performance` — Vendor analysis
- `rapidrms_get_stockout_history` — Past events
- `rapidrms_get_cost_of_goods` — COGS analysis

**User Asks:**
> "What's our current stock status?"
> "Which items are low?"
> "Create a PO for low stock items"

---

### 3. Operations Tools (8)
- `rapidrms_get_active_alerts` — Current issues
- `rapidrms_get_shrinkage_analysis` — Loss analysis
- `rapidrms_get_dead_stock` — Slow movers
- `rapidrms_get_markdown_recommendations` — Discounts
- `rapidrms_get_discrepancy_report` — Count vs system
- `rapidrms_get_reorder_recommendations` — Smart reorder
- `rapidrms_get_waste_report` — Damage/expiration
- `rapidrms_get_location_performance` — Store comparison

**User Asks:**
> "What are my active alerts?"
> "Show me slow-moving items"
> "What's our shrinkage?"

---

### 4. Employee & Payroll Tools (8)
- `rapidrms_get_employee_clockin_logs` — Clock in/out
- `rapidrms_get_shift_report` — Shift summary
- `rapidrms_get_z_report` — End-of-shift
- `rapidrms_get_zz_report` — End-of-day
- `rapidrms_get_credit_card_report` — Card transactions
- `rapidrms_search_transactions` — Advanced search
- `rapidrms_get_employee_report` — Performance
- `rapidrms_get_attendance_report` — Absences/tardies

**User Asks:**
> "What were today's sales by shift?"
> "Show me Z reports for the week"
> "Employee attendance this month?"

---

### 5. Promotions & Pricing Tools (8)
- `rapidrms_get_promotion_report` — Promo ROI
- `rapidrms_get_price_changes` — Price history
- `rapidrms_get_cost_price_variance` — Margin impact
- `rapidrms_get_price_elasticity` — Price sensitivity
- `rapidrms_get_competitive_pricing` — Market comparison
- `rapidrms_get_promotion_roi` — ROI per promo
- `rapidrms_get_pricing_rules` — Tier pricing
- `rapidrms_recommend_price_changes` — AI recommendations

**User Asks:**
> "Which promotions are profitable?"
> "What are recent price changes?"
> "Should we adjust prices?"

---

### 6. Advanced Inventory & PO Tools (10)
- `rapidrms_get_inventory_detail` — Item detail
- `rapidrms_get_low_stock_items` — Items needing order
- `rapidrms_get_item_sold_report` — Sold by dept/vendor
- `rapidrms_generate_po_smart` — Smart PO (custom date range)
- `rapidrms_compare_period_sales` — Biweekly/monthly compare
- `rapidrms_get_vendor_comparison` — Vendor pricing
- `rapidrms_get_po_history` — Past orders
- `rapidrms_analyze_stock_movement` — Movement analysis
- `rapidrms_forecast_po_needs` — Future needs
- `rapidrms_get_inventory_aging` — Old inventory

**User Asks:**
> "Generate PO for Jan sales vs Dec"
> "Which vendors are best for Vodka?"
> "Compare Jan vs Feb sales"

---

### 7. Transaction & Tender Tools (10) ⭐ NEW
- `rapidrms_get_tender_sales` — By payment type
- `rapidrms_get_cash_drops` — Drop history
- `rapidrms_get_no_sale_transactions` — Drawer opens
- `rapidrms_get_line_item_voids` — Voided items
- `rapidrms_get_cancelled_transactions` — Cancellations
- `rapidrms_get_manual_discounts` — Manual discounts
- `rapidrms_get_hourly_sales_report` — Hourly breakdown
- `rapidrms_get_sales_by_department` — Dept breakdown
- `rapidrms_get_customer_loyalty_report` — Loyalty analytics
- `rapidrms_search_loyalty_points` — Points search

**User Asks:**
> "What's our cash vs card ratio?"
> "Hourly sales report for the week?"
> "Customer loyalty stats?"

---

## PHASE 2: WRITE OPERATIONS (9 TOOLS) 🔧

### Item Management
- `rapidrms_update_item_price` — Price by UPC/unit type (single/case/pack)
- `rapidrms_update_item_cost` — Cost update
- `rapidrms_update_item_quantity` — Qty adjustment
- `rapidrms_update_item_margin` — Set margin target
- `rapidrms_update_item_details` — Name, category, supplier
- `rapidrms_create_item_with_pack_structure` — New item with single/case/pack
- `rapidrms_apply_bulk_price_change` — Bulk changes by category/vendor
- `rapidrms_set_minimum_stock_level` — Min threshold
- `rapidrms_create_promotion` — New promotion
- `rapidrms_deactivate_item` — Soft delete

**User Asks:**
> "Change price to $2.99 for UPC 123456789"
> "Create new item: Smirnoff, single $19.99, case 12x@$230"
> "Apply 10% markdown to all spirits"
> "Set minimum stock to 20 for slow items"

---

## PHASE 3: ADVANCED ANALYTICS (12 TOOLS) 🧠

### Business Intelligence
- `rapidrms_get_department_margins` — Margin by dept
- `rapidrms_get_high_margin_items` — High margin + high sales
- `rapidrms_get_cold_items` — Slow movers
- `rapidrms_get_new_items_this_period` — New this week/month
- `rapidrms_get_below_minimum_stock` — Critical alerts
- `rapidrms_get_excess_stock_not_moving` — Excess + slow sales
- `rapidrms_analyze_bestsellers_vs_margin` — Sweet spot items
- `rapidrms_get_inventory_turnover_analysis` — Turnover ROI
- `rapidrms_get_seasonal_trends` — Seasonal patterns
- `rapidrms_get_product_mix_analysis` — Sales composition
- `rapidrms_get_supplier_performance_detailed` — Vendor deep-dive
- `rapidrms_get_waste_loss_analysis` — Waste impact

**User Asks:**
> "Which items have high sales AND high margin?"
> "Which items are cold?"
> "New items added this week - should I promote?"
> "Forecast next month's sales"

---

## PHASE 4: MARKETING & INTEGRATIONS (10 TOOLS) 📱

### External Platforms
- `rapidrms_create_social_media_campaign` — Facebook/Instagram ads
- `rapidrms_generate_ad_copy` — AI ad copy
- `rapidrms_get_campaign_performance` — Ad metrics
- `rapidrms_sync_inventory_to_ecommerce` — Shopify/WooCommerce/Amazon sync
- `rapidrms_push_promotion_to_loyalty_app` — Loyalty app
- `rapidrms_generate_email_campaign` — Email marketing
- `rapidrms_optimize_google_shopping_feed` — Google Shopping
- `rapidrms_create_google_ads_campaign` — Google Ads
- `rapidrms_analyze_competitor_pricing` — Competitor monitor
- `rapidrms_export_for_marketplace` — Amazon/eBay/Etsy
- `rapidrms_get_customer_insights_report` — Customer analytics

**User Asks:**
> "Create Instagram ad for new items, $50/day"
> "Sync inventory to Shopify"
> "Generate email campaign for high-value customers"
> "What's my competitor charging for Vodka?"

---

## 🚀 LAUNCH STRATEGY

### QUICK-WIN: 2-3 Days (6 Tools)
1. `rapidrms_get_sales_report`
2. `rapidrms_get_revenue_summary`
3. `rapidrms_get_inventory_status`
4. `rapidrms_get_low_stock_items`
5. `rapidrms_get_employee_performance`
6. `rapidrms_get_department_margins`

**Enables:** Sales, inventory, margin analysis

### PHASE 1: 1-2 Weeks (61 Tools)
All read-only analytics. Comprehensive reporting.

### PHASE 2: 1 Week (9 Tools)
Write operations. Price/qty changes, promotions.

### PHASE 3: 1-2 Weeks (12 Tools)
Predictive analytics. AI recommendations.

### PHASE 4: 2 Weeks (10 Tools)
Marketing integrations. Multi-channel.

**TOTAL: 6-8 Weeks for 100% Feature Complete**

---

## 📊 Statistics

| Metric | Count |
|--------|-------|
| Total Tools | 100+ |
| Read-Only Tools | 61 |
| Write Tools | 9 |
| Analytics Tools | 12 |
| Integration Tools | 10+ |
| Categories | 10 |
| Phases | 4 |
| Estimated Implementation | 35-40 hours |
| Estimated Maintenance (Year 1) | 14 hrs/month |

---

## 🎯 Implementation Order

1. **Today:** Review this catalog
2. **Day 1-2:** Implement 6 quick-win tools
3. **Day 3:** Test, publish, announce
4. **Week 2:** Add Phase 1 remaining tools
5. **Week 3-4:** Phase 2 write operations
6. **Week 5-6:** Phase 3 analytics
7. **Week 7-8:** Phase 4 integrations

---

## ✨ Unique Features

✅ **Smart PO Generation** — Analyzes custom date range, compares to previous purchases, suggests quantities  
✅ **Multi-Level Pricing** — Single/case/pack support  
✅ **Period Comparisons** — Biweekly, monthly, 3-month, year-over-year  
✅ **Write Operations** — Change prices, qty, costs in real-time  
✅ **AI Insights** — Recommendations, predictions, churn analysis  
✅ **Multi-Channel** — Facebook, Instagram, Google, Shopify, etc.  

---

## 🔐 Security

✅ Write operations require `RAPIDRMS_WRITE_ENABLED=true`  
✅ Confirmation workflow (user approves before change)  
✅ Audit logging (all changes tracked)  
✅ OAuth for external services  
✅ No credential storage  

---

**See ROADMAP-AND-RECOMMENDATIONS.md for detailed phase planning and timeline.**
