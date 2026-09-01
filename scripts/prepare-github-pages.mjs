import { rename, rm } from 'node:fs/promises';
import { resolve } from 'node:path';

const outputDirectory = resolve('dist/client');
const nestedAssetsDirectory = resolve(outputDirectory, 'GhTechStudio/_next');
const publishedAssetsDirectory = resolve(outputDirectory, '_next');

await rm(publishedAssetsDirectory, { force: true, recursive: true });
await rename(nestedAssetsDirectory, publishedAssetsDirectory);
await rm(resolve(outputDirectory, 'GhTechStudio'), { force: true, recursive: true });
