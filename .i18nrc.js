const { description } = require('./package.json');
const { defineConfig } = require('@lobehub/i18n-cli');

module.exports = defineConfig({
  reference: description,
  entry: 'locales/en_US',
  entryLocale: 'en_US',
  output: 'locales',
  outputLocales: ['en_US'],
  splitToken: 2500,
  temperature: 0,
  modelName: 'Basilisk-V1',
});
