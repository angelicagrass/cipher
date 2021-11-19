export default class Transposition {
  constructor(file, encryptOrDecrypt, key) {
    this.file = file;
    this.key = '312'
    this.chiperText = ''
    this.encryptOrDecrypt = encryptOrDecrypt;
    this.encryptDecrypt = this.encryptDecrypt()
  
  } 

  encryptDecrypt() {
    if (this.encryptOrDecrypt === 'e') { return this.encryptTranspositionCipher() } 
    else if (this.encryptOrDecrypt === 'd') { return this.decryptTranspositionCipher() }
  }

  encryptTranspositionCipher() {
    let str = ''
    for (let i = 0; i < this.file.length; i = i + this.key.length) {     
      str = this.test(this.file.substring(i, i + this.key.length), this.key)
    }
    console.log(this.chiperText)
    return this.chiperText
  }

  test(string, key) {
    if (string.length < key.length) { string += ' '.repeat(key.length - string.length)}
    for (let j = 0; j < key.length; j++) {
      let index = Number(key.substring(j, j + 1)) - 1
      this.chiperText += string[index]
    }
  }

  // decrypt transposition cipher
  decryptTranspositionCipher() {
    let str = ''
    for (let i = 0; i < this.file.length; i = i + this.key.length) {
      str = this.decrypt(this.file.substring(i, i + this.key.length), this.key)
    }
console.log(this.chiperText)
    return this.chiperText
  }
  decrypt(string, key) {
    if (string.length < key.length) { string += ' '.repeat(key.length - string.length)}
    for (let j = 0; j < key.length; j++) {
      let index = Number(key.substring(j, j + 1)) - 1
      this.chiperText += string.charAt(parseInt(key.charAt(index)) - 1)
    }
  }
};