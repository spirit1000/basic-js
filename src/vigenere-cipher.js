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
    message = message.toLowerCase();
    key = key.toLowerCase();
    let c;
    let k;
    let p;
    const N = 26;
    let encriptedMessage = [];

    let alphabet = {
      a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12,
m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
};

let alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    if (typeof message === undefined || typeof key === undefined) throw Error;
    let keyAlphabet = [];
    for (let i = 0; i < message.length;) {
      for (let j = 0; j < key.length; j++) {
        keyAlphabet.push(key[j]);
      }
      i += key.length;
    }
    // keyAlphabet.length = message.length;


    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if (alphabet.hasOwnProperty(message[i])) {
       p = alphabet[message[i]];
       k = alphabet[keyAlphabet[j]];
       c = (p+k-2)%N;
       
       encriptedMessage.push(alphabetArray[c]);
      j++;
        } else {  
          encriptedMessage.push(message[i]);
        } 
    
}
if (this.trueOrFalse === 'false') return encriptedMessage.reverse().join('').toUpperCase();
    return encriptedMessage.join('').toUpperCase();




    // remove line with error and write your code here
  }    
  decrypt(message, key) {
    message = message.toLowerCase();
    key = key.toLowerCase();
       let c;
       let k;
       let p;
       const N = 26;
       let encriptedMessage = [];
   
       let alphabet = {
         a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12,
   m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
   };
   
   let alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
   'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
   
       if (typeof message === undefined || typeof key === undefined) throw Error;
       let keyAlphabet = [];
       for (let i = 0; i < message.length;) {
         for (let j = 0; j < key.length; j++) {
           keyAlphabet.push(key[j]);
         }
         i += key.length;
       }
       // keyAlphabet.length = message.length;
   
   
       let j = 0;
       for (let i = 0; i < message.length; i++) {
         if (alphabet.hasOwnProperty(message[i])) {
          c = alphabet[message[i]];
          k = alphabet[keyAlphabet[j]];
          p = (c+N-k)%N;
          
          encriptedMessage.push(alphabetArray[p]);
         j++;
           } else {  
             encriptedMessage.push(message[i]);
           } 
       
   }
   if (this.trueOrFalse === 'false') return encriptedMessage.reverse().join('').toUpperCase();
       return encriptedMessage.join('').toUpperCase();
   
    // remove line with error and write your code here
  }
  }


module.exports = VigenereCipheringMachine;
