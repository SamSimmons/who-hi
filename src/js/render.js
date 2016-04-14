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

landing()