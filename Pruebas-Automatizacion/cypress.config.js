const { defineConfig } = require("cypress");



module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    }, 
    
    
    specPattern: "cypress/e2e/**/*.{js,ts}",
    "includeShadowDom": true,
		experimentalMemoryManagement: true,
		numTestsKeptInMemory: 0,
		defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    taskTimeout: 300000,
    chromeWebSecurity: false,
    experimentalStudio:true,
	  watchForFileChanges: true,
  },
  
  
  video: false,
	viewportHeight: 1080,
	viewportWidth: 1920,
});
