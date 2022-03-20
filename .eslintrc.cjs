module.exports = {
	env: {
		browser: true,
		amd: true,
		node: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'prettier'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		semi: ['error', 'always'],
		quotes: ['error', 'single'],
	},
};
