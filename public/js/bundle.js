(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
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

},{"./dropdown":1,"./panel":4,"./timer":5}],3:[function(require,module,exports){
var game = require('./game.js')
 //starts the game


//when button is clicked call the following function
game.start(imageArray)


console.log("hello there")

var main = document.querySelector('.gameContainer')
var imageArray = [{ id: 1, name: 'harry', image: 'http://i.imgur.com/sVLVL5z.jpg'}, { id: 2, name: 'polly', image: 'http://i.imgur.com/skyvLsc.png' }, { id: 3, name: 'roger', image: 'http://i.imgur.com/49gsA5P.jpg' }]

imageArray.map(function(imageObject){
  var imageDiv = document.createElement('div')
  imageDiv.id = imageObject.name
  imageDiv.style.backgroundImage = 'url(' + imageObject.image + ')'
  main.appendChild(imageDiv)
})

//load the landing page
  //render username box and start button
  //render leaderboard
  //load (but hide) the timer, input container and game container
    //timer
      //create the timer with 2 minutes
      //add it to the div
    //input container
      //get the images from the server
      //add the first image to the div
      //add the dropdown box with 4 answers
      //add the submit button
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

},{"./game.js":2}],4:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],5:[function(require,module,exports){
var clock = $('.timer').FlipClock(10, {
  autoStart: true,
  countdown: true
});

function start(callback) {
  clock.start(function(){
    console.log(this)
  })
  //add the timer
  //press the button to start the timer
  //when the button is pressed
  //show the first image
  //after a number of seconds remove the panel
  //if answer is guessed, hide the image and show the next image


}

module.exports = {
  start: start
}

},{}]},{},[3]);
