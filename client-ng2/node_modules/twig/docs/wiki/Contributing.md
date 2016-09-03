There are a few steps to take to get twig.js building in your environment.

## Requirements

In order work on twig.js you will need [node](http://nodejs.org/) installed to run the tests and create the minified version of twig.js

## Building 

1. Fork and clone the twig.js git repository
2. Run `npm install` to install the development dependencies
3. Make your changes to the source files in `src/`
4. Add/update tests in `test/`
5. Run `make` to build twig.js and twig.min.js
6. Run `make test` to run the Mocha tests