export default class Substitution {
  constructor(file, encryptOrDecrypt, key) {
    this.file = file;
    this.key = key
    this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    this.encryptOrDecrypt = encryptOrDecrypt;
    this.ciphertext = ''
    this.tempIndex = 0
    this.encryptAndDecryptFunction = this.encryptAndDecryptFunction()

  }

  encryptAndDecryptFunction() { 
    if (this.encryptOrDecrypt === 'e') { return this.encrypt() } 
      else { return this.decrypt() }
  }

  encrypt() { 
    let string = this.file.toLowerCase()
    for (let i = 0; i < string.length; i++) {
      const tempIndex = (this.alphabet.indexOf(string[i]) + this.key) % 26

      if (this.alphabet.indexOf(string[i]) >= 0) { this.ciphertext += this.alphabet[tempIndex] } 
        else { this.ciphertext += string[i] } 
    }
    return this.ciphertext
  }


decrypt() {
    let string = this.file.toLowerCase()
    for (let i = 0; i < string.length; i++) {

      if (this.alphabet.indexOf(string[i]) >= 0) {
        let tempIndex = (this.alphabet.indexOf(string[i]) - this.key) % 26
        if (tempIndex < 0 ) { tempIndex = 26 + tempIndex }
        this.ciphertext += this.alphabet[tempIndex]
      } else {
        this.ciphertext += string[i]
      }
    }
    return this.ciphertext
  }
}

//   encryptAndDecryptFunction() {
//     this.file = this.file.toLowerCase()

//     for (let i = 0; i < this.file.length; i++) {
//       if (this.file[i] === " ") { this.ciphertext += " " }
//       else if (this.file[i] === "*") { this.ciphertext += "*" }
//       else if (this.file[i] === "\n") { this.ciphertext += "\n" }
//       else if (this.file[i] === "-") { this.ciphertext += "-" }
//       else { this.encryptAndDecryptAlphabetIndex(i) } 
//     }
//     return this.ciphertext;
//   }

//   encryptAndDecryptAlphabetIndex(i) {
//     this.tempIndex = (this.alphabet.indexOf(this.file[i]) + this.key) % 29
//     if (this.alphabet.indexOf(this.file[i]) >= 0) { 
//       this.ciphertext += this.operatorChoice() }
//       else{
//         // if index is less than zero
//         this.ciphertext += this.alphabet[i] }
//   }

//   operatorChoice() {
//     if (this.encryptOrDecrypt === 'e') { 
//       // if index is greater than 0

//       // if (this.tempIndex + this.key < 29) {
//       //   this.ciphertext += this.alphabet[this.tempIndex + this.key]
//       // } else {
//       //   this.ciphertext += this.alphabet[this.tempIndex + this.key % 29]
//       // }
//       console.log(typeof this.tempIndex)
//       console.log(typeof this.key)

//       return this.alphabet[(this.tempIndex + this.key)] // här är något fel ?  undefined? går utanför alfabetet?
//     } 
    
//       else if (this.encryptOrDecrypt === 'd') { 
//         return this.alphabet[(this.tempIndex - this.key) % 29] } // eller här
//   }
// }









// encryptAndDecryptFunction() {
//   this.file = this.file.toLowerCase()

//   for (let i = 0; i < this.file.length; i++) {
//     if (this.file[i] === " ") { this.ciphertext += " " }
//     else if (this.file[i] === "*") { this.ciphertext += "*" }
//     else if (this.file[i] === "\n") { this.ciphertext += "\n" }
//     else if (this.file[i] === "-") { this.ciphertext += "-" }
//     else { this.encryptAndDecryptAlphabetIndex(i) } 
//   }
//   return this.ciphertext;
// }

// encryptAndDecryptAlphabetIndex(i) {
//   this.tempIndex = (this.alphabet.indexOf(this.file[i]))
//   if (this.tempIndex >= 0) { this.ciphertext += this.operatorChoice() }
//     else if (this.tempIndex < 0) { 
//       //this.ciphertext += this.alphabet[this.tempIndex + 29] 
//       this.ciphertext += this.file[i]
      
//     }
// }

// operatorChoice() {
//   let result = ''
//   if (this.encryptOrDecrypt === 'e') { 
//     if (this.tempIndex + this.key < 29) { 
//       result = this.alphabet[this.tempIndex + this.key]
//     } else {
//       result = this.alphabet[(this.tempIndex + this.key) % 29]
//     }
//   }
//     else if (this.encryptOrDecrypt === 'd') { 
//       if (this.tempIndex + this.key < 29) { 
//         result = this.alphabet[this.tempIndex - this.key]
//       } else {
//         result = this.alphabet[(this.tempIndex - this.key) % 29]
//       }
//     }
//     return result
//       //return this.alphabet[(this.tempIndex - this.key) % 29] } // eller här
// }
