const mongoose= require('mongoose');

const connectToDataBase = async () => {
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsfeliperocha.g63wx.mongodb.net/?retryWrites=true&w=majority`, 
        (error) => {
            if (error) {
                return console.log('Ocorreu um error ao tentar se conectar com o banco de dados', error );
            }
            return console.log('Conexão com o banco de dados realizada com sucesso!')
    } )
}

module.exports = connectToDataBase