module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es2021: true,
    },
    plugins: ['prettier'],
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    parser: '@babel/eslint-parser',
    parserOptions: {
        sourceType: 'module',
    },
    rules: {
        'no-alert': 0,
        'no-param-reassign': [2, { props: false }],
        'no-plusplus': 0,
        'no-iterator': 0,
        'no-restricted-syntax': [2, 'WithStatement'],
        'func-style': 0,
        'prettier/prettier': 'error',
    },
};
