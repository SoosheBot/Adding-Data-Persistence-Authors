const db = require("../../data/dbConfig");

module.exports = {
  get,
  getById,
  getByAuthorId,
  getByStoreId,
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

function getByAuthorId() {

};

function getByStoreId() {};

function add() {};

function update() {};

function remove() {};

