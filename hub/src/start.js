#!/usr/bin/env node
console.log('[start] Loading server...');
try {
  await import('./index.js');
  console.log('[start] Server loaded successfully');
} catch (err) {
  console.error('[start] FATAL ERROR:', err);
  process.exit(1);
}
