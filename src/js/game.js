var timer = require('./timer')
var panel = require('./panel')
var dropdown = require('./dropdown')
var shuffleArray = require('./shuffleArray.js')
var timerPanel = 0
var score = 0
var cohortArray = []
var answersLeftArray = []
var currentAnswer;
var playerName
var render = require('./render')

function start(imageArray, name) {
  playerName = name
  cohortArray = imageArray
  cohortArray = shuffleArray(cohortArray)
  answersLeftArray = cohortArray.map(function(element){ return element })
  currentAnswer = chooseAnswer(answersLeftArray)
  var otherOptions = chooseOptions(cohortArray, currentAnswer)

  dropdown.populate(otherOptions, currentAnswer)
  $('.user-score').text(score)
  timer.start(timeTick)
  panel.render(currentAnswer.image)
}

function chooseAnswer(arr){
  var answer = arr[0]
  arr.shift()
  return answer
}

function chooseOptions(cohortArray, answer){
  var arrayWithoutAnswer = cohortArray.filter(function(element){
    return element.name !== answer.name
  })
  return arrayWithoutAnswer.splice(0,3)
}

function answer(event){
  var input = $('#dropbox').val()
  console.log(input, currentAnswer.name)
  if(input === currentAnswer.name)
    correct()
  else {
    incorrect()
  }
}

function ended(){
  console.log('ended')
  console.log('score is', score)
  document.querySelector('.overlay').remove()
  panel.reset()
  render.renderLanding()
  render.renderUserScore(playerName, score)
  answersLeftArray = cohortArray.map(function(element){ return element })
  render.renderScores()
  score = 0
  //reset array
}

function getScore() {
  return score
}

function incorrect(){
  currentAnswer = chooseAnswer(answersLeftArray)
  var otherOptions = chooseOptions(cohortArray, currentAnswer)
  dropdown.populate(otherOptions, currentAnswer)
  panel.render(currentAnswer.image)
  panel.reset()
}

function correct(){
  currentAnswer = chooseAnswer(answersLeftArray)
  var otherOptions = chooseOptions(cohortArray, currentAnswer)
  dropdown.populate(otherOptions, currentAnswer)
  panel.render(currentAnswer.image)
  panel.reset()
  score++
  $('.user-score').text(score)
}

function timeTick(clock){
  if (!clock.running) {
    ended()
    $.ajax({
      url: "/finish",
      method: "POST",
      data: { name: playerName, score: score}
    })
  }

  if (timerPanel === 3){
    timerPanel = 0
    panel.remove()
  } else {
    timerPanel++
  }
}

module.exports = {
  start: start,
  answer: answer,
  getScore: getScore
}
