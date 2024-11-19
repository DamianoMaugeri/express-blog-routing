const express = require('express');

const app = express();

const postRouter = require('./routers/posts.js');

const port = 3000;


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('home del server');
});

// rotte 
app.use('/posts', postRouter);





app.listen(port, () => {
    console.log('hello nel listen');
})

process.on('SIGINT', () => {
    app.close();
    process.exit(0);
});
