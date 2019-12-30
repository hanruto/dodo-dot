module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
      arrowFunctions: true,
      destructuring: true,
      classes: true,
      objectLiteralComputedProperties: true,
      blockBindings: true,
      defaultParams: true,
      objectLiteralShorthandProperties: true,
      restParams: true,
      spread: true,
      forOf: true,
      generators: true,
      templateStrings: true,
      superInFunctions: true,
      experimentalObjectRestSpread: true
    },
    ecmaVersion: 7,
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': 0,
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-console': 1,
    'no-unused-vars': 0,
  }
}
