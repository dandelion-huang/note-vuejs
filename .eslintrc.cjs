/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: [
        'prettier',
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-prettier',
    ],
    plugins: ['prettier'],
    overrides: [
        {
            files: ['cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}'],
            extends: ['plugin:cypress/recommended'],
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        indent: [1, 4, { SwitchCase: 1 }],
        'vue/multi-word-component-names': 'off',
        'vue/no-unused-vars': 'error',
        'vue/html-indent': ['error', 4, { baseIndent: 1 }],
        'prettier/prettier': 'warn',
    },
};
