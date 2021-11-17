import Readline from './reader/readline.js'
import FileReader from './fileReader/fileReader.js'
import MethodPicker from './methodPicker/methodPicker.js'



console.log('Choose a encryption method: ' + '\n' + '1: substitution' + '\n' + '2: transposition')


let choice = ''
let text = ''

async function read() {
  const reader = new Readline()
  choice = await reader.getText()  
}

async function readFile() {
  const reader = new FileReader('./src/textFile/textFile.txt')
  text = await reader.readFile()
}

await read()
await readFile()



let methodPicker = new MethodPicker(choice, text)
//methodPicker.pickMethod()