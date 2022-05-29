module.exports = {
	extends: [
		'eslint:recommended'
	],
	env: {
		es6: true,
		mocha: true
	},
	reportUnusedDisableDirectives: true,
	rules: {
		'no-await-in-loop': 'off',
		'no-extra-parens': ['warn', 'all', { nestedBinaryExpressions: false }],
		'no-import-assign': 'error',
		'no-template-curly-in-string': 'error',
		'require-atomic-updates': 'off',

		// https://eslint.org/docs/rules/#best-practices
		'array-callback-return': ['error', { allowImplicit: true }],
		'block-scoped-var': 'error',
		'curly': ['error', 'multi-line'],
		'default-case': 'warn',
		'default-param-last': 'warn',
		'dot-notation': 'warn',
		'eqeqeq': 'error',
		'no-alert': 'error',
		'no-else-return': 'warn',
		'no-empty-function': 'warn',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-fallthrough': 'error',
		'no-floating-decimal': 'warn',
		'no-multi-spaces': 'warn',
		'no-redeclare': 'error',
		'no-return-assign': 'error',
		'no-return-await': 'off',
		'no-self-assign': 'error',
		'no-self-compare': 'error',
		'require-await': 'error',

		// https://eslint.org/docs/rules/#variables
		'no-sequences': 'error',
		'no-shadow': 'off',
		'no-throw-literal': 'error',
		'no-unused-vars': 'warn',
		'no-use-before-define': 'off',

		// https://eslint.org/docs/rules/#nodejs-and-commonjs
		'handle-callback-err': 'warn',

		// https://eslint.org/docs/rules/#stylistic-issues

		'array-bracket-spacing': ['warn', 'never'],
		'array-element-newline': ['warn', 'consistent'],
		'arrow-spacing': ['warn', { before: true, after: true }],
		'block-spacing': 'warn',
		'brace-style': ['warn', '1tbs'],
		'comma-dangle': ['warn', 'never'],
		'comma-spacing': ['warn', { before: false, after: true }],
		'computed-property-spacing': ['warn', 'never'],
		'eol-last': ['warn', 'always'],
		'func-call-spacing': ['warn', 'never'],
		'func-style': ['warn', 'declaration'],
		'implicit-arrow-linebreak': ['warn', 'beside'],
		'indent': 'off',
		'key-spacing': ['warn', { beforeColon: false }],
		'keyword-spacing': ['warn', { before: true }],
		'linebreak-style': ['off', 'unix'],
		'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
		'max-depth': ['warn', { max: 4 }],
		'max-len': ['warn', 240],
		'max-statements-per-line': ['warn', { max: 1 }],
		'multiline-comment-style': ['warn', 'separate-lines'],
		'no-bitwise': ['error'],
		'no-lonely-if': ['warn'],
		'no-mixed-operators': ['warn'],
		'no-multi-assign': ['warn'],
		'no-multiple-empty-lines': ['warn', {
			max: 1, maxEOF: 1, maxBOF: 0
		}],
		'no-trailing-spaces': ['warn', { skipBlankLines: true }],
		'no-unneeded-ternary': ['warn'],
		'no-whitespace-before-property': ['warn'],
		// 'array-element-newline': ['warn', { multiline: true, minItems: 4 }],
		'object-curly-newline': ['warn', {
			ObjectExpression: {
				multiline: true, consistent: true, minProperties: 3
			}
		}],
		'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
		'object-curly-spacing': ['warn', 'always'],
		'operator-linebreak': ['warn', 'after'],
		'padded-blocks': ['warn', 'never'],
		'quote-props': ['warn', 'consistent-as-needed'],
		'quotes': ['error', 'single', { avoidEscape: true }],
		'semi': ['error', 'always'],
		'semi-style': ['error', 'last'],
		'space-in-parens': ['warn', 'never'],
		'space-infix-ops': 'warn',
		'spaced-comment': ['warn', 'always', { markers: ['/'] }],
		'dot-location': ['error', 'property'],
		'function-call-argument-newline': ['error', 'consistent'],
		// "function-paren-newline": ["error", "multiline"],
		'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
		// "space-before-function-paren":["warn","never"],`

		'sort-imports': [
			'warn',
			{
				ignoreCase: true,
				ignoreDeclarationSort: true,
				ignoreMemberSort: true,
				memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple']
			}
		]
	}
};
