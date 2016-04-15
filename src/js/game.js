var timer = require('./timer')
var panel = require('./panel')
var dropdown = require('./dropdown')
var timerPanel = 0
var score = 0
var cohortArray = []
var answersLeftArray = []
var currentAnswer;

function start(imageArray) {
  cohortArray = imageArray
  answersLeftArray = cohortArray.map(function(element){ return element })

  //start the timer
  //render/reset the panel
  //populate the drop down box
  //set the score to 0

  currentAnswer = chooseAnswer(answersLeftArray)
  var otherOptions = chooseOptions(cohortArray, currentAnswer)

  dropdown.populate(otherOptions, currentAnswer)

  timer.start(timeTick)
  panel.render(currentAnswer.image)
  // dropdown.populate(imageArray, 1)
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
  var input = $('#dropBox option:selected').text()
  if(input === currentAnswer)
    correct()
}

function correct(){
  currentAnswer = chooseAnswer(answersLeftArray)
  var otherOptions = chooseOptions(cohortArray, currentAnswer)
  panel.render(currentAnswer.image)
  score++
}

function timeTick(){
  console.log('timer panel', timerPanel)
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
