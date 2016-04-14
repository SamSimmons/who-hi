var currentPanel = 0

function render(imageUrl){
  console.log('rendering image', imageUrl)
  document.querySelector('.gameContainer').style.backgroundImage = 'url("' + imageUrl + '")'
}

function remove(){
  console.log('removing panel', $('.panel:not(:hidden)').length)

  $('.panel').filter(':not(:hidden)').first().css('visibility','hidden')

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
