var timer = require('./timer')
var panel = require('./panel')
var dropdown = require('./dropdown')
var timerPanel = 0
var score = 0

//this module controls game logic
//starts the game using a timer
//
//check

//user press start
  //show the first image and div with the timer and the start button
  //user press start
    //start the timer and countdown
    //while the coountdown is not zero
      //after a number of seconds reveal a panel
      //if answer is guessed
        //add one to the score
        //remove the current image and replace it with the number
        //reset the panel and reload the suggested answers
    //when the countdown is zero
      //hide the main panel
      //show the finish and score
      //post the score to the server

function start(imageArray) {

  //start the timer
  //render/reset the panel
  //populate the drop down box
  //set the score to 0

  timer.start(timeTick)


  panel.render(imageArray[1].image)
  dropdown.populate(imageArray, 1)
}

function answer(event){
  //check if answer is right or wrong
  //get the text from the dropbox

  if (dropdown.isCorrect(event)){
    score++
    panel.render(imageArray[2].image)


  }

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
