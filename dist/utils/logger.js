/**
 * Simple logger utility
 */
const LOG_LEVEL = (process.env.LOG_LEVEL || 'info').toLowerCase();
const LEVELS = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
};
export function createLogger(module) {
    const shouldLog = (level) => LEVELS[level] >= LEVELS[LOG_LEVEL];
    return {
        debug: (msg, data) => {
            if (shouldLog('debug')) {
                console.log(`[DEBUG] [${module}] ${msg}`, data ? JSON.stringify(data) : '');
            }
        },
        info: (msg, data) => {
            if (shouldLog('info')) {
                console.log(`[INFO] [${module}] ${msg}`, data ? JSON.stringify(data) : '');
            }
        },
        warn: (msg, data) => {
            if (shouldLog('warn')) {
                console.warn(`[WARN] [${module}] ${msg}`, data ? JSON.stringify(data) : '');
            }
        },
        error: (msg, data) => {
            if (shouldLog('error')) {
                console.error(`[ERROR] [${module}] ${msg}`, data ? JSON.stringify(data) : '');
            }
        },
    };
}
