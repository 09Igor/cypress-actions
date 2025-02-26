const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

cypress.run({
  browser: 'edge'// specs to run here
})
.then((results) => {
  const args = {
    target: process.env.TARGET_TOKEN_EDGE,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
