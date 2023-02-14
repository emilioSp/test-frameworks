import fs from 'node:fs';

const jestBasePath = './frameworks/jest';
const tapBasePath = './frameworks/node-test-runner';
const vitestBasePath = './frameworks/vitest';

const COUNT = process.argv[2] ?? 200;

const createTests = (basePath) => {
  const testTemplate = fs.readFileSync(`${basePath}/tests/template.ts`);
  for (let i = 0; i < COUNT; i++) {
    const filename = `${basePath}/tests/${i}.test.ts`;
    fs.writeFileSync(filename, testTemplate);
  }
};

createTests(jestBasePath);
createTests(tapBasePath);
createTests(vitestBasePath);
