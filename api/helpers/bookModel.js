const db = require("../../data/dbConfig");

module.exports = {
  get,
  getById,
  add,
  update,
  remove
};

function get() {
  return db('books');
};

function getById(id) {
  return db('books')
  .where({id})
  .first();
};

function add(book) {
  return db('books').insert(book);
};

function update() {};

function remove() {};

