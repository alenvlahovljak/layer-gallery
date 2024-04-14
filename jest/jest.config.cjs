const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '../'),
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      'babel-jest',
      {
        presets: ['@babel/preset-env']
      }
    ],
    '^.+\\.css$': 'jest-transform-css'
  },
  testMatch: ['<rootDir>/src/**/__tests__/*.{,test}.{ts,tsx}'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(webp|svg)$': '<rootDir>/jest/__mocks__/fileMock.js'
  },
  automock: false,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text'],
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  setupFilesAfterEnv: ['./jest/jest.setup.js'],
  globals: {
    NODE_ENV: 'test'
  },
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['tsx', 'js', 'ts', 'node']
};
