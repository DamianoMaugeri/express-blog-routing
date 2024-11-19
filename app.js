const express = require('express');

const posts = require('./posts')

const app = express();

const port = 3000;


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('home del server')
});


// creo le crud su post

//index
app.get('/posts', (req, res) => {
    res.json(posts);
})

//show
app.get('/posts/:slug', (req, res) => {
    const slug = req.params.slug;
    const post = posts.find((post) => post.slug === slug);
    res.json(post);
});

//store
app.post('/posts', (req, res) => {
    res.send('creo un nuovo post')
})


//update
app.put('/posts/:slug', (req, res) => {
    res.send('aggiorno un post')
})

//modify
app.patch('/posts/:slug', (req, res) => {
    res.send('modifico un post')
})

//destroy
app.delete('/posts/:slug', (req, res) => {
    res.send('elimino un post')
})



app.listen(port, () => {
    console.log('hello nel listen')
})
