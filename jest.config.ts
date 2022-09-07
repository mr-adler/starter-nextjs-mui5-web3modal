// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

// Any custom config you want to pass to Jest
const customJestConfig = {
  testMatch: ['**/*.test.js', '**/*.test.ts', '**/*.test.tsx'],
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js config which is async
// eslint-disable-next-line no-undef
module.exports = createJestConfig(customJestConfig)
