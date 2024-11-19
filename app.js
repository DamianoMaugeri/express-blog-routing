const express = require('express');

const app = express();

const port = 3000;


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('home del server')
});


// creo le crud su post

//index

//show

//store

//update

//modify

//destroy


app.listen(port, () => {
    console.log('hello nel listen')
})
