var timer = require('./timer')
var panel = require('./panel')
var dropdown = require('./dropdown')
var timerPanel = 0
var score = 0
var cohortArray = []
var answersLeftArray = []
var currentAnswer;
var playerName

function start(imageArray, name) {
  playerName = name
  cohortArray = imageArray
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
  answer: answer
}
