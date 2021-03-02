/**
 * @purpose :
 * 1. Set up word instance property as array of lower case letters
 * 2. Set up another instance property to store guessed letters
 * 3. Create method that gives you the word puzzle back
 *
 * If `cat` is the word, and user has no guesses yet, should return '***'
 * If guessed 'c', 'b' and 't', should return 'c*t'
 *
 *
 * @param {array} word - array of lower case letters
 * @param {array} remainingGuesses
 */
const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split('');
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = ['c'];
};

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

// Hangman.prototype.getPuzzle = function () {
//   let wordArray = this.word.split('');
//   let hashedWord = '';
//   wordArray.forEach((letter) => {
//     hashedWord += '*';
//   });
//   return hashedWord;
// };

const game1 = new Hangman('cat', 3);

console.log(game1.getPuzzle());
