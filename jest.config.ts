import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/jestSetup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Adjust this if you use path aliases
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        // Explicitly point to your tsconfig.json
        tsconfig: 'tsconfig.json',
        // Enable JSX support
        jsx: 'react-jsx',
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!.*.mjs$)'],
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
}

export default config
