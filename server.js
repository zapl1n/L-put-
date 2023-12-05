const express = require('express');

const app = express();

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
}),
    app.get('/about', (req, res) => {
        res.sendFile(__dirname + '/views/lost.html');
    }),
    app.get('/works', (req, res) => {
        res.sendFile(__dirname + '/views/found.html');
    }),
    app.delete('/', (req, res) => {
        res.send();
    })




app.listen(3000, () => {
    console.log('Server running on port 3000');
}
);