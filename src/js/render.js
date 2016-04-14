module.exports = {
	renderLanding: function () {
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
	},
	renderScores: function () {
		$.get('/scores', function (data) {
			var hiScoreContainer = document.createElement('div')
			hiScoreContainer.className = "high-score-container"

			data.forEach((score, i) => {
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

			document.querySelector('.overlay').appendChild(hiScoreContainer)
		})
	}
}
