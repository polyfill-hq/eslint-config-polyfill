const a11yOff = Object.keys(require('eslint-plugin-jsx-a11y').rules)
  .reduce((acc, rule) => { acc[`jsx-a11y/${rule}`] = 'off'; return acc; }, {});

module.exports = {
  env: {
    'browser': true,
    'cypress/globals': true,
  },
  plugins: [
    'cypress',
  ],
  globals: {
    JSX: 'readonly',
    React: 'readonly',
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:jsx-control-statements/recommended',
    './index.js',
  ],

  rules: {
    ...a11yOff,
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'error',
    'cypress/no-force': 'warn',
    'cypress/no-async-tests': 'error',
    'cypress/no-pause': 'error',
    '@typescript-eslint/no-use-before-define': [
      'warn',
      {
        functions: false,
        variables: false,
      },
    ],
    'func-style': [
      'off',
      'declaration',
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            message: 'Use analytics from analytics/analytics instead.',
            name: '@segment/analytics-next',
          },
        ],
        patterns: [
          '@segment/*',
        ],
      },
    ],

    'no-template-curly-in-string': 'error',

    'react/button-has-type': 'off',
    'react/destructuring-assignment': [
      'off',
    ],
    'react/jsx-no-bind': [
      'off',
    ],
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-props-no-spreading': [
      'off',
    ],
    'react/react-in-jsx-scope': [
      'off',
    ],
    'react/require-default-props': [
      'off',
    ],
    'react/jsx-one-expression-per-line': ['off'],
  },
};
