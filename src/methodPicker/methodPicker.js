import Substitution from '../substitution/substitution.js';
import Transposition from '../transposition/transposition.js';

export default class MethodPicker {
  constructor(method, file) {
    this.method = method;
    this.file = file;
    this.pick = this.pick();  
  }

  pick() {
    console.log(this.method);
    if (this.method === '1') { return new Substitution(this.file) }
    else if (this.method === '2') { return new Transposition(this.file) }
  }
}
