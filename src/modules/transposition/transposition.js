export default class Transposition {
  constructor(file, encryptOrDecrypt, key) {
    this.file = file;
    this.key = key.toString()
    this.ciphertext = ''
    this.encryptOrDecrypt = encryptOrDecrypt;
    this.transpositionCipher = this.transpositionCipher() 
  } 

  transpositionCipher() {
    for (let i = 0; i < this.file.length; i = i + this.key.length) {     
      this.moveCharactersInString(this.file.substring(i, i + this.key.length), this.key)
    }
    console.log(this.ciphertext)
    return this.ciphertext
  }

  moveCharactersInString(string, key) {
    if (string.length < key.length) { string += ' '.repeat(key.length - string.length) }
    for (let j = 0; j < key.length; j++) {
      let index = Number(key.substring(j, j + 1)) - 1
      if (this.encryptOrDecrypt === 'e') { this.ciphertext += string[index] } 
        else if (this.encryptOrDecrypt === 'd') { this.ciphertext += string.charAt(parseInt(key.charAt(index)) - 1) } 
    }
  }

    // encryptDecrypt() {
  //   if (this.encryptOrDecrypt === 'e') { return this.encryptTranspositionCipher() } 
  //   else if (this.encryptOrDecrypt === 'd') { return this.encryptTranspositionCipher() }
  // }

  // test(string, key) {
  //   if (string.length < key.length) { string += ' '.repeat(key.length - string.length)}
  //   for (let j = 0; j < key.length; j++) {
  //     let index = Number(key.substring(j, j + 1)) - 1
  //     this.ciphertext += string[index]
  //   }
  // }

  // decrypt transposition cipher
//   decryptTranspositionCipher() {
//     let str = ''
//     for (let i = 0; i < this.file.length; i = i + this.key.length) {
//       str = this.decrypt(this.file.substring(i, i + this.key.length), this.key) // this.decrypt
//     }
// console.log(this.chiperText)
//     return this.chiperText
//   }
//   decrypt(string, key) {
//     if (string.length < key.length) { string += ' '.repeat(key.length - string.length)}
//     for (let j = 0; j < key.length; j++) {
//       let index = Number(key.substring(j, j + 1)) - 1
//       this.chiperText += string.charAt(parseInt(key.charAt(index)) - 1) // skiljer sig
//     }
//   }
}
