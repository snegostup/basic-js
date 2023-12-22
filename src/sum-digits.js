const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {

  if (n === 0) {
    return 0;
  } else {
    return (n % 9 === 0) ? 9 : n % 9;
  }

  //   return getDigits(n);

  // function getDigits(n) {
  //   let numToStr = String(n);

  //   if (numToStr.length === 1) {
  //     return n;
  //   }

  //   let sum = 0;

  //   for(let i = 0; i < numToStr.length; i++) {
  //     sum += +numToStr[i];
  //   }

  //   return getDigits(sum);
  // }
}

module.exports = {
  getSumOfDigits
};
