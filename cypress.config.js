const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  e2e: {
    baseUrl: "https://app.circula.com/",
    requestTimeout: 10000,
    defaultCommandTimeout: 10000,
    viewportWidth: 1300,
    viewportHeight: 1200,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    setupNodeEvents(on, config) {},
  },
});
