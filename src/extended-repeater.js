const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  console.log(str);
  console.log(options);

  if (options.hasOwnProperty('addition')) {
    options.addition = String(options.addition);
  } else {
    options.addition = "";
  }

  str = String(str);

  if (!(options.hasOwnProperty('separator'))) options.separator = "+";
  if (!(options.hasOwnProperty('additionSeparator'))) options.additionSeparator = "|";
  if (!(options.hasOwnProperty('additionRepeatTimes'))) options.additionRepeatTimes = 1;


  let additionString = options.addition;

  for (let i = 2; i <= options.additionRepeatTimes; i++) {
    additionString = additionString + options.additionSeparator + options.addition;
  }

  let finishString = str + additionString;

  for (let i = 1; i < options.repeatTimes; i++) {
    finishString = finishString + options.separator + str + additionString;
  }

  return finishString;


};