var game = require('./game.js')
var server = require('./server.js')
var render = require('./render.js')


render.renderLanding()
render.renderScores()

var main = document.querySelector('.gameContainer')

var imageArray = [{ id: 1, name: 'harry', image: 'http://i.imgur.com/sVLVL5z.jpg'}, { id: 2, name: 'polly', image: 'http://i.imgur.com/skyvLsc.png' }, { id: 3, name: 'roger', image: 'http://i.imgur.com/49gsA5P.jpg' }]

var newArray = server.getCohort(function(err, res){
  game.start(res)
})

document.querySelector('#submit-btn').addEventListener('click', function(e){
  game.answer(e)
})

document.querySelector('.start').addEventListener('click', function (e) {
  document.querySelector('.overlay').style.display = 'none'
})

// imageArray.map(function(imageObject){
//   var imageDiv = document.createElement('div')
//   imageDiv.id = imageObject.name
//   imageDiv.style.backgroundImage = 'url(' + imageObject.image + ')'
//   main.appendChild(imageDiv)
// })

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
