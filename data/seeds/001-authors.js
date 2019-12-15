
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('authors').insert([
        {name: 'Chuck Pahlanuik'},
        {name: 'Stephen King'},
        {name: 'James Patterson'},
        {name: 'Tara Ali Baig'} 
      ]);
    });
};
