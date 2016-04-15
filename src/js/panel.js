var shuffleArray = require('./shuffleArray.js')

var removeOrder = getRandomPanelOrder()
var currentPanel = 0

function render(imageUrl){
  console.log('rendering image', imageUrl)
  document.querySelector('.gameContainer').style.backgroundImage = 'url("' + imageUrl + '")'
}

function remove(){
  $('#panel-'+removeOrder[currentPanel]).css('visibility','hidden')
  currentPanel++
}

function reset(){
  currentPanel = 0
  for(var i = 0; i < 8; i++){
    $('#panel-'+i).css('visibility','')
  }

}

module.exports = {
  render: render,
  remove: remove,
  reset: reset
}

function getRandomPanelOrder() {
  var numPanels = document.querySelectorAll('.panel').length
  var array = []
  for(var i = 0; i < numPanels; i++)
    array.push(i)
  return shuffleArray(array)
}
