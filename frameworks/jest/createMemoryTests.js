import fs from 'node:fs';

const template = `
describe('memory consumption', () => {
  it('dummy test', async () => {
    expect(1).toStrictEqual(1);
  });
});
`;

// const template = fs.readFileSync('./memory-consumption/template.ts');

// eslint-disable-next-line
for (let i = 0; i < 200; i++) {
  const filename = `./memory-consumption/memory${i}.test.ts`;
  fs.writeFileSync(filename, template);
}
