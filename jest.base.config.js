module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setupJest.ts"],

  globalSetup: "jest-preset-angular/global-setup",
  collectCoverage: true,
  testRegex: ".*.spec.(js|ts|tsx)?$",
  testPathIgnorePatterns: ["node_modules", "./**/public-api.ts"],
  transform: {
    // "^.+\\.(ts|tsx)$": "ts-jest",
    '^.+\\.(ts|js|html)$': 'jest-preset-angular'

  },
};
