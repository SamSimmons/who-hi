var $ = require('jquery')
var answers = []
var correctAnswer = 0


//passes in an array of objects and returns a select object
//takes in 4 cohort array, and an int on the correct index of the answer
//populates the dropdown box with 4 random answers
//dropdown box is currently #dropbox element



function populate(nonAnsers,answer) {
    $('#dropbox').html('');
    $('#dropbox').append(buildElement(nonAnsers,answer));
}

function buildElement(answer, otherOptions){
    var options=[];
    nonAnsers.push(answer);
    nonAnsers.forEach(function(option,i){
      var _option= $("<option value='"+option.name+"'>"+option.name+"</option>")
      options.push(_option);
    })
    return options.join(' ');
}




//build array for dropbox (takes in an answer and five times random)

module.exports = {
  populate: populate,
  buildElement: buildElement
}
