let randNum = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector("#subt");

const userInput = document.querySelector("#guessField");

const userGuesses = document.querySelector(".guesses");

const remGuesses = document.querySelector(".remCount");

const lowOrHi = document.querySelector(".lowOrHi");

const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuesses = [];

let numGuesses = 1;

let playGame = true;

if (playGame) {
	submit.addEventListener("click", function (e) {
		e.preventDefault();

		const guess = parseInt(userInput.value);

		prevGuesses.push(guess);

		numGuesses++;

		if (numGuesses === 11) {
			displayGuess(guess);
			displayMessage(`Game Over. Random Number was ${randNum}`);
			endGame();
			return;
		}

		displayGuess(guess);
		checkGuess(guess);
	});
}

function checkGuess(guess) {
	if (guess === randNum) {
		displayMessage("Correct Guess!");
		endGame();
	} else if (guess < randNum) {
		displayMessage("Guess a bigger number!");
	} else {
		displayMessage("Guess a smaller number");
	}
}

function displayGuess(guess) {
	userInput.value = "";

	userGuesses.innerHTML += ` ${guess}`;

	remGuesses.innerHTML = remGuesses.innerHTML - 1;
}

function displayMessage(message) {
	lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
	userInput.value = "";
	userInput.setAttribute("disabled", "");

	p.classList.add("button");
	p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
	startOver.appendChild(p);

	playGame = false;
	newGame();
}

function newGame() {
	const newGameButton = document.querySelector("#newGame");

	newGameButton.addEventListener("click", function (e) {
		randNum = Math.floor(Math.random() * 100) + 1;
		prevGuesses = [];
		lowOrHi.innerHTML = "";
		numGuesses = 1;
		userGuesses.innerHTML = "";
		userInput.removeAttribute("disabled");
		remGuesses.innerHTML = `${11 - numGuesses}`;
		startOver.removeChild(p);
		playGame = true;
	});
}
