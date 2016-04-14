var currentPanel = 0

function render(imageUrl){
  console.log('rendering image', imageUrl)
  document.querySelector('.gameContainer').style.backgroundImage = 'url("' + imageUrl + '")'
}

function remove(){
  console.log('removing panel')
  document.querySelector('.panel').style.visibility = 'hidden'

}

function reset(){
  console.log('resetting panel')
  currentPanel = 0
}

module.exports = {
  render: render,
  remove: remove,
  reset: reset
}
