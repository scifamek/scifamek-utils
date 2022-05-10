const baseConfig = require("../../jest.base.config");
module.exports = {
  ...baseConfig,
  roots: ["<rootDir>"],
  setupFilesAfterEnv: ["<rootDir>/setupJest.ts"],
  modulePaths: ["../../dist/angular-components-library"],
  collectCoverageFrom: [
    "./**/*.ts",
    "!./**/*.module.ts",
    "!./**/public-api.ts",
    "!./**/constants.ts",
    "!./**/*.constants.ts",
    "!./**/*.model.ts",
    "!./component-mapper/*-mapper.ts",
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    ".*/public-api.ts",
    "angular-components-library/.*/public-api.ts",
  ],
  // transform: {
  //   "^.+\\.(ts|tsx)$": "ts-jest",
  // },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 10,
    },
  },
  collectCoverage: true,
  coverageDirectory: "../../coverage",
};
