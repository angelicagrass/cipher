import * as fs from 'fs'

export default class FileReader {
  constructor (filePath) {
    this.filePath = filePath
  }

  readFile () {
    return new Promise((resolve, reject) => {
      fs.readFile(this.filePath, 'utf8', (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
  }

  writeFile (data) {
    return new Promise((resolve, reject) => {
      fs.writeFile(this.filePath, data, (err) => {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      })
    })
  }
}