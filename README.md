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

### Jest
From my POV, Jest has serious issues related to ESM.

After wasting ~2h, I give up with `mock` and `unstable_mockModule`.

References:
- https://stackoverflow.com/questions/49650323/jest-mock-module-multiple-times-with-different-values this approach won't work with ESM.
- Jest mock works only for CJS https://stackoverflow.com/questions/70999696/node-ts-jest-esm-jest-mock-doing-nothing
- https://jestjs.io/docs/ecmascript-modules jest doc about ESM 
- https://github.com/facebook/jest/issues/10025 jest issues related to mock, which actually, doesn't mock.
- https://github.com/facebook/jest/issues/9430 jest issues for supporting native ESM

**However, I found a way to mock implementation of ESM modules, through `spyOn` method.**

### Tap
It seems that tap doesn't work properly with TypeScript, and it requires [esmock](https://www.npmjs.com/package/esmock) to achieve mocking capabilities.
https://github.com/tapjs/node-tap/issues/807#issuecomment-1215999251

Error is
```shell
 Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: /test-frameworks/src/models/Driver.ts
```


