/**
 *
 * @param {*} assertName message
 * @param {*} callback  callback function to test
 */
const assert = (assertName, callback, beforeAssert) => {
  beforeAssert();
  const message = Boolean(callback()) ? "passed" : "failed";
  console.log(`test ${assertName} is ${message}`);
};

// module.exports = assert;
export default assert;
