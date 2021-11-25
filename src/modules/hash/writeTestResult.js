import FileReader from "../fileReader/fileReader.js";

export default class WriteTestResult {

    async writeToFile(result) {
        const reader = new FileReader('./src/modules/hash/testResult/testResult.txt')
        await reader.writeFile(result)
    } 
}