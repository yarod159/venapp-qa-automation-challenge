const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  experimentalStudio:true,
	watchForFileChanges: true,
	
	
  e2e: {
		"includeShadowDom": true,
		experimentalMemoryManagement: true,
		numTestsKeptInMemory: 0,
		defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    taskTimeout: 300000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: false,
	viewportHeight: 1080,
	viewportWidth: 1920,
});
