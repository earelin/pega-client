import nextJest from 'next/jest';

const createJestConfig = nextJest({
    dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/*.test.{ts,tsx}'],
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
