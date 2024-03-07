import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	verbose: true,
	preset: 'ts-jest',
	roots: ['<rootDir>/src/'],
};

export default config;
