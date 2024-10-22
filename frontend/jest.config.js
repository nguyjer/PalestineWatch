// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Path to the Next.js app directory
  dir: "./",
});

const customJestConfig = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    // Handle module aliases (if any)
    "^@/components/(.*)$": "<rootDir>/components/$1",
  },
};

module.exports = createJestConfig(customJestConfig);
