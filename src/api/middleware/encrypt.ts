/**
 * AES-256-GCM encryption/decryption for credential storage
 */

import crypto from 'crypto';

const ALGORITHM = 'aes-256-gcm';
const AUTH_TAG_LENGTH = 16;
const IV_LENGTH = 16;

export interface EncryptedData {
  ciphertext: string;
  iv: string;
  authTag: string;
}

export function encrypt(plaintext: string, masterKey: string): EncryptedData {
  const keyBuffer = Buffer.from(masterKey, 'hex');
  if (keyBuffer.length !== 32) {
    throw new Error('Master key must be 32 bytes (64 hex chars)');
  }

  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, keyBuffer, iv);

  let ciphertext = cipher.update(plaintext, 'utf-8', 'hex');
  ciphertext += cipher.final('hex');

  const authTag = cipher.getAuthTag();

  return {
    ciphertext,
    iv: iv.toString('hex'),
    authTag: authTag.toString('hex'),
  };
}

export function decrypt(
  encrypted: EncryptedData,
  masterKey: string
): string {
  const keyBuffer = Buffer.from(masterKey, 'hex');
  if (keyBuffer.length !== 32) {
    throw new Error('Master key must be 32 bytes (64 hex chars)');
  }

  const iv = Buffer.from(encrypted.iv, 'hex');
  const authTag = Buffer.from(encrypted.authTag, 'hex');
  const ciphertext = Buffer.from(encrypted.ciphertext, 'hex');

  const decipher = crypto.createDecipheriv(ALGORITHM, keyBuffer, iv);
  decipher.setAuthTag(authTag);

  let plaintext = decipher.update(ciphertext.toString('hex'), 'hex', 'utf-8');
  plaintext += decipher.final('utf-8');

  return plaintext;
}

export function encryptToString(plaintext: string, masterKey: string): string {
  const encrypted = encrypt(plaintext, masterKey);
  return JSON.stringify(encrypted);
}

export function decryptFromString(
  encryptedString: string,
  masterKey: string
): string {
  const encrypted = JSON.parse(encryptedString) as EncryptedData;
  return decrypt(encrypted, masterKey);
}
