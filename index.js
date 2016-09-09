var chalk = require('chalk');

log.err = logError;
module.exports = log;

function log (passMessage, failMessage) {

  handler.fail = defaultFailLog;
  handler.pass = defaultPassLog;
  return handler;

  function handler (input) {
    if (input instanceof Error) return handler.fail(input);
    else handler.pass(input);
  }

  function defaultFailLog (err) {
    if (failMessage) return console.log(chalk.red(failMessage));
    console.log(chalk.red(err.name + ':'), err.message);
  }

  function defaultPassLog (item) {
    if (passMessage) return console.log(chalk.green(passMessage));
  }
}

function logError (failMessage, passMessage) {
  return log(passMessage, failMessage);
}
