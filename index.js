const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile('./public/startpage.html', { root: __dirname });
})

const dir = path.join(__dirname, 'public');
app.use(express.static(dir));

app.listen(process.env.PORT || port);