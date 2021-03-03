const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (typeof arr !== "object") throw Error;

  if (!arr) return arr;

  let copyArr = [];

  let transformArr = [];

  for (let i = 0; i < copyArr.length; i++) {

    if (copyArr[i] === '--discard-next' && copyArr[i + 1]) copyArr[i + 1] = undefined;

    if (copyArr[i] === '--discard-prev' && copyArr[i - 1]) copyArr[i - 1] = undefined;

    if (copyArr[i] === '--double-next' && copyArr[i + 1]) copyArr.slice(i + 1, 0, copyArr[i + 1]);

    if (copyArr[i] === '--double-prev' && copyArr[i - 1]) copyArr.slice(i - 1, 0, copyArr[i - 1]);

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