const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  console.log(date);
  if (!date) return 'Unable to determine the time of year!';
  if (typeof date !== 'object') throw Error;
  if (typeof date == 'function') throw Error;

  let month = date.getMonth();
  let day = date.getDate();
  let year = date.getFullYear();

  if (year < 0) throw Error;

  function isLeapYear() {
    if (year < 100 && year % 4 === 0) return true;
    if (year < 400 && year % 4 === 0 && year % 100 !== 0) return true;
    if (year % 400 === 0) return true;
  }

  if (!isLeapYear() && day === 28) throw Error;


  if ((month == 0 && day >= 0 && day < 31) ||
    (month == 1 && day >= 0 && day < 29) ||
    (month == 11 && day >= 0 && day < 31)) {
    return 'winter';
  } else if ((month == 2 && day >= 0 && day < 31) ||
    (month == 3 && day >= 0 && day < 30) ||
    (month == 4 && day >= 0 && day < 31)) {
    return 'spring';
  } else if ((month == 5 && day >= 0 && day < 30) ||
    (month == 6 && day >= 0 && day < 31) ||
    (month == 7 && day >= 0 && day < 31)) {
    return 'summer';
  } else if ((month == 8 && day >= 0 && day < 30) ||
    (month == 9 && day >= 0 && day < 31) ||
    (month == 10 && day >= 0 && day < 30)) {
    return 'autumn';
  } else throw Error;

};