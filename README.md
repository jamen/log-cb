# log-cb [![NPM version](https://badge.fury.io/js/log-cb.svg)](https://npmjs.org/package/log-cb) [![Build Status](https://travis-ci.org/jamen/log-cb.svg?branch=master)](https://travis-ci.org/jamen/log-cb)

> A better looking method to format errors and data from a callback.

```js
// Use inside Node callbacks.
fs.readFile('LICENSE', log('Success!', 'Error :<'));

// Or promises
foo(10).catch(log('', 'Error happened'));

// You can use log.err above instead:
bar(99).catch(log.err('Error happened'));
```

## Installation

```sh
$ npm install --save log-cb
```

## API

### `log(passMessage, [failMessage])`
Log custom message for passing
 - `passMessage`: What to log if your callback has no errors.
 - `failMessage`: What to log if your callback has errors.  Defaults to something custom.

### `log.err(failMessage, [passMessage])`
The reverse of the original function, for better syntax:

```js
log('', 'it broke!');
// vs
log.err('it broke!');
```

## License

MIT © [Jamen Marz](https://github.com/jamen)
