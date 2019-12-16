const express = require("express");
const router = express.Router();
const Book = require("../helpers/bookModel");

router.get("/", (req, res) => {
  Book.get()
    .then(books => {
      res.status(200).json(books);
    })
    .catch(err => {
      res.json(500).json({ error: "Could not retrieve books." });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Book.getById(id)
    .then(bookId => {
      if (bookId) {
        res.status(200).json(bookId);
      } else {
        res.status(404).json({ error: "Author with that ID does not exist." });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "Could not retrieve author." });
    });
});

router.post("/", (req, res) => {
  const newBook = req.body;
  Book.add(newBook)
    .then(book => {
        res.status(201).json(`${newBook.book_title} has been added to the collection as Id ${book}. If you didn't, please add a book genre next time, if you like.`);
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to add book to database." });
    });
});

module.exports = router;
