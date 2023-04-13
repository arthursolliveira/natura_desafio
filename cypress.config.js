const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    baseUrl: 'https://www.natura.com.br/',
    viewportWidth: 1440,
    viewportHeight: 900
  },
});