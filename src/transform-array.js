const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];
  let copyArr = arr.slice();

  for (let i = 0; i < copyArr.length; i++) {
    const arrEl = copyArr[i];

    if (arrEl === '--discard-prev') {
      if (copyArr[i - 1] !== undefined) {
        result.pop();
      }
    } else if (arrEl === '--double-next') {
      if (copyArr[i + 1] !== undefined) {
        result.push(copyArr[i + 1]);
      }
    } else if (arrEl === '--discard-next') {
      if (copyArr[i + 1] !== undefined) {
        delete copyArr[i + 1];
      }
    } else if (arrEl === '--double-prev') {
       if (copyArr[i - 1] !== undefined) {
        result.push(result[result.length - 1]);
      }
    } else {
      if (arrEl !== undefined)
      result.push(arrEl);
    }
  }

  return result;
}

module.exports = {
  transform
};
