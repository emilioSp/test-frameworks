# test-frameworks

Node.js test frameworks comparison. 🧪

TL;DR: Go with `vitest` and you won't be wrong

<a href="https://www.buymeacoffee.com/emiliosp" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## Fighters
- `jest` aka "the champion" 🏆
- `node-test-runner` aka "the underdog" 🏋️
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
yarn node-test-runner
```
```shell
yarn vitest
```

## Caveats
- Why imports have file extensions? 👉https://nodejs.org/api/esm.html#mandatory-file-extensions

## Resource consumption test

**Memory consumption** (max heap size recorded during execution)

Usage of threads not allowed (`--runInBand`, `--threads=false`)

|                  | 1 test | 50 tests | 100 tests | 200 tests |
|------------------|-------:|---------:|----------:|----------:|
| Jest             | 183 MB |   556 MB |    838 MB |   1490 MB |
| Node test runner | 142 MB |   142 MB |    142 MB |    142 MB |
| Vitest           |  25 MB |    37 MB |     43 MB |     55 MB |

Usage of threads allowed

|                  | 1 test | 50 tests | 100 tests | 200 tests |
|------------------|-------:|---------:|----------:|----------:|
| Jest             | 177 MB |   220 MB |    264 MB |    321 MB |
| Node test runner |  N / A |    N / A |     N / A |     N / A |
| Vitest           |  22 MB |    27 MB |     28 MB |     28 MB |

**Time consumption** (time recorded on GitHub actions)

Node test runner is skipped because it's slow even on my machine 😔

To boost performance I have used the following config:
- Jest with threads
- Vitest without threads

|        | 1 test | 50 tests | 100 tests | 200 tests |
|--------|-------:|---------:|----------:|----------:|
| Jest   |  3.6 s |   17.8 s |    26.2 s |    47.2 s |
| Vitest |  0.7 s |    1.5 s |     2.2 s |     3.5 s |

## Conclusion
### Node test runner
`node-test-runner` "the underdog" it is not yet suitable for `TypeScript` project.

It requires external libraries to make it handle `TypeScript` and mocking capability.

I got this error is
```shell
 Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: /test-frameworks/src/models/Driver.ts
```
and I solved the problem with `esmock` https://github.com/tapjs/node-tap/issues/807#issuecomment-1215999251

Performance are bad. When I first tried it using only `JavaScript` it was really fast, but I suppose that `ts-node/esm` plus `esmock` slow it down. 👎

IMO it remains the best choice for tiny `JavaScript` projects where you don't want to deal with external dependencies. ⭐️

### Jest
`jest` "the champion", from my POV, has serious issues related to ESM.
I gave up with `mock` and `unstable_mockModule`, but I found a way to make mocking works with ESM modules, through `spyOn` method.

References:
- https://jestjs.io/docs/ecmascript-modules jest doc about ESM
- https://github.com/facebook/jest/issues/10025 jest issues related to mock, which actually, doesn't mock.
- https://github.com/facebook/jest/issues/9430 jest issues for supporting native ESM
- Jest mock works only for CJS https://stackoverflow.com/questions/70999696/node-ts-jest-esm-jest-mock-doing-nothing

It requires `ts-jest` to work with `TypeScript` and a config file 👎

It has serious problems with memory leaks https://github.com/facebook/jest/issues/11956#issuecomment-1373844452,
maybe due to this https://bugs.chromium.org/p/v8/issues/detail?id=12198 that is marked as 🚨 **WONTFIX** 🚨

Performance are OK, but it could be definitely better.

### Vitest
`vitest`, "the challenger", really surprised me 😮.

Main advantages:

- Native support for ESM and Typescript (no additional dependency or config) ⭐️
- Blazing fast (for real) ⭐️
- Minimized memory consumption ⭐️
- No config file needed ⭐️

...it seems that there is a new sheriff in town 🎖️

