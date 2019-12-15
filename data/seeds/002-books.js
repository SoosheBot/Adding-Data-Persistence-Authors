
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {author_id:'', book_title:'', book_genre:''},
        {author_id:'', book_title:'', book_genre:''},
        {author_id:'', book_title:'', book_genre:''},
        {author_id:'', book_title:'', book_genre:''}
      ]);
    });
};
