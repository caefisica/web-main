import pluginJs from '@eslint/js';
import globals from 'globals';

export default [
    {
        files: ['**/*.js'],
        ignores: [
            'assets/js/index.js',
            'assets/js/katex.js',
            'assets/js/vendor',
            'node_modules'
        ],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.commonjs,
                ...globals.es6,
                ...globals.node,
                Atomics: 'readonly',
                SharedArrayBuffer: 'readonly'
            },
            ecmaVersion: 2018,
            sourceType: 'module'
        }
    },
    {
        ...pluginJs.configs.recommended,
        rules: {
            'no-console': 0,
            'quotes': [
                'error',
                'double',
                { avoidEscape: true, allowTemplateLiterals: false }
            ],
            'semi': [`error`, `always`],
            'multiline-ternary': [`error`, `always-multiline`],
            'no-multi-spaces': [`error`],
            'array-element-newline': ['error', 'consistent']
        }
    }
];
