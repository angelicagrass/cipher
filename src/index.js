import Readline from './modules/reader/readline.js'
import FileReader from './modules/fileReader/fileReader.js'
import MethodPicker from './modules/methodPicker/methodPicker.js'

// Create a prettyprinter
console.log('Choose a encryption method: ' + '\n' + '1: substitution' + '\n' + '2: transposition')

let choice = ''
let text = ''
let encryptOrDecryptChoice = ''
let key = ''

async function read() {
  const reader = new Readline('Write your number of choice here: ')
  choice = await reader.getText()  
}

async function encryptOrDecrypt() {
  console.log('What do you want to do: ' + '\n' + 'e: encrypt' + '\n' + 'd: decrypt')
  const reader = new Readline('Write your letter of choice here: ')
  encryptOrDecryptChoice = await reader.getText()  
}

async function getKeyFromUser() {

  const reader = new Readline('Write your key here: ')
  key = await reader.getText()  
}

async function readFile() {
  const reader = new FileReader('./src/modules/textFile/textFile.txt')
  text = await reader.readFile()
}

async function writeToFile(result) {
  const reader = new FileReader('./src/modules/textFile/textFile.txt')
  text = await reader.writeFile(result)
}

await read()
await encryptOrDecrypt()
await readFile()
await getKeyFromUser()
key = Number(key)

let result = new MethodPicker(choice, text, encryptOrDecryptChoice, key)

//remove when done
console.log('nedaför är index')
console.log(result)
//console.log(typeof result.text)
console.log(result.text)
//methodPicker.pickMethod()

await writeToFile(result.text)
