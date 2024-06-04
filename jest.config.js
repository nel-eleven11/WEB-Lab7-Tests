module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverage: true, // Habilitar la recolección de cobertura
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}', // Especifica de dónde recoger la cobertura
    '!src/**/*.d.ts',
  ],
  coverageDirectory: 'coverage', // Directorio donde se almacenarán los informes de cobertura
};
