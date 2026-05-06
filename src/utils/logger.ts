/**
 * Simple logger utility
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface Logger {
  debug(msg: string, data?: any): void;
  info(msg: string, data?: any): void;
  warn(msg: string, data?: any): void;
  error(msg: string, data?: any): void;
}

const LOG_LEVEL = (process.env.LOG_LEVEL || 'info').toLowerCase() as LogLevel;
const LEVELS: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

export function createLogger(module: string): Logger {
  const shouldLog = (level: LogLevel) => LEVELS[level] >= LEVELS[LOG_LEVEL];

  return {
    debug: (msg: string, data?: any) => {
      if (shouldLog('debug')) {
        console.log(`[DEBUG] [${module}] ${msg}`, data ? JSON.stringify(data) : '');
      }
    },
    info: (msg: string, data?: any) => {
      if (shouldLog('info')) {
        console.log(`[INFO] [${module}] ${msg}`, data ? JSON.stringify(data) : '');
      }
    },
    warn: (msg: string, data?: any) => {
      if (shouldLog('warn')) {
        console.warn(`[WARN] [${module}] ${msg}`, data ? JSON.stringify(data) : '');
      }
    },
    error: (msg: string, data?: any) => {
      if (shouldLog('error')) {
        console.error(`[ERROR] [${module}] ${msg}`, data ? JSON.stringify(data) : '');
      }
    },
  };
}
