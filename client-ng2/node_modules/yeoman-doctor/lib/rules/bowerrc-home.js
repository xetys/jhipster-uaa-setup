'use strict';
var fs = require('fs');
var path = require('path');
var userHome = require('user-home');
var message = require('../message');

exports.description = 'No .bowerrc file in home directory';

var errors = exports.errors = {
  fileExists: function () {
    var rm = process.platform === 'win32' ? 'del' : 'rm';
    return message.get('bowerrc-home-file-exists', {
      bowerrc: '.bowerrc',
      command: rm + ' ~/.bowerrc'
    });
  }
};

exports.bowerrcPath = path.join(userHome, '.bowerrc');

exports.verify = function (cb) {
  fs.exists(this.bowerrcPath, function (exists) {
    cb(exists ? errors.fileExists() : null);
  });
};
