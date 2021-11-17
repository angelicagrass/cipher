export default class Substitution  {
  constructor(file) {
    this.file = file;
    this.key = 2
    // array of alphabet
    this.alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    this.encryptSubstitution = this.encryptSubstitution()


  } 

  // encrypt substitution cipher  with key  and this.file 
  encryptSubstitution() { 
    this.file.toLowerCase()
    console.log(this.file)
    let ciphertext = '';
    let keyIndex = this.key;
    for (let i = 0; i < this.file.length; i++) {
      if (this.file[i] === " ") {
        ciphertext += " ";
      } else {

        let tempIndex = (this.alphabet.indexOf(this.file[i]))
        console.log(tempIndex + ' detta är index i alfabetet, bör öka med en')

        
        if (tempIndex >= 0) { ciphertext += this.alphabet[(tempIndex + this.key) % 26] 
          console.log((tempIndex + this.key))
        
        
        }
        else if (tempIndex < 0){ ciphertext += this.alphabet[tempIndex + 26] 
          console.log(tempIndex + 26 + '  tempIndex under noll')
        
        }
        // keyIndex++;
        // if (keyIndex === this.alphabet.length) {
        //   keyIndex = 0;
        // }
      }
    }

console.log(ciphertext)
    return ciphertext;
  }
  
}
