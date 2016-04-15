var currentPanel = 0

function render(imageUrl){
  console.log('rendering image', imageUrl)
  document.querySelector('.gameContainer').style.backgroundImage = 'url("' + imageUrl + '")'
}

function remove(){
  $('#panel-'+currentPanel).css('visibility','hidden')
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
