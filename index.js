// const { Pesson } = require('./pesson');

const connectToDataBase = require('./src/database/connect')

const dotenv = require('dotenv');

dotenv.config();

connectToDataBase();

require('./modules/express')

// console.log(pesson.syMyName())

// require('./modules/path');
// require('./modules/fs');
// require('./modules/http')

// const pesson = new Pesson('Miqueias');