'use strict';
var fs = require('fs');
var path = require('path');
var userHome = require('user-home');
var message = require('../message');

exports.description = 'No .yo-rc.json file in home directory';

var errors = exports.errors = {
  fileExists: function () {
    var rm = process.platform === 'win32' ? 'del' : 'rm';
    return message.get('yo-rc-home-file-exists', {
      yorc: '.yo-rc.json',
      command: rm + ' ~/.yo-rc.json'
    });
  }
};

exports.yorcPath = path.join(userHome, '.yo-rc.json');

exports.verify = function (cb) {
  fs.exists(this.yorcPath, function (exists) {
    cb(exists ? errors.fileExists() : null);
  });
};
