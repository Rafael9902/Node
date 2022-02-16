const express = require('express');
const app = express()
const port = 3000;

//Contenido estático
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/hello', (req, res) => {
    res.send('Nice to meet yout!');
});

app.get('*', (req, res) => {
    res.send('Default');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})