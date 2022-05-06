module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    warnOnUnsupportedTypeScriptVersion: false,
    project: `${process.env.PWD}/tsconfig.json`
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript'
  ],
  rules: {
    'no-unused-vars': 'off',
    'semi': 'off',
    'no-extra-parens': 'off',
    'import/no-commonjs': "error",

    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/no-extra-parens': ['warn', 'all', { nestedBinaryExpressions: false }],
    // '@typescript-eslint/interface-name-prefix': ['error', { prefixWithI: 'always' }],
    '@typescript-eslint/indent': ['warn', 2],
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/array-type': 'error',
    // '@typescript-eslint/class-name-casing': ['error', { allowUnderscorePrefix: true }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
    '@typescript-eslint/no-use-before-define': 'off',
    "@typescript-eslint/no-shadow": ["warn"],
    "@typescript-eslint/no-floating-promises": 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/type-annotation-spacing': ['warn', { "before": false, "after": true }],
    '@typescript-eslint/consistent-type-assertions': 'error',
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/method-signature-style": ["error", "method"],
    "@typescript-eslint/member-delimiter-style": ["error", {
      multiline: {
        delimiter: 'semi',
        requireLast: true
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false
      }
    }],
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
    "@typescript-eslint/no-unnecessary-condition": "warn",
    "@typescript-eslint/no-unnecessary-type-arguments": "warn",
    "@typescript-eslint/no-unnecessary-type-constraint": "warn",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-includes": "warn",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/type-annotation-spacing": "warn",
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'interface',
        format: ['PascalCase'],
        prefix: ['I']
      },
      {
        selector: ['typeLike'],
        format: ['PascalCase']
      },
      {
        selector: ['variableLike', 'method'],
        format: ['camelCase', 'PascalCase', 'UPPER_CASE', 'snake_case']
      },
      {
        selector: ['property'],
        format: ['camelCase', 'snake_case', 'UPPER_CASE'],
        leadingUnderscore: 'allow'
      },
    ]
  }
};
  