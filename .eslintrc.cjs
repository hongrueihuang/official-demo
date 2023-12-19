module.exports = {
  root: true,
  extends: ['@nuxtjs/eslint-config-typescript', 'prettier'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['prettier'],
  rules: {
    // 自訂規則
    quotes: ['error', 'single'], // 使用單引號
    'no-console': 'warn', // 使用 console 時警告提示
    'vue/no-multiple-template-root': 0, // vue template do not require exactly one element
    'prettier/prettier': 'error',
  },
}
