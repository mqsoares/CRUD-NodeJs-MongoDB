const http = require('http');

const port = 8080;

const sever = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-type': 'text/html'});
        res.end('<h1> Hello, Welcome at my home page! </h1>')
    }
    if (req.url === '/users') {
        const users = [
            {
                nome: 'Miqueias',
                email: 'miqueias@miqueias.com'
            },
            {
                nome: 'Pricila',
                email: 'pricila@pricila.com'
            }
        ]
        res.writeHead(200, { 'Content-type': 'application/json'});
        res.end(JSON.stringify(users))
    }
})

sever.listen(port, () => {console.log(`Conectado em ${port}`)});