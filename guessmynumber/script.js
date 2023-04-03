'use strict';
//selects element from the HTML
document.querySelector('.message').textContent;

let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

const displayMsg = function (message) {
  document.querySelector('.message').textContent = message;
};

//Adds event on click. Runs function on click. Key word 'click'.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //No input
  if (!guess) {
    displayMsg('No number selected!');
  }
  //Correct number
  else if (guess === secretNumber && score >= 1) {
    displayMsg('That is the correct number!');

    document.querySelector('.number').textContent = secretNumber;
    //Manipulate CSS
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //Answer too high
  // else if (guess > secretNumber && score >= 1) {
  //   document.querySelector('.message').textContent = 'Too high!';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  //   if (score === 0) {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //   }
  // }
  // //Answer too low
  // else if (guess < secretNumber && score >= 1) {
  //   document.querySelector('.message').textContent = 'Too low!';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  //   if (score === 0) {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //   }
  // }
  else if (guess !== secretNumber && score >= 1) {
    guess < secretNumber ? displayMsg('Too low!') : displayMsg('Too high!');
    score--;
    document.querySelector('.score').textContent = score;
    if (score === 0) {
      displayMsg('You lost the game!');
    }
  }
});

//Restore clicking on 'Again'
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
