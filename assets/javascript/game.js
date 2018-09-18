//Create array of game-themed words
var words = ["sting", "cher", "bono", "eazy-e", "diddy", "prince", "donovan", "jewel"];
// var words = ["prince"];

//hooks variables into document elements
var wordDisplay = document.getElementById("word-display");
var lettersDisplay = document.getElementById("letters-display");
var guessesRemaining = document.getElementById("guesses-remaining");
var winCount = document.getElementById("win-count");

//Randomly chooses from the words array. This is the computer's pick.
var wordChoice = words[Math.floor(Math.random() * words.length)];
console.log(wordChoice);
console.log(wordChoice.length);

//Creates blank spaces in wordDisplay for each letter of wordChoice
for (var i = 0; i < wordChoice.length; i++) {
    wordDisplay.textContent += "_";
}

//When the user hits a key
document.onkeyup = function(checkKey) {
    //Determines which key is pressed and assigns to variable userKey
    var userKey = checkKey.key;
    //If userKey is already in lettersDisplay, alert user
    if (lettersDisplay.textContent.indexOf(userKey) >= 0) {
        alert("You have already guessed that letter! Press enter to continue.")
    }
    //If userKey letter is not in wordChoice, add the letter to the lettersDisplay object and decrease guessesRemaining by 1
    else if (wordChoice.indexOf(userKey) === -1) {
        lettersDisplay.textContent += userKey;
        guessesRemaining.textContent = (guessesRemaining.textContent - 1);
    }
    //If userKey letter is in wordChoice, replace the blanks in wordDisplay with the letter
    else if (wordChoice.indexOf(userKey) !== -1) {
        //Add code here to check index of letter, etc.
        for (var i = 0; i < wordChoice.length; i++) {
            if (userKey === wordChoice[i]) {
                console.log(wordChoice[i]);
                wordDisplay.textContent[i] = userKey;
            }
        }


    }
    

};

//If guessesRemaining reaches 0, the game ends
if (guessesRemaining.textContent === 0) {
    alert("Game Over - You Lost!");
}
//If all letters of the word are guessed correctly, the game ends
if (wordDisplay.textContent === wordChoice) {
    winCount.textContent = (winCount.textContent + 1);
    alert("You Guessed the Word - You Win!");
}

