'use strict';
var semver = require('semver');
var message = require('../message');

var OLDEST_NODE_VERSION = '4.2.0';

exports.description = 'Node.js version';

var errors = exports.errors = {
  oldNodeVersion: function () {
    return message.get('node-version');
  }
};

exports.verify = function (cb) {
  cb(semver.lt(process.version, OLDEST_NODE_VERSION) ? errors.oldNodeVersion() : null);
};
