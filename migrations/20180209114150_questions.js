
exports.up = function(knex, Promise) {
  return knex.schema.createTable('questions', function (table){
    table.increments('id').primary()
    table.varchar('questionText')
    table.text('questionText')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('questions')
};
