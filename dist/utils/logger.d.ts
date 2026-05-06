/**
 * Simple logger utility
 */
interface Logger {
    debug(msg: string, data?: any): void;
    info(msg: string, data?: any): void;
    warn(msg: string, data?: any): void;
    error(msg: string, data?: any): void;
}
export declare function createLogger(module: string): Logger;
export {};
