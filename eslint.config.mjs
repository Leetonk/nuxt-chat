import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettierConfig from 'eslint-config-prettier'

export default [
  {
    ignores: ['node_modules/**', '.nuxt/**', '.output/**', 'dist/**', '.git/**'],
  },
  js.configs.recommended,
  ...vue.configs['flat/recommended'],

  {
    files: ['**/*.{vue,ts,js,mjs}'],
    languageOptions: {
      globals: {
        defineNuxtConfig: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': ts,
    },

    rules: {
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'warn',
      'no-debugger': 'warn',
    },
  },

  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
    },
  },
  prettierConfig,
]
