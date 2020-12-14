module.exports = {
  extends: ['eslint-config-egg', 'prettier'],
  rules: {
    'max-len': [2, 160],
    'no-trailing-spaces': 0,
    eqeqeq: 0,
    camelcase: 0,
    indent: 2,
    'spaced-comment': 0,
    semi: ['error', 'always'],
    'no-multiple-empty-lines': 0,
    'space-before-function-paren': ['error', 'never'],
    'eol-last': 0,
    'no-invalid-regexp': 2,
    'no-redeclare': 2,
    'no-func-assign': 2,
    'no-restricted-globals': 0,
    'no-dupe-args': 2,
    'no-duplicate-case': 2,
    'no-dupe-keys': 2,
    'no-const-assign': 2,
    'react/jsx-boolean-value': 0,
    'react/jsx-no-duplicate-props': 2,
    'react/no-danger': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/react-in-jsx-scope': 2,
    'react/jsx-handler-names': 0,
    'react/jsx-indent': [2, 4],
    'react/jsx-indent-props': [2, 4],
    'react/no-direct-mutation-state': 2,
    'comma-dangle': 2,
  },
};