import { cp, readdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const built = new URL('../dist/', import.meta.url);
const output = new URL('../../', import.meta.url);
const assets = new URL('assets/', output);

// The assets directory contains only generated Vite bundles. Leave source,
// screenshots, documentation, and original asset records untouched.
try {
  for (const name of await readdir(assets)) {
    if (/^index-[\w-]+\.(css|js)$/.test(name)) await rm(new URL(name, assets));
  }
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}
await cp(built, output, { recursive: true });
console.log(`Static FIELDWORK page exported to ${fileURLToPath(output)}`);
