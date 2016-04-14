var hiScore = [
{
id: 14,
name: "Adele",
score: 22110
},
{
id: 13,
name: "Bibel",
score: 13432
},
{
id: 15,
name: "Michal",
score: 11313
},
{
id: 11,
name: "Silly",
score: 2342
},
{
id: 12,
name: "New York",
score: 2145
},
{
id: 6,
name: "Cat",
score: 762
},
{
id: 7,
name: "meow",
score: 231
},
{
id: 9,
name: "Data",
score: 220
},
{
id: 2,
name: "meow",
score: 213
},
{
id: 4,
name: "dkffdjd",
score: 210
}
]

var landing = function () {
	var overlay = document.createElement('div')
	overlay.className = 'overlay'

	var usernameInput = document.createElement('input')
	usernameInput.className = "username-input"
	usernameInput.type = "text"
	usernameInput.placeholder = "username" 


	var startButton = document.createElement('button')
	startButton.innerHTML = "START"
	startButton.className = "start btn"

	overlay.appendChild(usernameInput)
	overlay.appendChild(startButton)

	document.body.appendChild(overlay)	
}

var addHighScore = function () {
	var hiScoreContainer = document.createElement('div')

	hiScore.forEach((score, i) => {
		var scoreElt = document.createElement('div')
		scoreElt.className = 'score score-' + i

		var nameElt = document.createElement('p')
		nameElt.innerHTML = score.name
		nameElt.className = "score-name"

		var scoreVal = document.createElement('p')
		scoreVal.innerHTML = score.score
		scoreVal.className = "score-val"

		scoreElt.appendChild(nameElt)
		scoreElt.appendChild(scoreVal)
		hiScoreContainer.appendChild(scoreElt)
	})

	document.body.appendChild(hiScoreContainer)
}

landing()
addHighScore()