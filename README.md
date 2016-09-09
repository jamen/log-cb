# log-cb [![NPM version](https://badge.fury.io/js/log-cb.svg)](https://npmjs.org/package/log-cb) [![Build Status](https://travis-ci.org/jamen/log-cb.svg?branch=master)](https://travis-ci.org/jamen/log-cb)

> A better looking method to format errors and data from a callback.

```js
// Use inside Node callbacks.
fs.readFile('LICENSE', log('Success!', 'Error :<'));

// Or promises
foo(10).catch(log('Error happened'));
```

## Installation

```sh
$ npm install --save log-cb
```

## Usage

```js
var logCb = require('log-cb');
logCb();
```

## License

MIT © [Jamen Marz](https://github.com/jamen)
