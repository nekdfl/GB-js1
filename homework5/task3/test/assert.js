/**
 *
 * @param {*} assertName message
 * @param {*} callback  callback function to test
 */
const assert = (assertName, callback) => {
  const message = Boolean(callback()) ? "passed" : "failed";
  console.log(`test ${assertName} is ${message}`);
};

module.exports = assert;
