<script type="text/javascript">

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
	console.log(randomMovieTitle);

	// Displays one underscore per character to be guessed.
	// randomMovieTitle = randomMovieTitle.replace(/\s/g, "_");
	
	


	// Captures Key Clicks
	document.onkeyup = function(event) {

		// Determines which exact key was selected. Make it CAPS.
		var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

		// Change this to display user guess either in the correct blank or as an incorrect guess.
		alert(userGuess);

		// For starters, experimenting with "Heat."
		// Does the options array start counting at 0 or 1?  I started at 0.
		if randomMovieTitle = movieTitleArray[10] {

			// Use a for loop to check charAt for each position of this guess.
			// If it matches, it replaces that blank with that letter on the game's display.  If not, it leaves it as an underscore.  Regardless, it then it checks the next charAt.
			// If there was a match (or multiple matches), congratulate player.
			// If there were no matches, subtract one life.
			// Prompt next turn.
			if(userGuess === charAt(0)) {

			}
				// Does "wins" only display after the full word is guessed?  Not after each correct character guess?
				wins++;
				// Display heat1995[0];
			}

			if(userGuess == 'p' && computerGuess == 'r') {
				wins++;
			}

			if(userGuess == 'p' && computerGuess == 's') {
				losses++
			}

			if(userGuess == 's' && computerGuess == 'r') {
				losses++;
			}

			if(userGuess == 's' && computerGuess == 'p') {
				wins++
			}

		document.getElementById("wins").innerHTML = wins;
		document.getElementById("losses").innerHTML = losses;
		document.getElementById("ties").innerHTML = ties;
			
		}
	}

		// A "Function" is created that allows us to "call" (run) the loop for any array we wish.
		// We pass in an array as an "argument".  "Array" is a protected word, so don't write out the whole thing -- it can confuse the computer.
		function consoleInside(arr){

			// We then loop through the selected array
			for (var i = 0; i < arr.length; i++){

				// Each time we print the value inside the array
				console.log(arr[i]);
			}
			console.log('---------');
		}


		// FUNCTION CALLS (Execution)
		// =======================================================================================

		// Here we call on the function to run the for-loop code on each of the below arrays
		consoleInside(brands);
		consoleInside(heroes);
		consoleInside(booksOnMyShelf);
		consoleInside(thingsInFrontOfMe);
		consoleInside(howIFeel);


	</script>