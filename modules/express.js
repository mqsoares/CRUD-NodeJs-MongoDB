const { json } = require('express');
const express = require('express');
const app = express();

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'src/views')

const UserModel = require('../src/models/user.model');

app.get('/', async (req, res) => {
    const users = await UserModel.find({})
    res.render('index', { users } );
})

app.post('/users', async (req, res) => {
    const user = await UserModel.create(req.body);
    res.json(user);
})

app.get('/users', async (req, res) => {
    const users = await UserModel.find({}); 
    res.json(users);
})

app.get('/users/:id', async (req, res) => {
    const id = req.params.id;
    const user = await UserModel.findById(id);     
    res.json(user)
})

app.patch('/users/:id', async (req, res) => {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });     
    res.json(user)
})

app.delete('/users/:id', async (req, res) => {
    const id = req.params.id;
    const user = await UserModel.findByIdAndRemove(id);     
    res.json(user)
})

app.listen(8080, () => console.log('Conectado a porta 8080'));