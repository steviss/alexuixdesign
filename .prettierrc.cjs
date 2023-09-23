/** @type {import("prettier").Config} */

module.exports = {
  printWidth: 140,
  trailingComma: 'all',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  importOrder: [
    '^src/types|src/utilities(.*)$',
    '^src/components/(.*)$',
    '^src/stores(.*)$',
    '^src/pages(.*)$',
    '^src/layout(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['prettier-plugin-astro', '@trivago/prettier-plugin-sort-imports'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
