var game = require('./game.js')
var server = require('./server.js')
var render = require('./render.js')

var playerName = ""

render.renderLanding()
render.renderScores()

var main = document.querySelector('.gameContainer')

var imageArray = [{ id: 1, name: 'harry', image: 'http://i.imgur.com/sVLVL5z.jpg'}, { id: 2, name: 'polly', image: 'http://i.imgur.com/skyvLsc.png' }, { id: 3, name: 'roger', image: 'http://i.imgur.com/49gsA5P.jpg' }]

document.querySelector('#submit-btn').addEventListener('click', function(e){
  console.log('submit')
  game.answer(e)
})

document.querySelector('.start').addEventListener('click', function (e) {
  playerName = $('.username-input').val()

  if (playerName) {
    document.querySelector('.overlay').style.display = 'none'
    server.getCohort(function(err, res){
      game.start(res, playerName)
    })
  }
})
