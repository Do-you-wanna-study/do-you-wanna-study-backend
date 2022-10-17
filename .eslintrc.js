module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:import/recommended', 'plugin:import/typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['simple-import-sort', 'import', 'prettier', '@typescript-eslint'],
  rules: {
    indent: ['error', 2], // 들여쓰기 2칸
    semi: ['error', 'double'], // 세미콜론 강제
  },
};
