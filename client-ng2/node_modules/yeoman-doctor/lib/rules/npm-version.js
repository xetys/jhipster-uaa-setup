'use strict';
var binVersionCheck = require('bin-version-check');
var message = require('../message');

exports.OLDEST_NPM_VERSION = '3.3.0';

exports.description = 'npm version';

var errors = exports.errors = {
  oldNpmVersion: function () {
    return message.get('npm-version', {
      isWin: process.platform === 'win32'
    });
  }
};

exports.verify = function (cb) {
  binVersionCheck('npm', '>=' + exports.OLDEST_NPM_VERSION, function (err) {
    cb(err ? errors.oldNpmVersion() : null);
  });
};
