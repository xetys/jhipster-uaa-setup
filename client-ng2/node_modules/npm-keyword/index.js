'use strict';
var got = require('got');
var registryUrl = require('registry-url');
var Promise = require('pinkie-promise');

function get(keyword, level) {
	if (typeof keyword !== 'string') {
		return Promise.reject(new TypeError('Keyword must be a string'));
	}

	keyword = encodeURIComponent(keyword);

	var url = registryUrl() +
		'-/_view/byKeyword?' +
		'startkey=[%22' + keyword + '%22]' +
		'&endkey=[%22' + keyword + '%22,%7B%7D]' +
		'&group_level=' + level;

	return got(url, {json: true}).then(function (res) {
		return res.body.rows;
	});
}

module.exports = function (keyword) {
	return get(keyword, 3).then(function (data) {
		return data.map(function (el) {
			return {
				name: el.key[1],
				description: el.key[2]
			};
		});
	});
};

module.exports.names = function (keyword) {
	return get(keyword, 2).then(function (data) {
		return data.map(function (el) {
			return el.key[1];
		});
	});
};

module.exports.count = function (keyword) {
	return get(keyword, 1).then(function (data) {
		return data[0] ? data[0].value : 0;
	});
};
