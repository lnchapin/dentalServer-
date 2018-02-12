
exports.up = function(knex, Promise) {
  return knex.schema.createTable('questions', function (table){
    table.increments('id').primary()
    table.varchar('questionText')
    table.text('correctAnswer')
    table.text('incorrectAnswer1')
    table.text('incorrectAnswer2')
    table.text('incorrectAnswer3')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('questions')
};
