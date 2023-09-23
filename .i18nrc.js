const { description } = require('./package.json');
const { defineConfig } = require('@lobehub/i18n-cli');

module.exports = defineConfig({
  reference: description,
  entry: 'locales/en_US',
  entryLocale: 'en_US',
  output: 'locales',
  outputLocales: ['zh_TW', 'en_US', 'ru_RU'],
  splitToken: 2500,
  temperature: 0,
  modelName: 'gpt-3.5-turbo',
});
