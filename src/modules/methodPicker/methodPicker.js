import Substitution from '../substitution/substitution.js';
import Transposition from '../transposition/transposition.js';

export default class MethodPicker {
  constructor(method, file, encryptOrDecrypt, key) {
    this.method = method;
    this.file = file;
    this.encryptOrDecrypt = encryptOrDecrypt;
    this.key = key
    this.text = this.pick();  
  }

  pick() {
    console.log('inside pick---------------------------------------')
    console.log(this.key)
    if (this.method === '1') { 
      let result = new Substitution(this.file, this.encryptOrDecrypt,this.key);
      return result.ciphertext 
    }
    else if (this.method === '2') { 
      let result = new Transposition(this.file, this.encryptOrDecrypt, this.key) 
      return result.chiperText
    }
  }
}
