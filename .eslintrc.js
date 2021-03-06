module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		"@typescript-eslint/ban-ts-ignore": "off",
		"@typescript-eslint/ban-ts-comment": "off",
		indent: ['error', 'tab'],
		'linebreak-style': 0,
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
	},
};
