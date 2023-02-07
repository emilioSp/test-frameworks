import fs from 'node:fs';

const template = fs.readFileSync('./tests/template.ts');

for (let i = 0; i < 200; i++) {
  const filename = `./tests/${i}.test.ts`;
  fs.writeFileSync(filename, template);
}
