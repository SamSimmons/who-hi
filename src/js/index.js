console.log("hello there")

var main = document.querySelector('#main')
var imageArray = [{ name: 'harry', image: 'http://i.imgur.com/sVLVL5z.jpg'}, { name: 'polly', image: 'http://i.imgur.com/skyvLsc.png' }, { name: 'roger', image: 'http://i.imgur.com/49gsA5P.jpg' }]

imageArray.map(function(imageObject){
  var imageDiv = document.createElement('div')
  imageDiv.id = imageObject.name
  imageDiv.style.backgroundImage = 'url(' + imageObject.image + ')'
  main.appendChild(imageDiv)
})
