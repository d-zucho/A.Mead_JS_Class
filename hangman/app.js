//! Status function test
Hangman.prototype.calculateStatus = function () {
  // makes sure every letter has a match before declaring 'finished'
  const finished = this.word.every((letter) => {
    return this.guessedLetters.includes(letter);
  });

  // declare status according to options
  if (this.remainingGuesses === 0) {
    this.status = 'failed';
    console.log(this.status);
  } else if (finished) {
    this.status = 'finished';
    console.log(this.status);
  } else {
    this.status = 'playing';
    console.log(this.status);
  }
};

//! Show message for each status
Hangman.prototype.getStatusMessage = function () {
  if (this.status === 'failed') {
    return `Nice try! The word was ${this.word.join('')}`;
  } else if (this.status === 'finished') {
    return `Nice job! You guessed the word!`;
  }
};

//! makeGuess function
Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase();
  const isUnique = !this.guessedLetters.includes(guess);
  const isBadGuess = !this.word.includes(guess);

  // make sure user entered only one letter and no blanks
  if (guess !== '' && guess.length < 2) {
    if (isUnique) {
      this.guessedLetters.push(guess);
    }
    if (isUnique && isBadGuess) {
      this.remainingGuesses--;
    }
  } else {
    alert('Please enter a letter');
  }
  this.calculateStatus();
};
// create new game
const game1 = new Hangman('cat', 2);

// add guesses left to DOM
function getRemainingGuesses(game) {
  const guessesLeft = document.createElement('h4');
  guessesLeft.textContent = ` Guesses Remaining: ${game.remainingGuesses}`;
  document.querySelector('.guessesLeft').appendChild(guessesLeft);
}

function displayWrongGuesses(game) {
  const wrongGuesses = document.createElement('p');
  wrongGuesses.textContent = `Guessed Letters: ${game.guessedLetters}`;
  document.querySelector('.lettersUsed').appendChild(wrongGuesses);
}

console.log(game1.getPuzzle());
let gameWord = document.createElement('h2');
gameWord.textContent = game1.getPuzzle();
document.querySelector('.word').appendChild(gameWord);
console.log(game1.remainingGuesses);

getRemainingGuesses(game1);
displayWrongGuesses(game1);

//! EVENT LISTENER
document.querySelector('.inputForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const guess = document.querySelector('#userGuess').value;

  // clear input
  document.querySelector('#userGuess').value = '';
  document.querySelector('.word').innerHTML = '';

  game1.makeGuess(guess);
  // refresh word value if letter match
  gameWord.textContent = game1.getPuzzle();
  document.querySelector('.word').appendChild(gameWord);

  // clear old display
  document.querySelector('.guessesLeft').innerHTML = '';
  document.querySelector('.lettersUsed').innerHTML = '';

  // update display with new values
  getRemainingGuesses(game1);
  displayWrongGuesses(game1);
});
