const db = require('../../data/dbConfig');

module.exports = {
  get,
  getById,
  getBooks,
  add,
  update,
  remove
};

function get() {
    return db('authors');
};

function getById(id) {
    return db('authors')
    .where({id})
    .first();
};

function getBooks(id) {
    return db('authors as a')
    .select(
        'a.id as author id',
        'a.name as author name',
        'b.title as title',
        'b.genre as genre'
    )
    .join('books as b', 'a.id', '=', 'b.author_id')
    .where('a.id', id);
};


function add(author) {
    return db('authors').insert(author);
};

function update(changes,id) {
    return db('authors', 'id')
    .where({id})
    .update(changes, '*')
    .then(count => getById(id));
};

function remove(id) {
    return db('authors')
    .where({id})
    .del();
};