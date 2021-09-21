module.exports = {
    roots: [
        '<rootDir>/src/week-14/test'
    ],
    preset: 'ts-jest',
    collectCoverage: true,
    collectCoverageFrom: ['./src/**/*.{js,jsx,ts}', '!**/node_modules/**', '!**/vendor/**'],
  }