const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;


module.exports = function dateSample(sampleActivity) {
  console.log(sampleActivity);
  if (typeof sampleActivity != 'string') return false;
  sampleActivity = +sampleActivity;

  if (!sampleActivity) return false;
  if (sampleActivity > 15 || sampleActivity <= 0) return false;
  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / 0.693 * HALF_LIFE_PERIOD);
  // remove line with error and write your code here
};