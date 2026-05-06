# RapidRMS Connector API Reference

Complete reference for all 40+ tools available.

## Table of Contents

1. [Sales Tools (8)](#sales-tools)
2. [Inventory Tools (9)](#inventory-tools)
3. [Operations Tools (8)](#operations-tools)
4. [Employee Tools (8)](#employee-tools)
5. [Promotion & Pricing Tools (8)](#promotion--pricing-tools)
6. [Advanced Inventory Tools (10)](#advanced-inventory-tools)

---

## Sales Tools

### `rapidrms_get_sales_report`

Get detailed sales report for a date range.

**Parameters:**
- `startDate` (required): Start date (YYYY-MM-DD)
- `endDate` (required): End date (YYYY-MM-DD)
- `locationId` (optional): Filter by location
- `employeeId` (optional): Filter by employee

**Example:**
```
"What were our sales from Jan 1 to Jan 31?"

→ rapidrms_get_sales_report({
    startDate: "2024-01-01",
    endDate: "2024-01-31"
  })

← {
    content: "Sales Report (2024-01-01 to 2024-01-31)
    Revenue: $45,230
    Transactions: 1,423
    Top product: Smirnoff Vodka ($8,450)"
  }
```

### `rapidrms_get_revenue_summary`

Get revenue overview for a period.

**Parameters:**
- `period` (required): `today`, `week`, `month`, or `year`
- `locationId` (optional): Location filter

**Example:**
```
"Show me this month's revenue summary"

→ rapidrms_get_revenue_summary({
    period: "month"
  })

← {
    content: "Revenue Summary (month)
    Total: $125,430
    Avg/day: $4,181
    By location:
      - Main Store: $95,200
      - Downtown: $30,230"
  }
```

### `rapidrms_get_top_products`

Get top selling products.

**Parameters:**
- `period` (required): `today`, `week`, `month`, `year`
- `metric` (required): `revenue`, `units`, or `transactions`
- `limit` (optional): Number to return (default: 10)
- `locationId` (optional): Location filter

**Example:**
```
"Top 5 products by revenue last month?"

→ rapidrms_get_top_products({
    period: "month",
    metric: "revenue",
    limit: 5
  })

← {
    content: "Top 5 products by revenue
    1. Smirnoff Vodka - $8,450 (234 units)
    2. Modelo Beer - $6,320 (412 units)
    3. Jack Daniel's - $5,890 (98 units)
    4. Corona Extra - $5,230 (341 units)
    5. Hennessy - $4,560 (64 units)"
  }
```

### `rapidrms_get_bottom_products`

Get low-performing products.

**Parameters:**
- `period` (required): `week`, `month`, `year`
- `metric` (required): `revenue` or `units`
- `limit` (optional): Default 10

### `rapidrms_get_employee_performance`

Get employee sales rankings.

**Parameters:**
- `period` (required): `today`, `week`, `month`, `year`
- `sortBy` (optional): `revenue`, `transactions`, `avgTicket` (default: `revenue`)
- `limit` (optional): Default 20

**Example:**
```
"Who were our top 3 employees this week?"

→ rapidrms_get_employee_performance({
    period: "week",
    limit: 3
  })

← {
    content: "Top Employees (week)
    1. John Smith - $12,340 (84 transactions, avg: $147)
    2. Maria Garcia - $11,230 (79 transactions, avg: $142)
    3. David Lee - $10,890 (76 transactions, avg: $143)"
  }
```

### `rapidrms_compare_periods`

Compare two periods.

**Parameters:**
- `period1Start`, `period1End`, `period2Start`, `period2End` (all required)
- `metric` (required): `revenue`, `transactions`, `avgTicket`

### `rapidrms_get_category_sales`

Sales by department/category.

### `rapidrms_get_daily_trends`

Daily sales trend over a period.

---

## Inventory Tools

### `rapidrms_get_inventory_status`

Get current stock levels.

**Parameters:**
- `category` (optional): Category filter
- `itemId` (optional): Specific item

### `rapidrms_get_low_stock_alerts`

Items below minimum stock.

**Parameters:**
- `categoryId` (optional)
- `urgency` (optional): `critical`, `warning`, `all` (default: `critical`)

### `rapidrms_get_excess_inventory`

Overstocked items.

**Parameters:**
- `threshold` (optional): Days of supply (default: 90)
- `locationId` (optional)

### `rapidrms_forecast_stock_need`

Forecast inventory needs.

**Parameters:**
- `lookbackDays` (optional): Default 30
- `forecastDays` (optional): Default 14
- `safetyStock` (optional): Default 7

### `rapidrms_get_turnover_rate`

Inventory turnover analysis.

**Parameters:**
- `period` (optional): `month`, `quarter`, `year`
- `groupBy` (optional): `item`, `category`, `location`

### `rapidrms_create_purchase_order`

Create draft PO.

**Parameters:**
- `vendorId` (required)
- `items` (required): Array of {itemId, quantity, unitPrice?}
- `notes` (optional)
- `autoSubmit` (optional): Auto-submit if threshold met

### `rapidrms_get_supplier_performance`

Vendor analysis.

### `rapidrms_get_stockout_history`

Past stockout events.

### `rapidrms_get_cost_of_goods`

COGS and inventory valuation.

---

## Operations Tools

### `rapidrms_get_active_alerts`

Current active alerts/issues.

**Parameters:**
- `alertType` (optional): `stock`, `shrinkage`, `deadstock`, `sales`, `quality`
- `severity` (optional): `critical`, `warning`, `info`

### `rapidrms_get_shrinkage_analysis`

Inventory loss analysis.

**Parameters:**
- `period` (optional): `week`, `month`, `quarter`, `year`
- `threshold` (optional): Min shrinkage % (default: 5%)
- `locationId` (optional)

### `rapidrms_get_dead_stock`

Slow-moving inventory.

**Parameters:**
- `daysNoSale` (optional): Default 90
- `minValue` (optional): Min inventory value
- `categoryId` (optional)

### `rapidrms_get_markdown_recommendations`

Discount recommendations.

### `rapidrms_get_discrepancy_report`

Inventory count vs system discrepancies.

### `rapidrms_get_reorder_recommendations`

AI-powered smart reorder suggestions.

### `rapidrms_get_waste_report`

Waste, expiration, damage tracking.

### `rapidrms_get_sales_velocity`

Units per day, turnover rate.

### `rapidrms_get_compliance_report`

Violations: expired items, recalls, storage.

### `rapidrms_get_location_performance`

Store comparison: sales, turnover, shrinkage.

---

## Employee Tools

### `rapidrms_get_employee_clockin_logs`

Clock in/out logs.

**Parameters:**
- `startDate` (required)
- `endDate` (required)
- `employeeId` (optional)
- `locationId` (optional)

### `rapidrms_get_shift_report`

Shift summary: hours, breaks, attendance.

**Parameters:**
- `startDate` (required)
- `endDate` (required)
- `employeeId` (optional)
- `groupBy` (optional): `employee`, `date`, `location`

### `rapidrms_get_z_report`

End-of-shift report.

**Parameters:**
- `reportDate` (required): Date (YYYY-MM-DD)
- `shiftNumber` (optional): 1, 2, or 3
- `locationId` (optional)

**What's included:**
- Cash count
- Card totals
- Voids
- Discounts
- Returns
- Tips

### `rapidrms_get_zz_report`

End-of-day settlement.

**Parameters:**
- `startDate` (required)
- `endDate` (required)
- `locationId` (optional)

### `rapidrms_get_credit_card_report`

Credit card transactions.

**Parameters:**
- `startDate` (required)
- `endDate` (required)
- `cardType` (optional): `visa`, `mastercard`, `amex`, `discover`
- `includeDeclined` (optional): Include failed transactions

### `rapidrms_search_transactions`

Advanced transaction search.

**Parameters:**
- `startDate` (required)
- `endDate` (required)
- `keyword` (optional): Search description
- `minAmount`, `maxAmount` (optional): Amount range
- `transactionType` (optional): `sale`, `void`, `refund`, `adjustment`, `discount`
- `employeeId` (optional)
- `paymentMethod` (optional): `cash`, `card`, `check`, `other`

### `rapidrms_get_employee_report`

Detailed employee performance.

**Parameters:**
- `period` (required): `week`, `biweekly`, `month`, `3months`, `year`
- `sortBy` (optional): `sales`, `hours`, `avgTicket`, `transactions`
- `includeTerminated` (optional): Include terminated employees

### `rapidrms_get_payroll_summary`

Payroll data: hours, overtime, deductions.

**Parameters:**
- `period` (required): `weekly`, `biweekly`, `monthly`
- `endDate` (required): End of pay period
- `employeeId` (optional)

### `rapidrms_get_attendance_report`

Absences, tardies, early leaves.

**Parameters:**
- `period` (required): `week`, `biweekly`, `month`, `3months`
- `employeeId` (optional)

---

## Promotion & Pricing Tools

### `rapidrms_get_promotion_report`

Promotion performance: ROI, units moved, impact.

**Parameters:**
- `period` (optional): `active`, `week`, `biweekly`, `month`, `3months`, `year`
- `promoId` (optional)
- `metric` (optional): `revenue`, `units`, `margin`, `roi`

### `rapidrms_get_price_changes`

Track what changed: price, cost, qty, when, by whom.

**Parameters:**
- `startDate` (required)
- `endDate` (required)
- `changeType` (optional): `price`, `cost`, `quantity`
- `itemId` (optional)
- `categoryId` (optional)

### `rapidrms_get_cost_price_variance`

Margin impact analysis.

### `rapidrms_get_price_elasticity`

Price sensitivity analysis.

### `rapidrms_get_competitive_pricing`

Compare your prices vs market.

### `rapidrms_get_promotion_roi`

Calculate ROI per promotion.

### `rapidrms_get_pricing_rules`

Active pricing rules and tier pricing.

### `rapidrms_recommend_price_changes`

AI pricing recommendations.

---

## Advanced Inventory Tools

### `rapidrms_get_inventory_detail`

Detailed item inventory: by location, cost, aging, value.

**Parameters:**
- `itemId` (required)
- `includeHistory` (optional)
- `historyMonths` (optional): Default 12

### `rapidrms_get_low_stock_items`

Items below min stock with recommended order.

**Parameters:**
- `categoryId` (optional)
- `urgencyLevel` (optional): `critical`, `high`, `medium`, `all`
- `includeRecommendedVendor` (optional)

### `rapidrms_get_item_sold_report`

Items sold report grouped by dept, vendor, etc.

**Parameters:**
- `period` (required): `week`, `biweekly`, `month`, `3months`, `year`
- `groupBy` (required): `department`, `vendor`, `category`, `item`
- `sortBy` (optional): `revenue`, `units`, `margin`
- `minRevenue` (optional)

### `rapidrms_generate_po_smart`

Smart PO generation analyzing custom sales period.

**Parameters:**
- `analysisStartDate` (required)
- `analysisEndDate` (required)
- `comparisonPeriod` (optional): `previous_period`, `year_ago`, `custom`
- `vendorId` (optional)
- `categoryId` (optional)
- `safetyStock` (optional): Days buffer, default 7
- `autoSubmit` (optional)

**Example:**
```
"Generate PO based on sales from Jan 1-31, 
comparing to Dec 1-31 last year, with 14 days safety stock"

→ rapidrms_generate_po_smart({
    analysisStartDate: "2024-01-01",
    analysisEndDate: "2024-01-31",
    comparisonPeriod: "year_ago",
    safetyStock: 14
  })

← {
    content: "Smart PO Generated
    Analysis period: Jan 1-31 (45,230 units sold)
    Comparison: Jan 1-31 previous year (38,200 units)
    Growth: +18.4%
    
    Recommended Orders:
    Smirnoff Vodka: 450 units (was 380, +18.4%)
    Modelo Beer: 650 units (was 550, +18.2%)
    Corona Extra: 520 units (was 441, +17.9%)
    
    Total PO value: $18,450
    Previous: $15,620
    Difference: +$2,830"
  }
```

### `rapidrms_compare_period_sales`

Compare sales between periods.

**Parameters:**
- `period1Start`, `period1End` (required)
- `period2Start`, `period2End` (required)
- `groupBy` (optional): `item`, `department`, `vendor`, `category`
- `showGrowth` (optional): Calculate growth %

### `rapidrms_get_vendor_comparison`

Compare vendors for same item.

**Parameters:**
- `itemId` (required)
- `includeHistorical` (optional): Historical pricing

### `rapidrms_get_po_history`

Past purchase orders.

**Parameters:**
- `period` (required): `month`, `quarter`, `year`, `all`
- `vendorId` (optional)
- `itemId` (optional)
- `statusFilter` (optional): `all`, `open`, `received`, `partial`

### `rapidrms_analyze_stock_movement`

Inbound/outbound/aging analysis.

**Parameters:**
- `itemId` (required)
- `period` (required): `month`, `quarter`, `year`
- `showAging` (optional)

### `rapidrms_forecast_po_needs`

Forecast PO needs for future periods.

**Parameters:**
- `forecastPeriod` (required): `biweekly`, `monthly`, `3months`
- `weeksAhead` (optional): Default 4
- `accountForSeasonal` (optional): Default true
- `vendorId` (optional)

### `rapidrms_get_inventory_aging`

Old inventory: not sold in N months.

**Parameters:**
- `daysOld` (optional): Default 90
- `includeHoldingCost` (optional): Calculate cost
- `minValue` (optional)

---

## Response Format

All tools return:

```json
{
  "content": "Human-readable summary or table",
  "is_error": false,
  "metadata": {
    "executionTime": "234ms",
    "dataPoints": 152,
    "period": "2024-01-01 to 2024-01-31"
  }
}
```

## Error Responses

```json
{
  "content": "Error: RAPIDRMS_API_TIMEOUT - Request took longer than 30 seconds",
  "is_error": true
}
```

Common errors:
- `AUTH_FAILED`: Invalid credentials
- `API_TIMEOUT`: RapidRMS API slow
- `MISSING_PARAMS`: Required parameter missing
- `INVALID_DATE`: Date format wrong (use YYYY-MM-DD)
- `NO_DATA`: No data for that period

---

## Rate Limits

- 100 requests/minute per API key
- 10 concurrent requests
- Response time: <30 seconds per request

---

## Best Practices

1. **Use specific date ranges** instead of large lookback periods
2. **Filter by category/location** when possible to speed up requests
3. **Cache results** if querying same period multiple times
4. **Use period shortcuts** (`week`, `month`, `year`) for better performance
5. **Combine reports** when possible (one smart query vs multiple)

---

See [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for common issues.
