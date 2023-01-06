'use strict';

/*
const htmlText = document.querySelector('.kitkat');
console.log(htmlText);

document.querySelector('.number').textContent = 13;
document.querySelector('.guess').value = 23;
document.querySelector('.score').textContent = 10;

document.querySelector('body').addEventListener('click', function () {
  console.log('click');
  // document.body.style.backgroundColor = 'brown';
  document.querySelector('body').classList.add('brown');
  // document.querySelector('body').style.backgroundColor = 'brown';
});
*/

/*
// variable correct number

//logic- if not right ---'INcorrect' if right, 'correct'
*/

// message here

const messageElement = document.querySelector('.kitkat');
console.log(messageElement);
// check input
const inputElement = document.querySelector('.guess');
console.log(inputElement);
//checkbutton
const checkElement = document.querySelector('.check');
console.log(checkElement);

let secretNumber = Math.trunc(Math.random() * 100 + 1);
displayNumber(secretNumber);
console.log('check secret number', secretNumber);

let score = 20;
displayScore(score);
let highscore = 0;

//display functions
const displayMessage = function (message) {
  document.querySelector('.kitkat').textContent = message;
};

const displayScore = function (message) {
  document.querySelector('.score').textContent = message;
};

const displayNumber = function (message) {
  document.querySelector('.number').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  console.log('click');
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //if not a number
  if (!guess) {
    displayMessage('Need to input number');
    //if correct
  } else if (guess === secretNumber) {
    displayMessage('correct!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      displayMessage('New Highscore!');
      document.querySelector('.highscore').textContent = highscore;
    }
    // else if (guess !== secretNumber) {
    //   if (score < 0) {
    //     score = score - 1;
    //     document.querySelector('.score') = score;
    //     document.querySelector(".kitkat") = guess > secretNumber ? `Too High` : `Too low`;
    //   }
    // }
  } else if (guess !== secretNumber) {
    console.log('score', score);
    if (score > 0) {
      console.log('score2', score);
      score = score - 1;
      displayMessage(guess > secretNumber ? 'too high!' : `too low`);
      displayScore(score);
    } else {
      console.log('score3', score);
      displayScore(0);
      displayMessage('You lost the game!');
    }
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     score = score - 1;
    //     document.querySelector('.score').textContent = score;
    //     document.querySelector('.kitkat').textContent = 'too low!';
    //   } else {
    //     document.querySelector('.score').textContent = 0;
    //     document.querySelector('.kitkat').textContent = 'You lost the game!';
    //   }
    // }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // change all state
  score = 20;
  secretNumber = Math.trunc(Math.random() * 100 + 1);

  // update all UI
  // document.querySelector('.score').textContent = '20';
  displayScore(score);
  displayNumber('?');
  document.querySelector('body').style.backgroundColor = '#222';
  console.log('.score');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '13rem';
  console.log('check secret number', secretNumber);
});
