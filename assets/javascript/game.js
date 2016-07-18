// Is there a shortcut for making the whole alphabet an option?
// var alphabet = ['A','B','C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


// Why do I need to start "wins" at 1, but in console.log it shows as zero??
var wins = 0;
var remainingGuesses = 15;
var lettersGuessed = 0;

// Display starting scoreboard.
document.getElementById("wins");
document.getElementById("remainingGuesses");

// Array of Robert De Niro movie titles.
var movieTitleArray = [
	'GOODFELLAS',
	'HEAT',
	'CASINO',
	'SLEEPERS',
	'RONIN',
	];

// Computer randomly chooses one of the movie titles from the array.
var randomMovieTitle = movieTitleArray[Math.floor(Math.random()*movieTitleArray.length)];

// Print answer to console.
console.log('Correct Answer: ' + randomMovieTitle);

// Displays one underscore per character to be guessed.
randomMovieTitle = randomMovieTitle.replace(" _ ");
// var blankGrid = document.randomMovieTitle("blanks");
// function createBlanks() {
// 	for (i = 0; i < randomMovieTitle.length; i++) {
// 		var newH2 = document.createElement("h2");
// 		newH2.innerHTML = " _ ";
// 	}
// }


// Captures Key Clicks
document.onkeyup = function(event) {

	// Determines which exact key was selected. Make it CAPS.
	var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

	// Change this to display user guess either in the correct blank or as an incorrect guess.
	alert('You guessed ' + userGuess);

	

	// Use a for loop to check charAt for each position of this guess.
	for (i = 0; i < randomMovieTitle.length; i++) {
		if(userGuess === randomMovieTitle.charAt(i)) {
			// If it matches, it replaces that blank with that letter on the game's display.  If not, it leaves it as an underscore.  Regardless, it then it checks the next charAt.
			
			// If there was a match (or multiple matches), congratulate player.
			alert('Correct!');
			// Replace the appropriate blank with userGuess.

			// Add win tally.
			document.getElementById("wins").innerHTML = wins++;
			console.log(wins);
		}
	}

	// If win tally does not increase, prompt next turn.
	if (this.wins === wins) {
		alert('Sorry -- try again.');
		// Subtract one life.
		document.getElementById("remainingGuesses").innerHTML = remainingGuesses--;
	}

	// Correct or incorrect, display the guessed letter.
	document.getElementById("lettersGuessed").innerHTML = userGuess;
	// Use APPEND to keep adding letters instead of replacing them each time.


	if (wins >= randomMovieTitle.length) {
		confirm('YOU WIN! Play Again?');
	}

	if (remainingGuesses < 1) {
		confirm('Game Over. Play Again?');
		// If OK, reset the game.
	}
		
}

	// A "Function" is created that allows us to "call" (run) the loop for any array we wish.
	// We pass in an array as an "argument".  "Array" is a reserved word, so don't write out the whole thing -- it can confuse the computer.
	function consoleInside(arr){

		// We then loop through the selected array
		for (var i = 0; i < arr.length; i++){

			// Each time we print the value inside the array
			console.log(arr[i]);
		}
	}


	// FUNCTION CALLS (Execution)
	// =======================================================================================

	// Here we call on the function to run the for-loop code on each of the below arrays
	// consoleInside(brands);
	// consoleInside(heroes);
	// consoleInside(booksOnMyShelf);
	// consoleInside(thingsInFrontOfMe);
	// consoleInside(howIFeel);