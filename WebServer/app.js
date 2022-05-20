const express = require('express');
const app = express();
const port = 3000;

// Contenido estatico
// Asi tambien se usan los middlewares
app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(port, () => console.log(`Server Listening at port ${port}`));