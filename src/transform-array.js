const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (typeof arr !== "object") throw Error;

  let copyArr = arr.slice();

  let transformArr = [];

  for (let i = 0; i < copyArr.length; i++) {

    if (copyArr[i] === '--discard-next' && (typeof copyArr[i + 1] !== 'undefined')) {
      copyArr[i + 1] = undefined;
      i += 1;
    }

    if (copyArr[i] === '--discard-prev' && (typeof copyArr[i - 1] !== 'undefined')) copyArr[i - 1] = undefined;

    if (copyArr[i] === '--double-next' && (typeof copyArr[i + 1] !== 'undefined')) copyArr.splice(i + 1, 0, copyArr[i + 1]);

    if (copyArr[i] === '--double-prev' && (typeof copyArr[i - 1] !== 'undefined')) {
      copyArr.splice(i - 1, 0, copyArr[i - 1]);
      i += 1;
    }

  }

  for (let i = 0; i < copyArr.length; i++) {
    if (typeof copyArr[i] === 'undefined' ||
      copyArr[i] === '--discard-next' ||
      copyArr[i] === '--discard-prev' ||
      copyArr[i] === '--double-next' ||
      copyArr[i] === '--double-prev'
    ) continue;
    transformArr.push(copyArr[i]);
  }


  return transformArr;
};