# test-frameworks

Node.js test frameworks comparison.

## Fighters
- Jest aka "the champion"
- Tap aka "the underdogs"
- Vitest aka "the challenger"

## Rules
- TypeScript is mandatory
- ESM is mandatory in order to test future-proof capabilities
- Test a simple (and dumb) app that assigns a driver to the right car 🏎 ...based on his contract 💵️

## Caveats
- Why imports have file extensions? 👉https://nodejs.org/api/esm.html#mandatory-file-extensions

## TODO
- [x] Add async tests
- [ ] Explore mocking
- [ ] Memory consumption test
- [ ] Performance test

## Notes
It seems that tap doesn't work properly with TypeScript, and it requires [esmock](https://www.npmjs.com/package/esmock) to achieve mocking capabilities.
https://github.com/tapjs/node-tap/issues/807#issuecomment-1215999251

Error is
```shell
 Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: /test-frameworks/src/models/Driver.ts
```
