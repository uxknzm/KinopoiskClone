module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:sonarjs/recommended-legacy',
        'plugin:jsx-a11y/recommended',
        'plugin:promise/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'react-hooks',
        'simple-import-sort',
        'import',
        'sonarjs',
        'promise',
        'jsx-a11y',
    ],
    rules: {
        'sonarjs/cognitive-complexity': 'warn',
        'sonarjs/no-identical-expressions': 'warn',
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    // Группа для сторонних библиотек (node_modules)
                    ['^\\w'],
                    // Группа для внутренних компонентов/файлов
                    ['^@?\\w'],
                    // Группа для стилей
                    ['^.+\\.s?css$'],
                ],
            },
        ],
        'simple-import-sort/exports': 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'max-len': ['error', { ignoreComments: true, code: 120 }],
        'jsx-a11y/no-static-element-interactions': 'warn',
        'jsx-a11y/click-events-have-key-events': 'warn',
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies,
        'no-param-reassign': 'off',
        'no-undef': 'off',
        // работа с промисами
        'promise/always-return': 'warn',
        'promise/no-return-wrap': 'error',
        'promise/param-names': 'error',
        'promise/catch-or-return': 'error',
        'promise/no-native': 'off',
        'promise/no-nesting': 'warn',
        'promise/no-promise-in-callback': 'warn',
        'promise/no-callback-in-promise': 'warn',
        'promise/avoid-new': 'warn',
        'promise/no-new-statics': 'error',
        'promise/no-return-in-finally': 'warn',
        'promise/valid-params': 'warn',
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'max-len': 'off',
            },
        },
    ],
};
