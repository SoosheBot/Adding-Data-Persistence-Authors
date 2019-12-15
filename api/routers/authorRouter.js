const express = require("express");
const router = express.Router();
const Author = require("../helpers/authorModel");

router.get("/", (req, res) => {
  Author.get()
    .then(authors => {
      res.status(200).json(authors);
    })
    .catch(err => res.status(500).json({ message: "Could not get authors" }));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Author.getById(id)
    .then(authorId => {
      if (authorId) {
        res.status(200).json(authorId);
      } else {
        res.status(404).json({ error: "Author with that ID does not exist." });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "Could not retrieve author." });
    });
});

module.exports = router;
