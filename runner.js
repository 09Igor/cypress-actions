const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImNjNWE0OGNmLTk4M2UtNDAwNS05OGM0LTdmZGY5NjhmMjdjZS0xNzM3NTYwMzQ1MDU0IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMDNmYjUwMWQtY2QyOC00NTYxLWFkOWQtZDc0NGYxNDc5MTZjIiwidHlwZSI6InQifQ.F0-Prs7W91x3tNR4otViSO2IyFLeS_swt4By-a-b8A0'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: 'TOKEN',
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
