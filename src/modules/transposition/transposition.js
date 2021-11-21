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
}
