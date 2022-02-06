module.exports = {
  parser: 'babel-eslint',
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    node: true, // defines things like process.env when generating through node
  },
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/no-relative-parent-imports': 'off',
    'import/extensions': 'off',
    'no-console': 'off',
    'no-floating-decimal': 'error',
    'no-unused-vars': 'error',
    'react/no-unescaped-entities': 'off',
    'react/jsx-filename-extension': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-param-reassign': ['error', { props: false }],
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'error',
    'react/display-name': 'off',
    'no-duplicate-imports': 'error',
    'react/display-name': 'off',
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'eol-last': ['error', 'always'],
    'no-const-assign': 'error',
    'prefer-const': 'error',
    'no-var': 'error',
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
  },
  overrides: [
    {
      files: ['src/**/*.stories.{ts,tsx}'],
      rules: {
        'import/no-anonymous-default-export': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
    {
      files: ['*.js', '*.config.{js,ts}'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
};
