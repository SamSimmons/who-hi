var answers = []
var correctAnswer = 0


//passes in an array of objects and returns a select object
//takes in 4 cohort array, and an int on the correct index of the answer
//populates the dropdown box with 4 random answers
//dropdown box is currently #dropbox element



function populate(answer, otherOptions){
  console.log('populate', answer, otherOptions)
  //builds the dropdown element

  //var element = buildElement(answer, otherOptions)
  //var answer = setAnswer(indexOfAnswer)




}

function buildElement(answer, otherOptions){
  // document.querySelector('#dropbox').innerHTML = ""
  // answersArray.forEach(function(answer, i){
  //   var option = document.createElement('option')
  //   option.innerHTML = answer
  //   option.value = i
  //   document.querySelector('#dropbox').appendChild(option)
  // })
}



function setAnswer(indexOfAnswer) {
  correctAnswer = correct
}


//gets the currently selected dropdown item selected and reutrns a boolean if the guess is correct
function insertDom(element){

}

//build array for dropbox (takes in an answer and five times random)

module.exports = {
  populate: populate,
  setAnswer: setAnswer,
  insertDom: insertDom
}
