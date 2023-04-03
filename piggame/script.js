'use strict';
//Select by ID
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScore = 0;
let playerTurn = 0;
let isPlaying = true;
let scores = [0, 0];

const switchPlayer = function () {
  playerTurn = playerTurn === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (isPlaying) {
    const numberRolled = Math.floor(Math.random() * 6 + 1);
    dice.classList.remove('hidden');
    dice.src = `dice-${numberRolled}.png`;

    if (numberRolled !== 1) {
      currentScore += numberRolled;
      document.getElementById(`current--${playerTurn}`).textContent =
        currentScore;
      //current0.textContent = currentScore;
    } else {
      document.getElementById(`current--${playerTurn}`).textContent = 0;
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (isPlaying) {
    scores[playerTurn] += currentScore;
    // console.log(
    //   `Hold button Score is ${currentScore}, scores ${scores}, playerTurn: ${playerTurn}`
    // );
    document.getElementById(`score--${playerTurn}`).textContent =
      scores[playerTurn];

    if (scores[playerTurn] >= 100) {
      isPlaying = false;
      document
        .querySelector(`.player--${playerTurn}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${playerTurn}`)
        .classList.add(`player--active`);
      document.querySelector(`.btn--roll`).classList.add(`hidden`);
      document.querySelector(`.btn--hold`).classList.add(`hidden`);
      dice.classList.add(`hidden`);
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  score0.textContent = 0;
  score1.textContent = 0;
  currentScore = 0;
  dice.classList.remove('hidden');
  btnRoll.classList.remove(`hidden`);
  btnHold.classList.remove(`hidden`);
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  dice.classList.remove('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  playerTurn = 0;
  scores = [0, 0];
  isPlaying = true;
});
