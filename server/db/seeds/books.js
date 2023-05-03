exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('books').del()
  await knex('books').insert([
    {id: 1, title: 'Under The Whispering Door', author: 'TJ Klune', publisher: '', image: '', shelf_id: 2},
    {id: 2, title: 'The Bullet That Missed', author: 'Richard Osmaned', publisher: '', image: '', shelf_id: 2},
    {id: 3, title: 'rowValue3', author: 'value3', publisher: '', image: '', shelf_id: 3}
  ])
}
