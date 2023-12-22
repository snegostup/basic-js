const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    if (!arr.some(Array.isArray)) {
      return depth;
    }

    const flatArr = arr.flat();
    return this.calculateDepth(flatArr, depth + 1);

    // let result = 1;
    // let copyArr = arr.slice();

    // while(copyArr.some(Array.isArray)) {
    //   result++;
    //   copyArr = copyArr.flat();
    // }

    // return result;
  }
}

module.exports = {
  DepthCalculator
};
