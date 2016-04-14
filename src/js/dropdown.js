var answers = []
var correctAnswer = 0

//takes in an array of strings with the possible answers, and an int on the correct index of the answer
//populates the dropdown box with the answers
function populate(answersArray, correct){
  console.log(answersArray)
  correctAnswer = correct
  document.querySelector('#dropbox').innerHTML = ""
  answersArray.forEach(function(answer, i){
    var option = document.createElement('option')
    option.innerHTML = answer
    option.value = i
    document.querySelector('#dropbox').appendChild(option)
  })


}

//takes in an int and reutrns a boolean if the guess is correct
function isCorrect(guess){

}


module.exports = {
  populate: populate,
  isCorrect: isCorrect
}
