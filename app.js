const express = require('express');
const app = express();
const path = require('path');

const publicRoute = path.resolve(__dirname, './public');
app.use(express.static(publicRoute));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});

app.listen('3000', () => {
    console.log('Servidor funcionando en el puerto 3000');
});