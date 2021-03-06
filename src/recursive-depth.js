const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {

    let newArr = arr.slice();
    let counter = 1;

    for (let i = 0; i < newArr.length; i++) {
      if (Array.isArray(newArr[i])) {
        counter += 1;
        newArr = newArr[i].slice();
        i = 0;
      }
    }

    return counter;


  }
};