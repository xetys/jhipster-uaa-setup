'use strict';
var chalk = require('chalk');
var objectValues = require('object-values');
var eachAsync = require('each-async');
var symbols = require('log-symbols');
var rules = require('./rules');

module.exports = function () {
  var errCount = 0;

  console.log('\n' + chalk.underline.blue('Yeoman Doctor'));
  console.log('Running sanity checks on your system\n');

  eachAsync(objectValues(rules), function (rule, i, cb) {
    rule.verify(function (err) {
      console.log((err ? symbols.error : symbols.success) + ' ' + rule.description);

      if (err) {
        errCount++;
        console.log(err);
      }

      cb();
    });
  }, function () {
    if (errCount === 0) {
      console.log(chalk.green('\nEverything looks all right!'));
    } else {
      console.log(chalk.red('\nFound potential issues on your machine :('));
    }
  });
};
