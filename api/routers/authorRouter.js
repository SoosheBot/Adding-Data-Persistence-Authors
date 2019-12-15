const express = require('express');
const router = express.Router();
const Author = require('../helpers/authorModel');

router.get('/', (req,res) => {
    Author.get()
    .then(authors => {
        res.status(200).json(authors); 
    })
    .catch(err => res.status(500).json({ message: "Could not get authors" }));
});

module.exports = router;