import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  js.config({
    env: {
      es6: true,
      node: true,
      jest: true,
    },
  }),
  ...compat.extends('airbnb-base'),
  ...compat.plugins('jest'),
  ...compat.config({
    rules: {
      'max-classes-per-file': 'off',
      'no-underscore-dangle': 'off',
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement',
      ],
    },
  }),
];
