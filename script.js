'use strict';

let hiddenNumber = Math.ceil(Math.random() * 20);
let score = Number(document.querySelector('.score').textContent);
let highscore = 0;

console.log(score, typeof score);

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'Enter a number';
  } else if (guess === hiddenNumber) {
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
      highscore = Number(document.querySelector('.highscore').textContent);
    }
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = hiddenNumber;
  } else if (guess != hiddenNumber && score != 1) {
    if (guess > hiddenNumber) {
      document.querySelector('.message').textContent = 'Too High';
    } else if (guess < hiddenNumber) {
      document.querySelector('.message').textContent = 'Too Low';
    }
    score--;
    document.querySelector('.score').textContent = score;
  } else if (score === 1) {
    score = 0;
    document.querySelector('.message').textContent = 'Game Over';
  }
});

document.querySelector('.again').addEventListener('click', () => {
  hiddenNumber = Math.ceil(Math.random() * 20);
  document.querySelector('.score').textContent = 20;
  score = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
});

/*If score is higher change highscore. If not, dont change highscore.

*/
