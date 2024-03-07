import nextJest from 'next/jest';

const createJestConfig = nextJest({
    dir: './',
});

const customJestConfig = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/*.test.{ts,tsx}'],
    testEnvironment: 'jsdom',
};

module.exports = createJestConfig(customJestConfig);
