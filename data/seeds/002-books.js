
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {author_id: 1, book_title: 'Fight Club', book_genre:'Horror'},
        {author_id: 3, book_title: 'Something About Spies IDK', book_genre:'Suspense'},
        {author_id: 4, book_title: 'Indrani and the Enchanted Jungle', book_genre:'KidLit'},
        {author_id: 2, book_title: 'Desperation', book_genre:'Thriller'},
        {author_id: 2, book_title: 'Cujo', book_genre:'Thriller'},
        {author_id: 2, book_title: 'Rose Madder', book_genre:'Thriller'}
      ]);
    });
};
