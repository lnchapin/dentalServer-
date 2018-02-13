exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del().then(function() {
    // Inserts seed entries
    return knex('questions').insert([
      {
        questionText: '',
        imgSrc: '',
        correctAnswer: '',
        incorrectAnswer1: '',
        incorrectAnswer2: '',
        incorrectAnswer3: '',
        id: 1,
      }
    ]);
  }).then(function () {
          return knex.raw('alter sequence questions_id_seq restart with 4')
        })
};
