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
<<<<<<< HEAD
    $('#dropbox').append(options);

}

function buildElement(answer, otherOptions){
  // document.querySelector('#dropbox').innerHTML = ""
  // answersArray.forEach(function(answer, i){
  //   var option = document.createElement('option')
  //   option.innerHTML = answer
  //   option.value = i
  //   document.querySelector('#dropbox').appendChild(option)
  // })
=======
    return options.join(' ');
>>>>>>> 6eeea163506fa681c3d86eb0d99b5ca97a325344
}




//build array for dropbox (takes in an answer and five times random)

module.exports = {
  populate: populate,
  buildElement: buildElement
}
