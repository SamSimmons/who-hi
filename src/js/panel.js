function render(imageUrl){
  console.log('rendering image', imageUrl)
}

function remove(){
  console.log('removing panel')

}

function reset(){
  console.log('resetting panel')

}

module.exports = {
  render: render,
  remove: remove,
  reset: reset
}
