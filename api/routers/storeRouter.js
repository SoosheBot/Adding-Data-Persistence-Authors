const express = require('express');
const router = express.Router();
const Store = require('../helpers/storeModel');

router.get('/', (req, res) => {
    Store.get()
      .then(stores => {
        const convert = stores.map(converts => {
            if(converts.book_sold == 0){
              converts.book_sold = false
            } else {
              converts.book_sold = true
            }
        })
        console.log(convert)
        res.status(200).json(stores);
    })
      .catch(err => {
        res.json(500).json({ error: 'Could not retrieve stores.' });
      });
  });
  
  router.get('/:id', (req, res) => {
    const { id } = req.params;
    Store.getById(id)
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
    const newStore = req.body;
    Store.add(newStore)
      .then(store => {
        res
          .status(201)
          .json(
            `${newStore.store_name} has been added to the list of stores as Id ${store}. If you didn't, please add a book genre next time, if you like.`
          );
      })
      .catch(err => {
        res.status(500).json({ error: 'Failed to add store to database.' });
      });
  });
  
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    Store.update(changes, id)
      .then(updatedStore => {
        res
          .status(201)
          .json(
            `The store has been updated to ${changes.store_name} at Id ${updatedStore.id} successfully!`
          );
      })
      .catch(err => {
        res.status(500).json({ error: 'Failed to update store at this Id' });
      });
  });
  
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Store.remove(id)
      .then(stores => {
        if (stores) {
          res.status(201).json('This store was successfully removed!');
        } else {
          res.status(404).json({ error: 'A store with this Id does not exist.' });
        }
      })
      .catch(err => {
        res.status(500).json({ error: 'Failed to delete store at this ID' });
      });
  });
  
  module.exports = router;
  