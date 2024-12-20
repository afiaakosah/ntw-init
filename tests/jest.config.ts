import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  rootDir: '../',
  projects: [
    '<rootDir>/src/apps/*/jest.config.ts',
    '<rootDir>/src/modules/*/jest.config.ts'
  ],
  coverageDirectory: '<rootDir>/coverage',
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/tests/helpers/setup.ts'],
};

export default config;
