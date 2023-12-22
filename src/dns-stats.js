const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let currentArr = domains.map((a) => {
    return a.split('.').reverse().map((a) => {
      return `.${a}`
    })
  });

  let result = {};

  for (let i = 0; i < currentArr.length; i++) {
    for (let j = 0; j < currentArr[i].length; j++) {
      let currentKey = currentArr[i].slice(0, j + 1).join('');
      result[currentKey] = (result[currentKey] || 0) + 1;
    }
  }

  return result;
}

module.exports = {
  getDNSStats
};
