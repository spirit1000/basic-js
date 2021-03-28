const CustomError = require("../extensions/custom-error");




// шифр Виженера формула:
// с=(p+k)%N,
// c-номер символа закодированного слова, 
// p - номер символа исходного сообщения,
// k - номер символа ключа,
// N - количество символов в алфавите. 
// дешировка формула: 
// p = (c+N-k)%N.

class VigenereCipheringMachine {
  constructor (trueOrFalse = 'true') {
   this.trueOrFalse = trueOrFalse;
  }
  encrypt(message, key) {
    let c;
    let k;
    let p;
    const N = 26;
    let encriptedMessage = [];

    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    if (typeof message === undefined || typeof key === undefined) throw Error;
    let keyAlphabet = [];
    for (let i = 0; i < message.length;) {
      for (let j = 0; j < key.length; j++) {
        keyAlphabet.push(key[j]);
      }
      i += key.length;
    }
    
    keyAlphabet.length = message.length;

    for (let i = 0; i < message.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (message[i] == alphabet[j]) p = j;
        if (keyAlphabet[i] == alphabet[j]) k = j;
      }
      c = (p+k)%N;
      encriptedMessage.push(alphabet[c]);
    }

    encriptedMessage.join('').toUpperCase;




    // remove line with error and write your code here
  }    
  decrypt() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;
