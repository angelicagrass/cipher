import { resolve } from 'path'
import readline from 'readline'

export default class Readline {
  constructor() {
    this.startReader = this.startReadline()
  }
  
  async startReadline() {
    const text = await this.createTextFromUser()
    return text
  }

  getText() {
    return this.startReader
  }

  createTextFromUser() {
    const reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    return new Promise(resolve => {
      reader.question('Write your number of choice here: ', text => {
        reader.close()
        return resolve(text)
      })
    })
  }
}
