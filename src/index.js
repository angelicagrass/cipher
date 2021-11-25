import infoFromConsole from './modules/infoFromConsole/infoFromConsole.js'


try {
    const newConsole = new infoFromConsole()
    newConsole.getInfoFromConsole()    
} catch (error) {
    console.log(error)   
}


