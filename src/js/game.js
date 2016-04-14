var timer = require('./timer')
var panel = require('./panel')
var dropdown = require('./dropdown')



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

  timer.start(endGame)

}



function endGame(){
  console.log('game has ended')
}


module.exports = {
  start: start
}
