exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("stores")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("stores").insert([
        { store_name: "Barnes & Noble", author: 1, book: 1, book_sold: true },
        { store_name: "Borders", author: 4, book: 3, book_sold: false },
        { store_name: "Half-Price Books", author: 3, book: 2, book_sold: true},
        { store_name: "Barnes & Noble", author: 2, book: 4, book_sold: false }
      ]);
    });
};
