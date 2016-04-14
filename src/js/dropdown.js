var answers = []
var correctAnswer = 0

//takes in the whole cohort array, and an int on the correct index of the answer
//populates the dropdown box with 4 random answers
//dropdown box is currently #dropbox element
function populate(answersArray, correct){
  console.log(answersArray)
  correctAnswer = correct
  // document.querySelector('#dropbox').innerHTML = ""
  // answersArray.forEach(function(answer, i){
  //   var option = document.createElement('option')
  //   option.innerHTML = answer
  //   option.value = i
  //   document.querySelector('#dropbox').appendChild(option)
  // })


}

//gets the currently selected dropdown item selected and reutrns a boolean if the guess is correct
function isCorrect(event){

}


module.exports = {
  populate: populate,
  isCorrect: isCorrect
}
