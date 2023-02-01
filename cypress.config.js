const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here,
    },
  },
  //Por defecto a 1080p
  viewportWidth: 1920,
  viewportHeight: 1080,
});
