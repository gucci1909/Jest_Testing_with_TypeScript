"use strict";
// import type {Config} from '@jest/types';
// const config: Config.InitialOptions = {
//   automock:true,
//   collectCoverage:true,
//   collectCoverageFrom:[
//     "src/**/*.{ts/tsx}"
//   ],
//   coverageProvider:"babel",
//   coverageThreshold:{
//     global:{
//       branches:100,
//       functions:100,
//       lines:100,
//       statements:100
//     }
//   },
//   preset:"ts-jest",
//   maxConcurrency:5,
//   testEnvironment:"node",
//   verbose: true,
// };
// export default config;
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/**/*.test.ts"],
    verbose: true,
    forceExit: true,
    clearMocks: true,
    resetMocks: true,
    restoreMocks: true,
};
//# sourceMappingURL=jest.config.js.map