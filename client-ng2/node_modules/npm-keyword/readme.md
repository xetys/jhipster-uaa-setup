# npm-keyword [![Build Status](https://travis-ci.org/sindresorhus/npm-keyword.svg?branch=master)](https://travis-ci.org/sindresorhus/npm-keyword)

> Get a list of npm packages with a certain keyword


## Install

```
$ npm install --save npm-keyword
```


## Usage

```js
const npmKeyword = require('npm-keyword');

npmKeyword('gulpplugin').then(packages => {
	console.log(packages);
	//=> [{name: 'gulp-autoprefixer', description: '...'}, ...]
});

npmKeyword.names('gulpplugin').then(packageNames => {
	console.log(packageNames);
	//=> ['gulp-autoprefixer', ...]
});

npmKeyword.count('gulpplugin').then(count => {
	console.log(count);
	//=> 1930
});
```


## API

### npmKeyword(keyword)

Returns a promise for a list of packages having the specified keyword in their package.json `keyword` property.

### npmKeyword.names(keyword)

Returns a promise for a list of package names. Use this if you don't need the description as it's faster.

### npmKeyword.count(keyword)

Returns a promise for the count of packages.

## Related

- [package-json](https://github.com/sindresorhus/package-json) - Get the package.json of a package from the npm registry
- [npm-user](https://github.com/sindresorhus/npm-user) - Get user info of a npm user
- [npm-email](https://github.com/sindresorhus/npm-email) - Get the email of a npm user


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
