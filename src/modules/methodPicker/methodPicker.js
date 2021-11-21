import Substitution from '../substitution/substitution.js';
import Transposition from '../transposition/transposition.js';

export default class MethodPicker { // namn: encryption 2 params
  constructor(method, file, encryptOrDecrypt, key) {
    this.method = method;
    this.file = file;
    this.encryptOrDecrypt = encryptOrDecrypt;
    this.key = key
    this.text = this.pick();  
  }

  pick() { // choosemethod 2 params
    if (this.method === '1') { 
      let result = new Substitution(this.file, this.encryptOrDecrypt,this.key);
      return result.ciphertext 
    } else if (this.method === '2') { 
      let result = new Transposition(this.file, this.encryptOrDecrypt, this.key) 
      return result.ciphertext
    }
  }
}
