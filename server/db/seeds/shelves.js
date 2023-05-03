exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('shelves').del()
  await knex('shelves').insert([
    {id: 1, name: 'To Read'},
    {id: 2, name: 'Reading'},
    {id: 3, name: 'Read'},
    {id: 3, name: 'Forgotten'}
  ])
}
