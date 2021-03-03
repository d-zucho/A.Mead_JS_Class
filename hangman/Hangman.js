/**
 *
 * @param {string} word - word to be guessed
 * @param {number} remainingGuesses - number of guesses
 */
class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word;
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = 'playing';
  }
  getPuzzle() {
    let puzzle = '';

    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === ' ') {
        puzzle += letter;
      } else {
        puzzle += '*';
      }
    });

    return puzzle;
  }
}

// const Hangman = function (word, remainingGuesses) {
//   this.word = word.toLowerCase().split('');
//   this.remainingGuesses = remainingGuesses;
//   this.guessedLetters = [];
//   this.status = 'playing';
// };

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
