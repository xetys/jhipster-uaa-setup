'use strict';
var path = require('path');
var fs = require('fs');
var userHome = require('user-home');
var message = require('../message');

exports.description = 'Global configuration file is valid';

var errors = exports.errors = {
  syntax: function (err, configPath) {
    return message.get('global-config-syntax', {
      message: err.message,
      path: configPath
    });
  },

  misc: function (configPath) {
    return message.get('global-config-misc', {
      path: configPath
    });
  }
};

exports.configPath = path.join(userHome, '.yo-rc-global.json');

exports.verify = function (cb) {
  if (!fs.existsSync(this.configPath)) {
    cb(null);
    return;
  }

  try {
    JSON.parse(fs.readFileSync(this.configPath, 'utf8'));
  } catch (err) {
    if (err instanceof SyntaxError) {
      cb(errors.syntax(err, this.configPath));
      return;
    }

    cb(errors.misc(this.configPath));
    return;
  }

  cb(null);
  return;
};
