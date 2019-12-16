const db = require('../../data/dbConfig');

module.exports = {
  get,
  getById,
  add,
  update,
  remove
};

function get() {
  return db('books');
}

function getById(id) {
  return db('books')
    .where({ id })
    .first();
}

function add(book) {
  return db('books').insert(book);
}

function update(changes, id) {
  return db('books', 'id')
    .where({ id })
    .update(changes, '*')
    .then(count => getById(id));
}

function remove(id) {
  return db('books')
  .where({id})
  .del();
};
