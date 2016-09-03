'use strict';
var childProcess = require('child_process');
var npmconf = require('npmconf');
var pify = require('pify');
var Promise = require('pinkie-promise');
var fullname;
var first = true;
var exec = pify(childProcess.exec, Promise);

module.exports = function () {
	if (!first) {
		return Promise.resolve(fullname);
	}

	first = false;

	if (fullname) {
		return Promise.resolve(fullname);
	}

	return pify(npmconf.load, Promise)().then(function (conf) {
		fullname = conf.get('init.author.name');

		if (!fullname) {
			return fallback();
		}

		return fullname;
	}).catch(fallback).catch(function () {});
};

function fallback() {
	if (process.platform === 'darwin') {
		return exec('id -P')
			.then(function (stdout) {
				fullname = stdout.trim().split(':')[7];

				if (!fullname) {
					throw new Error();
				}

				return fullname;
			})
			.catch(function () {
				// `id -P` should never fail as far as I know, but just in case:
				return exec('osascript -e "long user name of (system info)"')
					.then(function (stdout) {
						fullname = stdout.trim();

						return fullname;
					});
			});
	}

	if (process.platform === 'win32') {
		// try git first since fullname is usually not set by default in the system on Windows 7+
		return exec('git config --global user.name')
			.then(function (stdout) {
				fullname = stdout.trim();

				if (!fullname) {
					throw new Error();
				}

				return fullname;
			})
			.catch(function () {
				return exec('wmic useraccount where name="%username%" get fullname')
					.then(function (stdout) {
						fullname = stdout.replace('FullName', '').trim();

						return fullname;
					});
			});
	}

	return exec('getent passwd $(whoami)')
		.then(function (stdout) {
			fullname = (stdout.trim().split(':')[4] || '').replace(/,.*/, '');

			if (!fullname) {
				throw new Error();
			}

			return fullname;
		})
		.catch(function () {
			return exec('git config --global user.name')
				.then(function (stdout) {
					fullname = stdout.trim();

					return fullname;
				});
		});
}
