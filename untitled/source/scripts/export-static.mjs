import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const output = new URL('../../', import.meta.url);
const built = new URL('../dist/', import.meta.url);
const assets = new URL('assets/', output);
await mkdir(assets, { recursive: true });

const generated = await readdir(new URL('assets/', built));
for (const name of generated) {
  await cp(new URL(`assets/${name}`, built), new URL(name, assets));
}
for (const name of await readdir(assets)) {
  if (/^index-[\w-]+\.(css|js)$/.test(name) && !generated.includes(name)) {
    await rm(new URL(name, assets));
  }
}
for (const name of ['index.html', 'favicon.svg', 'art/']) {
  await cp(new URL(name, built), new URL(name, output), { recursive: true });
}
console.log(`Static page exported to ${fileURLToPath(output)}`);
