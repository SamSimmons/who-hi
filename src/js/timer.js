var clock = $('.timer').FlipClock(10, {
  autoStart: false,
  countdown: true
});

function start(callback) {
  clock.start(function(){
    callback()
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
