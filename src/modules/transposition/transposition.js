export default class Transposition {
  constructor(file, encryptOrDecrypt, key) {
    this.file = file;
    this.key = key
    this.ciphertext = ''
    this.encryptOrDecrypt = encryptOrDecrypt;
    this.transpositionCipher = this.transpositionCipher()
  }

  transpositionCipher() {
    this.key = this.key.toString()

    if (this.encryptOrDecrypt === 'e') {
    for (let i = 0; i < this.file.length; i = i + this.key.length) {
      this.moveCharactersInString(this.file.substring(i, i + this.key.length), this.key)
    }
  } else if (this.encryptOrDecrypt === 'd') {
    this.decrypt()
  }
    return this.ciphertext
  }

  decrypt() {console.log('decrypt----------------------->')
    let textLength = this.file.length
    let keyLength = this.key.length
    let string = ''
    for (let i = 0; i < textLength; i = i + keyLength) {
      let end = i + keyLength > textLength ? textLength : i + keyLength
      string += this.decryptblock(this.file.substring(i, end))
    }  
  }


  decryptblock(string) { 
    let block = ''
    let keyLength = this.key.length

    for (let i = 0; i < string.length; i++) {
      let index = this.key.indexOf(i + 1)
      block += string[index]
    }

    console.log(block + ' --------------------> block') 

    this.ciphertext += block
    return block




  }

  moveCharactersInString(string, key) {
    if (string.length < key.length) { string += ' '.repeat(key.length - string.length) }

    for (let j = 0; j < key.length; j++) {     
      let index = Number(key.substring(j, j + 1)) - 1
      this.ciphertext += string[index]
    }
  }
}
