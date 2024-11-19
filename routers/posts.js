const express = require('express');

const router = express.Router();

const posts = require('../posts');

// creo le crud su post

//index
router.get('/', (req, res) => {
    res.json(posts);
})

//show
router.get('/:slug', (req, res) => {
    const slug = req.params.slug;
    const post = posts.find((post) => post.slug === slug);
    res.json(post);
});

//store
router.post('/', (req, res) => {
    res.send('creo un nuovo post');
});


//update
router.put('/:slug', (req, res) => {
    const slug = req.params.slug;
    res.send(`aggiorno il post ${slug}`);
});

//modify
router.patch('/:slug', (req, res) => {
    const slug = req.params.slug;
    res.send(`modifico il post ${slug}`);
});

//destroy
router.delete('/:slug', (req, res) => {
    const slug = req.params.slug;
    res.send(`elimino il post ${slug}`);
});


module.exports = router