export default class Transposition {
  constructor(file, key) {
    this.file = file;
    this.key = '1 2 3 4'
    
  } 

  // encrypt substitution cipher  with key  and this.file 
  encryptSubstitution() { 
    let ciphertext = "";
    let keyIndex = 0;
    for (let i = 0; i < this.file.length; i++) {
      if (this.file[i] === " ") {
        ciphertext += " ";
      } else {
        ciphertext += this.key[keyIndex];
        keyIndex++;
        if (keyIndex === this.key.length) {
          keyIndex = 0;
        }
      }
    }
    return ciphertext;
  }
};