// Fails the build if a TODO(jacob) placeholder would be published.
// Case studies marked `status: in-progress` are allowed to keep TODOs,
// because their body isn't rendered on the site.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });

const problems = [];
for (const file of walk('src')) {
  const text = readFileSync(file, 'utf8');
  if (!text.includes('TODO(jacob)')) continue;
  const frontmatter = text.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  if (/^status:\s*in-progress\s*$/m.test(frontmatter)) continue;
  text.split('\n').forEach((line, i) => {
    if (line.includes('TODO(jacob)')) problems.push(`${file}:${i + 1}: ${line.trim()}`);
  });
}

if (problems.length) {
  console.error('Unfinished placeholders in published content:\n' + problems.join('\n'));
  console.error('\nFill them in, or mark the case study `status: in-progress`.');
  process.exit(1);
}
console.log('No TODO(jacob) placeholders in published content.');
