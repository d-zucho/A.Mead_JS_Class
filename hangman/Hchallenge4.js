/**
 *
 * 1. Setup new 'status' property with initial value of 'playing'
 * 2. Create method for recalculating status to 'playing', 'finished', or 'failed'
 * 3. Call that method after a guess is processed
 * 4. Use console.log to print status
 */

// Hangman.prototype.getStatus = function (game) {
//   if (game1.remainingGuesses === 0) {
//     game1.status = 'failed';
//     console.log(game1.status);
//   } else {
//     console.log('maybe working?');
//   }
// };

// game1.word.forEach(function (letter) {
//   if (game1.guessedLetters.includes(letter)) {
//     console.log('yay');
//     game1.status = 'finished';
//   } else {
//     console.log('aww no');
//   }
// });

Hangman.prototype.calculateStatus = function () {
  const finished = this.word.every((letter) => {
    return this.guessedLetters.includes(letter);
  });
};
