const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(direct = true) {
    this.alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.direct = direct;
  }

  #crypt(text, key, encrypt = true) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }

    text = text.toUpperCase();
    key = key.toUpperCase();
    let result = '';

    for (let i = 0, j = 0; i < text.length; i += 1) {
      if (this.alph.indexOf(text[i]) === -1) {
        result += text[i];
        continue;
      }

      const keyChar = key[j % key.length];
      const keyIndex = this.alph.indexOf(keyChar);
      const currentCrypt = encrypt ? keyIndex : -keyIndex;

      result += this.alph[(this.alph.indexOf(text[i]) + currentCrypt + this.alph.length) % this.alph.length];

      j += 1;
    }
    return this.direct ? result : result.split('').reverse().join('');
  }

  encrypt(text, key) {
    return this.#crypt(text, key, true)
  }
  decrypt(text, key) {
    return this.#crypt(text, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine
};
