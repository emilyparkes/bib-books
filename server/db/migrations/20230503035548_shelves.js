exports.up = function (knex) {
  return knex.schema.createTable('shelves', (table) => {
    table.increments('id')
    table.string('name')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('shelves')
}