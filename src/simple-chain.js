const CustomError = require("../extensions/custom-error");

const chainMaker = {

  array: [],
  finishArray: [],

  getLength() {
    this.array.length;
    
  },
  addLink(value = '') {
    
      value = `( ${value} )`;
      this.array.push(value);
    
    
    return this;
    
  },
  removeLink(position) {
    if (position <= this.array.length && position == Math.round(position) && position >= 0) {
    this.array.splice(position-1, 1);
    return this;
    } else {
      
      this.array.length = 0;
      throw new Error();
    }
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    this.finishArray = this.array.join('~~');
    this.array = [];
    return this.finishArray;
  },

  
};



module.exports = chainMaker;