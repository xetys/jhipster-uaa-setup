'use strict';
var fs = require('fs');
var path = require('path');
var childProcess = require('child_process');
var message = require('../message');

exports.description = 'NODE_PATH matches the npm root';

var errors = exports.errors = {
  npmFailure: function () {
    return message.get('node-path-npm-failure', {});
  },

  pathMismatch: function (npmRoot) {
    var msgPath = 'node-path-path-mismatch';

    if (process.platform === 'win32') {
      msgPath += '-windows';
    }

    return message.get(msgPath, {
      path: process.env.NODE_PATH,
      npmroot: npmRoot
    });
  }
};

function fixPath(filepath) {
  var fixedPath = path.resolve(path.normalize(filepath.trim()));

  try {
    fixedPath = fs.realpathSync(fixedPath);
  } catch (err) {
    if (err.code !== 'ENOENT') {
      throw err;
    }
  }

  return fixedPath;
}

exports.verify = function (cb) {
  if (process.env.NODE_PATH === undefined) {
    cb(null);
    return;
  }

  var nodePaths = (process.env.NODE_PATH || '').split(path.delimiter).map(fixPath);

  childProcess.exec('npm -g root --silent', function (err, stdout) {
    if (err) {
      cb(errors.npmFailure());
      return;
    }

    var npmRoot = fixPath(stdout);

    if (nodePaths.indexOf(npmRoot) < 0) {
      cb(errors.pathMismatch(npmRoot));
      return;
    }

    cb(null);
  });
};
