import fs from 'node:fs';

const template = fs.readFileSync('./memory-consumption/template.ts');

for (let i = 0; i < 200; i++) {
  const filename = `./memory-consumption/memory${i}.test.ts`;
  fs.writeFileSync(filename, template);
}
