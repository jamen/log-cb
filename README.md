# log-cb [![NPM version](https://badge.fury.io/js/log-cb.svg)](https://npmjs.org/package/log-cb) [![Build Status](https://travis-ci.org/jamen/log-cb.svg?branch=master)](https://travis-ci.org/jamen/log-cb)

> A better looking method to format errors and data from a callback.

```js
// Use inside Node callbacks.
fs.readFile('LICENSE', log('Success!', 'Error :<'));

// Or promises
Promise.reject(new Error('hi'))
.catch(log('', 'Error happened'));

// You can use log.err above instead:
Promise.reject(new Error('hi again'))
.catch(log.err('Error happened'));
```

## Installation

```sh
$ npm install --save log-cb
```

## API

### `log(passMessage, [failMessage])`
Log custom message for passing
 - `passMessage`: What to log if

## License

MIT © [Jamen Marz](https://github.com/jamen)
