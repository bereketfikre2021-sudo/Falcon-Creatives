module.exports = {
  extends: ['react-app', 'react-app/jest'],
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'warn',
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
};
