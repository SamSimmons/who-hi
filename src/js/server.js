var request = require('superagent')

function getCohort(callback){
  request.get('http://localhost:3000/start')
    .set('Accept', 'application/json')
    .end(function(err, res){
      // Calling the end function will send the request
      if (err) {
        callback(err)
        return
      }
      callback(null, res.body)
    });
}

function getScores(callback){
  request.get('http://localhost:3000/scores')
    .set('Accept', 'application/json')
    .end(function(err, res){
      // Calling the end function will send the request
      if (err) {
        callback(err)
        return
      }
      callback(null, res.body)
    });
}

function getScores(scoreObject, callback){
  request.post('http://localhost:3000/finish')
    .send(scoreObject)
    .set('Accept', 'application/json')
    .end(function(err, res){
      // Calling the end function will send the request
      if (err) {
        callback(err)
        return
      }
      callback(null, res.body)
    });
}

module.exports = {
  getCohort: getCohort,
  getScores: getScores
}
