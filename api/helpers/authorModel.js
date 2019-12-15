const db = require("../../data/dbConfig");

module.exports = {
  get,
  getById,
  getAllInfo,
  add,
  update,
  remove
};

function get() {
    return db('authors');
};

function getById(id) {
    return db('projects')
    .where({id})
    .first();
};

function getAllInfo(id) {
    return db('authors as a')
    .select(
        'a.id as author id',
        'a.name as author name',
        'b.title as title',
        'b.genre as genre',
        's.store_id as store id',
        's.store_name as store name',
        's.book_sold as book sold'
    )
    .join('books as b', 'a.id', '=', 'b.author_id')
    .join('stores as s', 'a.id', '=', 's.author')
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