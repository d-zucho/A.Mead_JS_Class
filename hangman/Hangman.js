/**
 *
 * @param {string} word - word to be guessed
 * @param {number} remainingGuesses - number of guesses
 */
const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split('');
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = [];
};

/**
 * function that desguises letters and displays
 * word to be guessed
 */
Hangman.prototype.getPuzzle = function () {
  let puzzle = '';

  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter) || letter === ' ') {
      puzzle += letter;
    } else {
      puzzle += '*';
    }
  });

  return puzzle;
};

/**
 * function to retrieve and compare user's inputted guess
 * @param {string} guess users letter guess
 */
Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase();
  const isUnique = !this.guessedLetters.includes(guess);
  const isBadGuess = !this.word.includes(guess);

  if (isUnique) {
    this.guessedLetters.push(guess);
  }
  if (isUnique && isBadGuess) {
    this.remainingGuesses--;
  }
};

// const game1 = new Hangman('cat', 2);
// const guessesLeft = document.createElement('h4');
// guessesLeft.textContent = ` Guesses Remaining: ${game1.remainingGuesses}`;
// document.querySelector('.guessesLeft').appendChild(guessesLeft);

// console.log(game1.getPuzzle());
// let gameWord = document.createElement('h2');
// gameWord.textContent = game1.getPuzzle();
// document.querySelector('.word').appendChild(gameWord);
// console.log(game1.remainingGuesses);

// window.addEventListener('keypress', function (e) {
//   // e gives us access to 'charCode' whis lets us know what happens
//   const guess = String.fromCharCode(e.charCode);
//   game1.makeGuess(guess);
//   console.log(game1.getPuzzle());
//   console.log(game1.remainingGuesses);
// });

// document.querySelector('.inputForm').addEventListener(
//   'submit',
//   function (e) {
//     e.preventDefault();
//     const guess = document.querySelector('#userGuess').value;
//     game1.makeGuess(guess);
//     document.querySelector('#userGuess').value = '';
//     game1.makeGuess(guess);
//     document.querySelector('.word').innerHTML = '';

//     // refresh word value if letter match
//     gameWord.textContent = game1.getPuzzle();
//     document.querySelector('.word').appendChild(gameWord);
//     document.querySelector('.guessesLeft').innerHTML = '';
//     document.querySelector('.guessesLeft').appendChild(guessesLeft);
//   }
// const currentPuzzle = game1.getPuzzle()
// document.querySelector('.word')
// );
