const express = require('express');
const router = express.Router();
const Book = require('../helpers/bookModel');

router.get('/', (req, res) => {
  Book.get()
    .then(books => {
      res.status(200).json(books);
    })
    .catch(err => {
      res.json(500).json({ error: 'Could not retrieve books.' });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Book.getById(id)
    .then(bookId => {
      if (bookId) {
        res.status(200).json(bookId);
      } else {
        res.status(404).json({ error: 'Author with that ID does not exist.' });
      }
    })
    .catch(err => {
      res.status(500).json({ error: 'Could not retrieve author.' });
    });
});

router.post('/', (req, res) => {
  const newBook = req.body;
  Book.add(newBook)
    .then(book => {
      res
        .status(201)
        .json(
          `${newBook.book_title} has been added to the collection as Id ${book}. If you didn't, please add a book genre next time, if you like.`
        );
    })
    .catch(err => {
      res.status(500).json({ error: 'Failed to add book to database.' });
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  Book.update(changes, id)
    .then(updatedBook => {
      res
        .status(201)
        .json(
          `The book ${changes.book_title} at Id ${updatedBook.id} was updated successfully!`
        );
    })
    .catch(err => {
      res.status(500).json({ error: 'Failed to update book at this Id' });
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Book.remove(id)
    .then(books => {
      if (books) {
        res.status(201).json('This book was successfully removed!');
      } else {
        res.status(404).json({ error: 'A book with this Id does not exist.' });
      }
    })
    .catch(err => {
      res.status(500).json({ error: 'Failed to delete author at this ID' });
    });
});

module.exports = router;
