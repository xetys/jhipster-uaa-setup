'use strict';
var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var Twig = require('twig');

// add chalk to twig
Object.keys(chalk.styles).forEach(function (style) {
  Twig.extendFilter(style, function (input) {
    return chalk[style](input);
  });
});

exports.get = function (message, data) {
  var fileTemplate = fs.readFileSync(path.join(__dirname, 'messages', message + '.twig'), 'utf8');
  return Twig.twig({data: fileTemplate}).render(data);
};
