/**
 * Employee Management & Payroll Tools
 */
export const employeeTools = [
    {
        name: 'rapidrms_get_employee_clockin_logs',
        description: 'Get clock in/out logs for employees by date range.',
        input_schema: {
            type: 'object',
            properties: {
                startDate: { type: 'string', description: 'Start date (YYYY-MM-DD)' },
                endDate: { type: 'string', description: 'End date (YYYY-MM-DD)' },
                employeeId: { type: 'string', description: 'Optional specific employee' },
                locationId: { type: 'string', description: 'Optional location filter' },
            },
            required: ['startDate', 'endDate'],
        },
    },
    {
        name: 'rapidrms_get_shift_report',
        description: 'Get shift summary: hours worked, breaks, attendance, by date or employee.',
        input_schema: {
            type: 'object',
            properties: {
                startDate: { type: 'string', description: 'Start date (YYYY-MM-DD)' },
                endDate: { type: 'string', description: 'End date (YYYY-MM-DD)' },
                employeeId: { type: 'string', description: 'Optional specific employee' },
                groupBy: {
                    type: 'string',
                    enum: ['employee', 'date', 'location'],
                    description: 'How to group results',
                },
            },
            required: ['startDate', 'endDate'],
        },
    },
    {
        name: 'rapidrms_get_z_report',
        description: 'Get Z Report (end of shift): cash, cards, voids, discounts, returns.',
        input_schema: {
            type: 'object',
            properties: {
                reportDate: { type: 'string', description: 'Date of Z report (YYYY-MM-DD)' },
                shiftNumber: { type: 'number', description: 'Optional specific shift (1-3)' },
                locationId: { type: 'string', description: 'Optional location filter' },
            },
            required: ['reportDate'],
        },
    },
    {
        name: 'rapidrms_get_zz_report',
        description: 'Get ZZ Report (end of day): full daily settlement with all payment methods.',
        input_schema: {
            type: 'object',
            properties: {
                startDate: { type: 'string', description: 'Start date (YYYY-MM-DD)' },
                endDate: { type: 'string', description: 'End date (YYYY-MM-DD)' },
                locationId: { type: 'string', description: 'Optional location filter' },
            },
            required: ['startDate', 'endDate'],
        },
    },
    {
        name: 'rapidrms_get_credit_card_report',
        description: 'Get credit card transactions: by card type, processor, amounts, fees.',
        input_schema: {
            type: 'object',
            properties: {
                startDate: { type: 'string', description: 'Start date (YYYY-MM-DD)' },
                endDate: { type: 'string', description: 'End date (YYYY-MM-DD)' },
                cardType: {
                    type: 'string',
                    enum: ['all', 'visa', 'mastercard', 'amex', 'discover'],
                    description: 'Card type filter',
                },
                includeDeclined: {
                    type: 'boolean',
                    description: 'Include declined transactions',
                    default: false,
                },
            },
            required: ['startDate', 'endDate'],
        },
    },
    {
        name: 'rapidrms_search_transactions',
        description: 'Advanced transaction search: by amount, employee, tender type, description, time range.',
        input_schema: {
            type: 'object',
            properties: {
                startDate: { type: 'string', description: 'Start date (YYYY-MM-DD)' },
                endDate: { type: 'string', description: 'End date (YYYY-MM-DD)' },
                keyword: { type: 'string', description: 'Search description/comment' },
                minAmount: { type: 'number', description: 'Minimum transaction amount' },
                maxAmount: { type: 'number', description: 'Maximum transaction amount' },
                transactionType: {
                    type: 'string',
                    enum: ['all', 'sale', 'void', 'refund', 'adjustment', 'discount'],
                },
                employeeId: { type: 'string', description: 'Filter by employee' },
                paymentMethod: {
                    type: 'string',
                    enum: ['all', 'cash', 'card', 'check', 'other'],
                },
            },
            required: ['startDate', 'endDate'],
        },
    },
    {
        name: 'rapidrms_get_employee_report',
        description: 'Detailed employee report: sales, hours, avg ticket, performance metrics.',
        input_schema: {
            type: 'object',
            properties: {
                period: {
                    type: 'string',
                    enum: ['week', 'biweekly', 'month', '3months', 'year'],
                    description: 'Reporting period',
                },
                sortBy: {
                    type: 'string',
                    enum: ['sales', 'hours', 'avgTicket', 'transactions'],
                    description: 'Sort by metric',
                },
                includeTerminated: {
                    type: 'boolean',
                    description: 'Include terminated employees',
                    default: false,
                },
            },
            required: ['period'],
        },
    },
    {
        name: 'rapidrms_get_payroll_summary',
        description: 'Payroll summary: hours, overtime, breaks deducted, gross pay estimate.',
        input_schema: {
            type: 'object',
            properties: {
                period: {
                    type: 'string',
                    enum: ['weekly', 'biweekly', 'monthly'],
                    description: 'Pay period',
                },
                endDate: { type: 'string', description: 'End of pay period (YYYY-MM-DD)' },
                employeeId: { type: 'string', description: 'Optional specific employee' },
            },
            required: ['period', 'endDate'],
        },
    },
    {
        name: 'rapidrms_get_attendance_report',
        description: 'Attendance tracking: absences, tardies, early leaves, no-shows.',
        input_schema: {
            type: 'object',
            properties: {
                period: {
                    type: 'string',
                    enum: ['week', 'biweekly', 'month', '3months'],
                    description: 'Period',
                },
                employeeId: { type: 'string', description: 'Optional specific employee' },
            },
            required: ['period'],
        },
    },
];
