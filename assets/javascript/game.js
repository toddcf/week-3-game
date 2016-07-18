// Is there a shortcut for making the whole alphabet an option?
// var alphabet = ['A','B','C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var wins = 0;
var remainingGuesses = 15;
var lettersGuessed = 0;

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
// randomMovieTitle = randomMovieTitle.replace(/\s/g, "_");




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
			// Also add the correct letter to "Letters Guessed."
			document.getElementById("lettersGuessed").innerHTML = userGuess;
			// Add win tally.
			// Use APPEND to keep adding letters instead of replacing them each time.
			document.getElementById("wins").innerHTML = wins++;
		}
		else {
			// If there were no matches, prompt next turn.
			alert('Sorry -- try again.');
			// Subtract one life.
			document.getElementById("remainingGuesses").innerHTML = remainingGuesses--;
			// Add the incorrect letter to "Letters Guessed."
			// Use APPEND to keep adding letters instead of replacing them each time.
			document.getElementById("lettersGuessed").innerHTML = userGuess;
		}
	}

	
	// document.getElementById("losses").innerHTML = losses;
		
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