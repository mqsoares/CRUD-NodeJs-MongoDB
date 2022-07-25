//PATH - interação com diretórios e arquivos

const path = require('path');

// ##### Pegar nome do arquivo atual .basename(__filename)

console.log(path.basename(__filename));

// ##### Pegar diretório do arquivo atual .dirname(__filename)

console.log(path.dirname(__filename));

// ##### Pegar extenção do arquivo .extname(__filename)

console.log(path.extname(__filename));

// ##### Criar obj Path .parse(__filename)

console.log(path.parse(__filename))

// ##### Juntar caminhos de arquivos .join(__filename) 
// exemplo passado como parametro irá ser add ao final do dir atual

console.log(path.join(__dirname, 'exemplo'))