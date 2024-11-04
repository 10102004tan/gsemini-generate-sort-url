'use strict';

const express = require('express');
const router = express.Router();

router.post('/api/v1/shorten', (req, res) => {
    res.send('Shorten URL');
});

router.get('/:short_url_key' , (req, res) => {
    const short_url_key = req.params.short_url_key;
    res.send({
        short_url_key,
        long_url: 'https://www.google.com',
    });
});

module.exports = router;