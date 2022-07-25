// FS - manipulação de arquivos

const fs = require('fs');
const path = require('path');

// ##### Criar uma Pasta

// fs.mkdir(path.join(__dirname, 'teste'), (error) => {
//     if (error) {
//         return console.log(error);
//     }
//     console.log('Pasta criada com sucesso!')
// })

// ##### Criar um arquivo

// fs.writeFile(path.join(__dirname, '/teste', 'test.html'), 'hello node.js', (error) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log('Aquivo criado com sucesso!')
// })

// ##### Add a um arquivo

// fs.appendFile(path.join(__dirname, '/teste', 'test.html'), 'my first test add file', (error) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log('Aquivo criado com sucesso!')
// })

// ##### Ler um arquivo

fs.readFile(path.join(__dirname, '/teste', 'test.html'), 'utf-8', (error, data) => {
    if (error) {
        console.log(error);
    }
    console.log(data)
})