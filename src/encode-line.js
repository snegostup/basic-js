const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let symbCount = 1;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1] && str[i + 1]) {
      symbCount++;
    } else {
      if (symbCount > 1) {
        result += `${symbCount}${str[i]}`;
      } else {
        result += `${str[i]}`
      }
      symbCount = 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
