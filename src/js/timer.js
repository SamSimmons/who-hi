var clock = $('.timer').FlipClock(5, {
  autoStart: false,
  countdown: true,
  clockFace: 'MinuteCounter'
});

function start(callback) {
  clock.start( function(){
    callback(clock)
  })
}

function getTime() {
  return clock.getTime.time
}


module.exports = {
  start: start,
  getTime: getTime
}
