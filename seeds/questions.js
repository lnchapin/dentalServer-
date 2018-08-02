exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del().then(function() {
    // Inserts seed entries
    return knex('questions').insert([
      {
        questionText: 'What accounts for jaw relation to the temporomandibular joint?',
        imgSrc: "http://static5.uk.businessinsider.com/image/590b867ddd08959a7a8b4abf-1190-625/the-best-selling-teeth-whitener-is-on-amazon-uk-and-it-really-works.jpg",
        imgAlt: "teeth",
        correctAnswer: 'Facebow',
        incorrectAnswer1: 'Wax Bite',
        incorrectAnswer2: 'Stone Models',
        incorrectAnswer3: 'Bite registration',
        id: 1,
      },
      {
        questionText: 'What class represents a normal jaw relation?',
        correctAnswer: '1',
        incorrectAnswer1: '2',
        incorrectAnswer2: '3',
        incorrectAnswer3: '4',
        id: 2,
      },
      {
        questionText: 'What class represents a retrognathic jaw relation?',
        correctAnswer: '2',
        incorrectAnswer1: '1',
        incorrectAnswer2: '3',
        incorrectAnswer3: '4',
        id: 3,
      },
      {
        questionText: 'What class represents a pronathic jaw relation?',
        correctAnswer: '3',
        incorrectAnswer1: '2',
        incorrectAnswer2: '1',
        incorrectAnswer3: '4',
        id: 4,
      },
      {
        questionText: 'What tooth numbers are the incisors?',
        correctAnswer: '7-10 and 23-26',
        incorrectAnswer1: '6, 11, 22, and 27',
        incorrectAnswer2: '4-5, 12-13, 20-21, 28 and 29',
        incorrectAnswer3: '1-3, 14-16, 17-19, and 30-32',
        id: 5,
      },
      {
        questionText: 'What tooth numbers are the canines?',
        correctAnswer: '6, 11, 22, and 27',
        incorrectAnswer1: '7-10 and 23-26',
        incorrectAnswer2: '4-5, 12-13, 20-21, 28 and 29',
        incorrectAnswer3: '1-3, 14-16, 17-19, and 30-32',
        id: 6,
      },
      {
        questionText: 'What tooth numbers are the premolars?',
        correctAnswer: '4-5, 12-13, 20-21, 28 and 29',
        incorrectAnswer1: '7-10 and 23-26',
        incorrectAnswer2: '6, 11, 22, and 27',
        incorrectAnswer3: '1-3, 14-16, 17-19, and 30-32',
        id: 7,
      },
      {
        questionText: 'What tooth numbers are the molars?',
        correctAnswer: '1-3, 14-16, 17-19, and 30-32',
        incorrectAnswer1: '7-10 and 23-26',
        incorrectAnswer2: '6, 11, 22, and 27',
        incorrectAnswer3: '4-5, 12-13, 20-21, 28 and 29',
        id: 8,
      },
      {
        questionText: 'Where do you start numbering teeth?',
        correctAnswer: 'Patients upper right',
        incorrectAnswer1: 'Patients lower right',
        incorrectAnswer2: 'Patients lower left',
        incorrectAnswer3: 'Patients upper left',
        id: 9,
      },
    ]);
  }).then(function () {
          return knex.raw('alter sequence questions_id_seq restart with 10')
        })
};
