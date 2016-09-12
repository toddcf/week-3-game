// GLOBAL VARIABLES:

// Array of Robert De Niro movie titles.
var wordOptions		 	= [
	'GOODFELLAS',
	'HEAT',
	'CASINO',
	'SLEEPERS',
	'RONIN',
	];
var selectedWord 		= "";
var lettersInWord 		= [];
var numBlanks 			= 0;
var blanksAndSuccesses 	= [];
var wrongLetters		= [];

// Game Counters:
var winCount			= 0;
var lossCount			= 0;
var guessesLeft			= 0;


// FUNCTIONS:

// Start Game Function:
function startGame(){
	// Computer randomly chooses one of the movie titles from the array.
	selectedWord	= wordOptions[Math.floor(Math.random()*wordOptions.length)];
	// Break selectedWord apart into individual letters:
	lettersInWord	= selectedWord.split("");
	// Determine number of blanks for selectedWord:
	numBlanks		= lettersInWord.length;

	// Reset SOME of the variables for each successive game:
	guessesLeft			= 9;
	wrongLetters		= [];
	blanksAndSuccesses	= [];

	// Populate blanksAndSuccesses with correct number of blanks:
	for ( var i = 0; i < numBlanks; i++) {
		blanksAndSuccesses.push("_");
	}

	// Change HTML to reflect game conditions:

	// Print blanks to HTML page:
	document.getElementById("wordToGuess").innerHTML	= blanksAndSuccesses.join("  ");
	// Print number of guesses left to HTML page:
	// document.getElementById("numGuesses").innerHTML		= guessesLeft;
	// Print winCount to HTML page:
	document.getElementById("winCounter").innerHTML		= winCount;
	// Print lossCount to HTML page:
	document.getElementById("lossCounter").innerHTML	= lossCount;

	// Testing / Debugging:
	console.log('Correct Answer: ' + selectedWord);
	console.log(lettersInWord);
	console.log('Number of Blanks: ' + numBlanks);
	console.log(blanksAndSuccesses);
}

// Check Letters:
function checkLetters(letter) {
	// Does the letter exist anywhere in the selectedWord?
	var isLetterInWord = false;

	for (var i = 0; i < numBlanks; i++) {
		if (selectedWord[i] == letter) {
			isLetterInWord = true;
			console.log('Letter Found.');
		}
	}

	// Check where in word letter appears, then populate
	// blanksAndSuccesses array.
	if (isLetterInWord) {
		for (var i = 0; i < numBlanks; i++) {
			if (selectedWord[i] == letter) {
				blanksAndSuccesses[i] = letter;
			}
		}
	}

	// Letter wasn't found:
	else {
		wrongLetters.push(letter);
		guessesLeft--
	}

	// Testing and debugging:
	console.log(blanksAndSuccesses);
}

// Check each time to see if round is finished:
function roundComplete() {
	console.log(
		"Win Count: " + winCount + 
		" | Loss Count: " + lossCount + 
		" | Guesses Left: " + guessesLeft);

	// Update HTML each round:
	document.getElementById("guessesLeft").innerHTML = guessesLeft;
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

	// Check if user won:
	if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
		// Update win counter:
		winCount++;
		// Push win counter to HTML:
		document.getElementById("winCounter").innerHTML = winCount;
		// Congratulate player and offer new game:
		confirm("You Won! Would you like to play again?");

		// FIX THIS TO start new game ONLY if they click OK. 
		// Not if they click Cancel.
		startGame();
	}
	// Check if user lost:
	else if (guessesLeft == 0) {
		// Update loss counter:
		lossCount++;
		// Push loss counter to HTML:
		document.getElementById("lossCounter").innerHTML = lossCount;
		// Offer player a new game:
		confirm("Sorry, you've used up all your guesses. Would you like to start a new game?");
		// FIX THIS TO start new game ONLY if they click OK. Not if they click Cancel.
		startGame();
	}
}


// MAIN PROCESS:

// Call the startGame function:
startGame();

// Captures Key Clicks
document.onkeyup = function(event) {

	// Determines which exact key was selected. Makes it CAPS.
	// FIX THIS TO ONLY ACCEPT ALPHANUMERIC KEYS. Right now, arrow 
	// keys, etc. are being logged as entries.
	var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
	checkLetters(userGuess);
	roundComplete();

	// Show the letter guessed:
	console.log('You guessed ' + userGuess);

}