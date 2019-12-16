const db = require("../../data/dbConfig");

module.exports = {
  get,
  getById,
  getByAuthor,
  getByBook,
  add,
  update,
  remove
};

function get() {
  return db('stores');
}

function getById(id) {
  return db('stores')
    .where({ id })
    .first();
}

function getByAuthor() {}

function getByBook() {}

function add(store) {
  return db('stores').insert(store);
}

function update(changes, id) {
  return db('stores', 'id')
    .where({ id })
    .update(changes, '*')
    .then(count => getById(id));
}

function remove(id) {
  return db('stores')
  .where({id})
  .del();
};
