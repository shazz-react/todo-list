module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  coverageProvider: 'v8',
  coverageDirectory: './coverage/',
  setupFiles: ['./setupTest.js'],
};
