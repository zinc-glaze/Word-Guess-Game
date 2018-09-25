//GLOBAL VARIABLES
//Array of words that user will try to guess letter by letter
var words = ["tron", "dune", "brazil", "terminator", "metropolis", "godzilla", "westworld", "arrival", "frankenstein", "solaris", "alien", "robocop", "videodrome", "akira", "predator", "mothra", "gattaca", "primer", "barbarella", "stargate", "inception", "looper", "existenz", "alphaville", "snowpiercer", "contact", "her", "annihilation", "scanners", "zardoz"];

//INITIALIZE GAME SETTINGS
//Array to hold letters guessed
var lettersGuessed = [];
//The game starts with a score of 0
var winCount = 0;
//Variable to hold index of current word
var wordIndex = 0;
//Variable to keep track of guesses remaining
var guessesRemain = 10;

//FUNCTIONS

//Resets guesses variables to initial state, chooses word from array, and displays word as blanks
function chooseWord() {
    //resets guesses remaining and list of guessed letters
    lettersGuessed = [];
    document.querySelector("#letters-display").innerHTML = "";
    guessesRemain = 10;
    updateGuesses();
    // If there are still more words, choose the next one.
    if (wordIndex <= (words.length - 1)) {
        //Creates blank spaces in wordDisplay for each letter of current word
        document.querySelector("#word-display").innerHTML = "";
        for (var i = 0; i < words[wordIndex].length; i++) {
            document.querySelector("#word-display").innerHTML += "_";
        }
        console.log(words[wordIndex]);
    }
    // If there aren't, render the end game screen.
    else {
    document.querySelector("#word-display").innerHTML = "There are no more words to guess!";
    document.querySelector("#win-count").innerHTML = winCount + " out of " + words.length;
    }
}

//Updates the wins displayed in the browser
function updateWins() {
    document.querySelector("#win-count").innerHTML = winCount;
}

//Updates the letters guessed displayed in the browser
function updateLetters(guess) {
        document.querySelector("#letters-display").innerHTML += guess;
}

//Updates the guesses remaining displayed in the browser
function updateGuesses() {
    document.querySelector("#guesses-remaining").innerHTML = guessesRemain;
}

//Updates word to display correctly guessed letters
function updateWordDisplay() {
    document.querySelector("#word-display").innerHTML = "";
    for (var j = 0; j < words[wordIndex].length; j++) {
        if (lettersGuessed.indexOf(words[wordIndex][j]) == -1) {
            document.querySelector("#word-display").innerHTML += "_";
        }
        else {
            document.querySelector("#word-display").innerHTML += words[wordIndex][j];
        }  
    }
}

//MAIN PROCESS

//Calls function to choose first word and begin game
chooseWord();

//When user presses key, function runs
document.onkeyup = function(event) {

    // If there are no more words, stop the function.
    if (wordIndex === words.length) {
        return;
    }

    //Determines which key is pressed and assigns to variable userKey
    var userKey = event.key.toLowerCase();

    //If userKey is already in lettersGuessed, ignore key press
    if (lettersGuessed.indexOf(userKey) >= 0) {
        return;
    }

    //If userKey letter is not in the current word, update lettersGuessed array and update guessesRemain variable
    else if (words[wordIndex].indexOf(userKey) == -1) {
        lettersGuessed.push(userKey);
        updateLetters(userKey);
        guessesRemain--;
        updateGuesses();
    }

    //If userKey letter is in the current word, update lettersGuessed array and replace the blanks in word-display with the correct letter
    else {
        lettersGuessed.push(userKey);
        updateWordDisplay();
    }

    //If all letters have been guessed correctly, alert win and then restart game with next word
    if (document.querySelector("#word-display").innerHTML == words[wordIndex]) {
        updateWordDisplay();
        winCount++;
        updateWins();
        document.querySelector("#word-reveal").innerHTML = "Correct! The movie was:  " + words[wordIndex];
        wordIndex++;
        chooseWord();
    }

    //If user runs out of guesses, alert loss and then restart game with next word
    if (guessesRemain == 0) {
        document.querySelector("#word-reveal").innerHTML = "Sorry! The movie was:  " + words[wordIndex];
        wordIndex++;
        chooseWord();
    }

    

};




