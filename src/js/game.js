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

<<<<<<< HEAD
function timeTick(clock){

  if (!clock.running) {
    console.log("stopped: ", playerName)
    console.log("stopped, need the score here: TODOTODOTODO")
    $.ajax({
      url: "/finish",
      method: "POST",
      data: { name: playerName, score: 9999999},
      success: function (res) {
        console.log(res)
      }
    })
  }

  if (timerPanel === 3){
=======
function timeTick(){
  if (timerPanel === 2){
>>>>>>> 354905c24546e8761fcb75aa5bb63fe88e956e4c
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
