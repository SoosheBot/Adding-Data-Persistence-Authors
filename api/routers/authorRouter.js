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

router.get("/:id/books", (req, res) => {});

router.post("/", (req, res) => {
  const newAuthor = req.body;
  Author.add(newAuthor)
    .then(author => {
      res
        .status(201)
        .json(`Author ${newAuthor.name} was added to ID # ${author}`);
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to add new author." });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  Author.update(changes, id)
    .then(authors => {
      res
        .status(201)
        .json(
          `${changes.name} at Id ${authors.id} was updated to ${authors.name}`
        );
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to update author at this ID" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Author.remove(id)
    .then(authors => {
      if (authors) {
        res.status(201).json("The author was successfully removed.");
      } else {
        res
          .status(404)
          .json({ error: "An author with this ID does not exist." });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to delete author at this ID" });
    });
});

module.exports = router;
