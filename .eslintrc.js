module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.ts', '*.js'],
      parser: '@typescript-eslint/parser', // Specifies the ESLint parser
      plugins: ['@typescript-eslint', 'prettier'],
      extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
        'plugin:prettier/recommended',
      ],
      parserOptions: {
        ecmaVersion: 2018, 
        sourceType: 'module', 
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
      rules: {
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'auto',
          },
        ],
      },
    },
    { 
      plugins: ['@graphql-eslint', 'prettier'],
      extends: ['prettier', 'plugin:prettier/recommended'],
    },
  ],
};
