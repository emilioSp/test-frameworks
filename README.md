# test-frameworks

Node.js test frameworks comparison. 🧪

## Fighters
- `jest` aka "the champion" 🏆
- `tap` aka "the underdogs" 🏋️
- `vitest` aka "the challenger" 🏎️

## Rules
- `TypeScript` is mandatory
- `ESM` is mandatory in order to test future-proof capabilities
- Every test file should contain 2 tests, a happy path and an error case
- Every test file should use mocking feature, because mocking is a core feature for a testing framework.

## How
- Test a simple (and dumb) app that assigns a driver to the right car 🏎 ...based on his contract 💵️
- Every test mocks 2 modules `driversConnector` and `carsConnector`. Let's image that in production those data are stored in external services (DB, api or what else).

## Usage
First, you need to create tests

```shell
yarn build <number-of-tests> [default: 200]
```

Then you can run tests and see results
```shell
yarn jest
```
```shell
yarn tap
```
```shell
yarn vitest
```

## Caveats
- Why imports have file extensions? 👉https://nodejs.org/api/esm.html#mandatory-file-extensions

## TODO
- [x] Add async tests
- [x] Explore mocking
- [x] Memory consumption test
- [x] Performance test

## Notes

### Jest
From my POV, Jest has serious issues related to ESM.

After wasting ~2h, I give up with `mock` and `unstable_mockModule`.

**However, I found a way to mock implementation of ESM modules, through `spyOn` method.**

References:
- https://stackoverflow.com/questions/49650323/jest-mock-module-multiple-times-with-different-values this approach won't work with ESM.
- Jest mock works only for CJS https://stackoverflow.com/questions/70999696/node-ts-jest-esm-jest-mock-doing-nothing
- https://jestjs.io/docs/ecmascript-modules jest doc about ESM 
- https://github.com/facebook/jest/issues/10025 jest issues related to mock, which actually, doesn't mock.
- https://github.com/facebook/jest/issues/9430 jest issues for supporting native ESM

### Tap
Tap requires an extra dependency if you want to mock esm modules with `TypeScript` 🚨 (no issues with vanilla `JavaScript`)

It seems that tap doesn't work properly with `TypeScript`, and it requires [esmock](https://www.npmjs.com/package/esmock) to achieve mocking capabilities.
https://github.com/tapjs/node-tap/issues/807#issuecomment-1215999251

Error is
```shell
 Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: /test-frameworks/src/models/Driver.ts
```

`tap` doesn't have memory issue, but it is very slow, I suppose, due to `ts-node/esm` 😔

That brings me to the idea that it is not yet suitable for `TypeScript` project,
but it remains my best choice for tiny `JavaScript` projects where you don't want to deal with external dependencies. ⭐️

### Vitest
Native support for ESM and Typescript (no additional dependency or config) ⭐️

Blazing fast (for real) ⭐️
