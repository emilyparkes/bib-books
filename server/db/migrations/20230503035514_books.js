exports.up = function (knex) {
  return knex.schema.createTable('books', (table) => {
    table.increments('id')
    table.string('title')
    table.string('author')
    table.string('publisher')
    table.string('img')
    table.integer('shelf').references('shelves.id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('books')
}
