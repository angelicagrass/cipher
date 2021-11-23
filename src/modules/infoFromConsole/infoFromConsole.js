import Readline from '../reader/readline.js'
import FileReader from '../fileReader/fileReader.js'
import MethodPicker from '../methodPicker/methodPicker.js'

export default class InfoFromConsole {
    constructor() {
        this.choice = ''
        this.text = ''
        this.encryptOrDecryptChoice = ''
        this.key = ''
        this.filePath = ''
        this.filename = ''
    }

    async getInfoFromConsole() { 
        await this.getFilePathFromUser()
        await this.nameOutputFile()
        await this.read()
        await this.encryptOrDecrypt()
        await this.getKeyFromUser()
        await this.readFile()

        this.key = Number(this.key)
        let result = new MethodPicker(this.choice, this.text, this.encryptOrDecryptChoice, this.key)
        await this.writeToFile(result.text)
    }

    async read() {
        console.log('\n' + 'Choose a encryption method: ' + '\n' + '\n' + '1: substitution' + '\n' + '2: transposition' + '\n')
        const reader = new Readline('Write your number of choice here: ')
        this.choice = await reader.getText()
    }

    async getFilePathFromUser() {
        const reader = new Readline('Enter a filepath to the textfile: ')
        this.filePath = await reader.getText()
    }

    async nameOutputFile() {
        const reader = new Readline('Enter a name to the output textfile (ex: myfile.txt): ')
        this.filename = await reader.getText()
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
        // const reader = new FileReader('./src/modules/textFile/textFile.txt')
        const reader = new FileReader(this.filePath)
        this.text = await reader.readFile()
    }

    async writeToFile(result) {
        //(const reader = new FileReader('./src/modules/textFile/textFile.txt')
        const reader = new FileReader(`./src/modules/textFile/${this.filename}`)
        this.text = await reader.writeFile(result)
    }
}