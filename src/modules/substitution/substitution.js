export default class Substitution  {
  constructor(file, encryptOrDecrypt, key) {
    this.file = file;
    this.key = key
    this.alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    this.encryptOrDecrypt = encryptOrDecrypt;
    this.ciphertext = ''
    this.tempIndex = 0
    this.encryptAndDecrypt = this.encryptAndDecrypt()
  } 

  encryptAndDecrypt() { 
    this.file = this.file.toLowerCase()

    for (let i = 0; i < this.file.length; i++) {
      if (this.file[i] === " ") { this.ciphertext += " " } 
        else { this.encryptAndDecryptAlphabetIndex(i) }
    }
    return this.ciphertext;
  }

  encryptAndDecryptAlphabetIndex(i) {
    this.tempIndex = (this.alphabet.indexOf(this.file[i]))
      if (this.tempIndex >= 0) { this.ciphertext += this.operatorChoice() }
        else if (this.tempIndex < 0) { this.ciphertext += this.alphabet[this.tempIndex + 26] }
  }

  operatorChoice() {
    if (this.encryptOrDecrypt === 'e') { return this.alphabet[(this.tempIndex + this.key) % 26] } 
    else if (this.encryptOrDecrypt === 'd') { return this.alphabet[(this.tempIndex - this.key) % 26] }
  }


  // decryptSubstitution() {
  //   this.file = this.file.toLowerCase()
  //   this.ciphertext = '';

  //   for (let i = 0; i < this.file.length; i++) {
  //     if (this.file[i] === " ") {
  //       this.ciphertext += " ";
  //     } else {
  //       let tempIndex = (this.alphabet.indexOf(this.file[i]))
  //       if (tempIndex >= 0) { 
  //         this.ciphertext += this.alphabet[(tempIndex - this.key) % 26] 
  //       }
  //       else if (tempIndex < 0) { 
  //         this.ciphertext += this.alphabet[tempIndex + 26] 
  //       }
  //     }
  //   }
  //   return this.ciphertext;
  // }

    // encryptOrDecryptFunction() {  
  //   if (this.encryptOrDecrypt === 'e') {
  //     this.encryptSubstitution()
  //   } else if (this.encryptOrDecrypt === 'd') {
  //     this.encryptSubstitution()
  //   }
  //   return this.ciphertext
  // }

  // encryptAndDecrypt() { 
  //   this.file = this.file.toLowerCase()

  //   for (let i = 0; i < this.file.length; i++) {
  //     if (this.file[i] === " ") {
  //       this.ciphertext += " ";
  //     } else {
  //       this.encryptAndDecryptAlphabetIndex()
  //       // this.tempIndex = (this.alphabet.indexOf(this.file[i]))
  //       // if (this.tempIndex >= 0) { 
  //       //   this.ciphertext += this.operatorChoice() 
  //       // }
  //       // else if (this.tempIndex < 0) { 
  //       //   this.ciphertext += this.alphabet[this.tempIndex + 26] 
  //       // }
  //     }
  //   }
  //   return this.ciphertext;
  // }


    //this.ciphertext += this.alphabet[(tempIndex + this.key) % 26] 
   //this.ciphertext += this.alphabet[(tempIndex + `${this.operator}` + this.key) % 26]
}
