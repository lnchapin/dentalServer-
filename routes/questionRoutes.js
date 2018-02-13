var express = require('express');
var router = express.Router();
var knex = require('../database/knex.js');

router.get('/', function(req, res, next) {
  return knex('questions')
  .then(function(questions){
    res.send(questions);
  })
  return
});

router.post('/', function(req, res, next) {
  return knex('questions').insert({
    questionText: req.body.questionText,
    imgSrc: req.body.imgSrc,
    correctAnswer: req.body.correctAnswer,
    incorrectAnswer1: req.body.incorrectAnswer1,
    incorrectAnswer2: req.body.incorrectAnswer2,
    incorrectAnswer3: req.body.incorrectAnswer3
    })
  .then(function(result){
    res.send("question successfully added");
  })
  return
});

router.put('/:id', function(req, res, next) {
  var questionid = req.params.id
  return knex('questions').where("id", questionid).update({
    questionText: req.body.questionText,
    imgSrc: req.body.imgSrc,
    correctAnswer: req.body.correctAnswer,
    incorrectAnswer1: req.body.incorrectAnswer1,
    incorrectAnswer2: req.body.incorrectAnswer2,
    incorrectAnswer3: req.body.incorrectAnswer3
    })
  .then(function(result){
    res.send("question successfully edited");
  })
  return
});

router.delete('/:id', function(req, res, next) {
  var questionid = req.params.id
  return knex('questions').where("id", questionid).del()
  .then(function(result){
    res.send("question has been deleted");
  })
  return
});

router.get('/:id', function(req, res, next) {
  var questionid = req.params.id
  return knex('questions').where("id", questionid)
  .then(function(questions){
    res.send(questions);
  })
  return
});

module.exports = router;
