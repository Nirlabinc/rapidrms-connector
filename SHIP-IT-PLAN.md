# 🚀 SHIP-IT PLAN: 48-Hour Launch

## TODAY (4-6 hours)

### Hour 1: Setup
```bash
cd /tmp/rapidrms-connector
npm install
npm run build

# Verify it compiles
npm run mcp:dev
# Should print: "MCP server started successfully"
```

### Hour 2-3: Implement 3 Executors (Quick-Win)

**Pick these 3 first (they're easiest):**

**1. `rapidrms_get_sales_report`**
```typescript
// src/executors/index.ts - add to salesExecutors

rapidrms_get_sales_report: async (input: ToolInput) => {
  try {
    const client = getClient();
    const { data } = await client.getSales({
      FromDate: input.startDate,
      ToDate: input.endDate,
      LocationID: input.locationId,
      EmployeeID: input.employeeId,
    });

    // Calculate totals
    const totalRevenue = data.reduce((sum, row) => sum + (row.Amount || 0), 0);
    const totalTransactions = data.length;

    return {
      content: `📊 Sales Report (${input.startDate} to ${input.endDate})
Total Revenue: $${totalRevenue.toFixed(2)}
Transactions: ${totalTransactions}
Avg Ticket: $${(totalRevenue / totalTransactions).toFixed(2)}

Top 5 Transactions:
${data
  .sort((a, b) => (b.Amount || 0) - (a.Amount || 0))
  .slice(0, 5)
  .map((t, i) => `${i + 1}. ${t.EmployeeName}: $${t.Amount}`)
  .join('\n')}`,
    };
  } catch (error) {
    return { content: `Error: ${(error as Error).message}`, is_error: true };
  }
}
```

**2. `rapidrms_get_inventory_status`**
```typescript
rapidrms_get_inventory_status: async (input: ToolInput) => {
  try {
    const client = getClient();
    const { data } = await client.getInventory({
      Category: input.category,
      ItemID: input.itemId,
    });

    const totalItems = data.length;
    const totalValue = data.reduce((sum, item) => sum + ((item.CurrentStock || 0) * (item.Price || 0)), 0);

    return {
      content: `📦 Inventory Status
Total Items: ${totalItems}
Total Inventory Value: $${totalValue.toFixed(2)}

Top 10 by Stock Value:
${data
  .sort((a, b) => ((b.CurrentStock || 0) * (b.Price || 0)) - ((a.CurrentStock || 0) * (a.Price || 0)))
  .slice(0, 10)
  .map(item => `- ${item.ItemName}: ${item.CurrentStock} units @ $${item.Price}/unit = $${((item.CurrentStock || 0) * (item.Price || 0)).toFixed(2)}`)
  .join('\n')}`,
    };
  } catch (error) {
    return { content: `Error: ${(error as Error).message}`, is_error: true };
  }
}
```

**3. `rapidrms_get_revenue_summary`**
```typescript
rapidrms_get_revenue_summary: async (input: ToolInput) => {
  try {
    const client = getClient();
    
    // Calculate dates based on period
    const periods: Record<string, { start: string; end: string }> = {
      today: {
        start: new Date().toISOString().split('T')[0],
        end: new Date().toISOString().split('T')[0],
      },
      week: {
        start: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        end: new Date().toISOString().split('T')[0],
      },
      month: {
        start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        end: new Date().toISOString().split('T')[0],
      },
      year: {
        start: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        end: new Date().toISOString().split('T')[0],
      },
    };

    const period = periods[input.period as keyof typeof periods] || periods.month;
    const { data } = await client.getSales({
      FromDate: period.start,
      ToDate: period.end,
      LocationID: input.locationId,
    });

    const totalRevenue = data.reduce((sum, row) => sum + (row.Amount || 0), 0);
    const numDays = Math.ceil((new Date(period.end).getTime() - new Date(period.start).getTime()) / (1000 * 60 * 60 * 24)) + 1;
    const avgPerDay = totalRevenue / numDays;

    return {
      content: `💰 Revenue Summary (${input.period})
Period: ${period.start} to ${period.end}
Total Revenue: $${totalRevenue.toFixed(2)}
Days: ${numDays}
Avg/Day: $${avgPerDay.toFixed(2)}
Transactions: ${data.length}
Avg Ticket: $${(totalRevenue / data.length).toFixed(2)}`,
    };
  } catch (error) {
    return { content: `Error: ${(error as Error).message}`, is_error: true };
  }
}
```

### Hour 4: Test in Claude Desktop

**Create/edit `~/.claude/config.json`:**
```json
{
  "mcpServers": {
    "rapidrms": {
      "command": "node",
      "args": ["/tmp/rapidrms-connector/dist/bin/mcp-server.js"],
      "env": {
        "RAPIDRMS_CLIENT_ID": "2",
        "RAPIDRMS_EMAIL": "partyliquor@hotmail.com",
        "RAPIDRMS_PASSWORD": "Admin$101",
        "LOG_LEVEL": "info"
      }
    }
  }
}
```

**Restart Claude Desktop**

**Test:**
```
Q: "What were our sales last month?"
Q: "Show me current inventory status"
Q: "Revenue summary for this week?"
```

---

## TOMORROW (2 hours)

### Hour 1: Add 3 More Executors

**4. `rapidrms_get_low_stock_items`**
```typescript
rapidrms_get_low_stock_items: async (input: ToolInput) => {
  try {
    const client = getClient();
    const { data } = await client.getInventory();

    const lowStock = data.filter(item => 
      (item.CurrentStock || 0) <= (item.MinStock || 5)
    );

    return {
      content: `⚠️ Low Stock Items (${lowStock.length} items)

Critical:
${lowStock
  .filter(item => (item.CurrentStock || 0) === 0)
  .slice(0, 10)
  .map(item => `- ${item.ItemName}: ${item.CurrentStock} (min: ${item.MinStock})`)
  .join('\n')}

Below Minimum:
${lowStock
  .filter(item => (item.CurrentStock || 0) > 0)
  .slice(0, 10)
  .map(item => `- ${item.ItemName}: ${item.CurrentStock} (min: ${item.MinStock})`)
  .join('\n')}`,
    };
  } catch (error) {
    return { content: `Error: ${(error as Error).message}`, is_error: true };
  }
}
```

**5. `rapidrms_get_employee_performance`**
```typescript
rapidrms_get_employee_performance: async (input: ToolInput) => {
  try {
    const client = getClient();
    
    const periods: Record<string, { start: string; end: string }> = {
      today: {
        start: new Date().toISOString().split('T')[0],
        end: new Date().toISOString().split('T')[0],
      },
      week: {
        start: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        end: new Date().toISOString().split('T')[0],
      },
      month: {
        start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        end: new Date().toISOString().split('T')[0],
      },
      year: {
        start: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        end: new Date().toISOString().split('T')[0],
      },
    };

    const period = periods[input.period as keyof typeof periods] || periods.month;
    const { data } = await client.getSales({
      FromDate: period.start,
      ToDate: period.end,
    });

    // Group by employee
    const byEmployee: Record<string, { revenue: number; transactions: number }> = {};
    data.forEach(row => {
      if (!byEmployee[row.EmployeeName]) {
        byEmployee[row.EmployeeName] = { revenue: 0, transactions: 0 };
      }
      byEmployee[row.EmployeeName].revenue += row.Amount || 0;
      byEmployee[row.EmployeeName].transactions += 1;
    });

    // Sort by revenue
    const sorted = Object.entries(byEmployee)
      .map(([name, stats]) => ({
        name,
        revenue: stats.revenue,
        transactions: stats.transactions,
        avgTicket: stats.revenue / stats.transactions,
      }))
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, (input.limit || 20));

    return {
      content: `👥 Employee Performance (${input.period})

${sorted
  .map((emp, i) => 
    `${i + 1}. ${emp.name}
   Revenue: $${emp.revenue.toFixed(2)}
   Transactions: ${emp.transactions}
   Avg Ticket: $${emp.avgTicket.toFixed(2)}`
  )
  .join('\n\n')}`,
    };
  } catch (error) {
    return { content: `Error: ${(error as Error).message}`, is_error: true };
  }
}
```

**6. `rapidrms_get_department_margins`** (Analytics)
```typescript
rapidrms_get_department_margins: async (input: ToolInput) => {
  try {
    const client = getClient();
    
    // Get departments
    const { data: depts } = await client.get('/api/Department');
    
    // Get sales by department (simplified)
    const { data: sales } = await client.getSales({
      FromDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      ToDate: new Date().toISOString().split('T')[0],
    });

    return {
      content: `📊 Department Margins
Total Departments: ${depts.length}
Departments with Sales: ${new Set(sales.map(s => s.DepartmentID)).size}

Top Departments by Revenue:
${depts.slice(0, 10)
  .map(dept => {
    const deptSales = sales.filter(s => s.DepartmentID === dept.DepartmentID);
    const revenue = deptSales.reduce((sum, s) => sum + (s.Amount || 0), 0);
    return `- ${dept.DepartmentName}: $${revenue.toFixed(2)} (${deptSales.length} transactions)`;
  })
  .join('\n')}

Note: Full margin calculation requires cost data. Contact support for advanced analytics.`,
    };
  } catch (error) {
    return { content: `Error: ${(error as Error).message}`, is_error: true };
  }
}
```

### Hour 2: Test All 6

```
npm run build
# Restart Claude Desktop
# Test all 6 tools
```

---

## DAY 3 (1 hour)

### CREATE GITHUB REPO

```bash
cd /tmp/rapidrms-connector

# Initialize git
git init
git add .
git commit -m "Initial: RapidRMS Connector with 6 core tools (MVP)"

# Create repo on GitHub
# Then:
git remote add origin https://github.com/YOUR-ORG/rapidrms-connector.git
git push -u origin main

# Tag for npm publishing
git tag v0.1.0
git push origin v0.1.0
```

### PUBLISH TO NPM

```bash
# Make sure you're logged in
npm login

# Update version in package.json to 0.1.0
npm version patch

# Publish
npm publish

# GitHub Actions auto-publishes on tag!
```

---

## 🎯 VERIFICATION CHECKLIST

- [ ] `npm run build` succeeds (no TypeScript errors)
- [ ] `npm run mcp:dev` starts MCP server
- [ ] Claude Desktop config updated
- [ ] Claude Desktop restarts successfully
- [ ] Test in Claude: "Sales report for this month"
- [ ] Test in Claude: "Show inventory status"
- [ ] Test in Claude: "Low stock items"
- [ ] Test in Claude: "Top employees"
- [ ] All 6 tools return data (not errors)
- [ ] GitHub repo created
- [ ] npm package published
- [ ] `npm search rapidrms` shows your package

---

## 🎉 SHIP CONFIRMATION

When you can run:
```bash
npm install @rapidrms/connector
```

And users can immediately do:
```
# In Claude Desktop
"What were our sales last month?"
"Show me low stock items"
"Which employees performed best?"
```

**YOU'RE SHIPPED.** 🚀

---

## 📈 NEXT: PHASE 1 COMPLETE (Following Week)

Once MVP ships:
1. Gather user feedback
2. Add remaining 55 tools (Phase 1)
3. Publish v0.2.0
4. Plan Phase 2 (write operations)

---

## ⏰ TIMELINE

| Time | What | Status |
|------|------|--------|
| TODAY | Implement 3 tools | ▶️ START HERE |
| TODAY | Test in Claude | ▶️ |
| TOMORROW | Implement 3 more | ▶️ |
| TOMORROW | Test all 6 | ✅ |
| DAY 3 | GitHub + npm | ✅ |
| **SHIPPED** | Users can use | 🎉 |

---

## 💪 YOU GOT THIS

6 tools, 2 days, ship it. Then iterate based on user love.

Let's go! 🚀
