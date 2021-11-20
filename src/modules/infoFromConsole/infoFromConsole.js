import Readline from '../reader/readline.js'
import FileReader from '../fileReader/fileReader.js'
import MethodPicker from '../methodPicker/methodPicker.js'

export default class InfoFromConsole {
    constructor(infoFromConsole) {
        this.infoFromConsole = infoFromConsole;
        this.choice = ''
        this.text = ''
        this.encryptOrDecryptChoice = ''
        this.key = ''
    }

    async getInfoFromConsole() { 
        await this.read()
        await this.encryptOrDecrypt()
        await this.getKeyFromUser()
        await this.readFile()

        this.key = Number(this.key)
        let result = new MethodPicker(this.choice, this.text, this.encryptOrDecryptChoice, this.key)

        await this.writeToFile(result)

    }

    async read() {
        const reader = new Readline('Write your number of choice here: ')
        this.choice = await reader.getText()
    }

    async encryptOrDecrypt() {
        console.log('What do you want to do: ' + '\n' + 'e: encrypt' + '\n' + 'd: decrypt')
        const reader = new Readline('Write your letter of choice here: ')
        this.encryptOrDecryptChoice = await reader.getText()
    }

    async getKeyFromUser() {

        const reader = new Readline('Write your key here: ')
        this.key = await reader.getText()
    }

    async readFile() {
        const reader = new FileReader('./src/modules/textFile/textFile.txt')
        this.text = await reader.readFile()
    }

    async writeToFile(result) {
        const reader = new FileReader('./src/modules/textFile/textFile.txt')
        this.text = await reader.writeFile(result)
    }
}