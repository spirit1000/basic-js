const CustomError = require("../extensions/custom-error");

const chainMaker = {

  array: [],

  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array.push(value);
  },
  removeLink(position) {
    this.array.splice(position, 1);
  },
  reverseChain() {
    this.array.reverse();
  },
  finishChain() {
    return this.array.join('~~');
  }
};

module.exports = chainMaker;