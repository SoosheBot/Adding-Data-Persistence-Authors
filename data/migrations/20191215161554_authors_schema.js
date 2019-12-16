exports.up = function(knex) {
  return knex.schema
    .createTable("authors", tbl => {
      tbl.increments("id");
      tbl.text("name", 255).notNullable();
    })
    .createTable("books", tbl => {
      tbl.increments("id");
      tbl
        .integer("author_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("authors")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.text("book_title", 255).notNullable();
      tbl.text("book_genre", 255);
    })
    .createTable("stores", tbl => {
      tbl.increments("id");
      tbl.text("store_name", 255).notNullable();
      tbl
        .integer("author")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("authors")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("book")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("books")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.boolean("book_sold").defaultTo(false);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("authors")
    .dropTableIfExists("books")
    .dropTableIfExists("stores");
};
