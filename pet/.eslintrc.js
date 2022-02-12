module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'react-app', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-console': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-unused-vars': 'warn',
    'react/jsx-no-constructed-context-values': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-unescaped-entities': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'import/no-unresolved': 'off',
    'jsx-quotes': 'off',
  },
};
