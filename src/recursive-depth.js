const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {


    let counter = 1;

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        counter += 1;
        arr = arr.flat();
        i = 0;
      }
    }

    return counter;
    // let counter = 1;

    // for (let elem of arr) {
    //   if (Array.isArray(elem)) {
    //     let subDepth = calculateDepth(elem);
    //     if (subDepth > counter) counter = subDepth;


    //   }

    // }

    // return counter;

  }






};