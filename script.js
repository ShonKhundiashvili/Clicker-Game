'use strict';

const clickMeBtn = document.querySelector('.click-me');
const RestartBtn = document.querySelector('.res-btn');

let HighScore = 0;
let CurrentScore = 0;
let IsTimerOn = false;

document.querySelector('.label-score').textContent = CurrentScore;
document.querySelector('.label-high-score').textContent = HighScore;
document.querySelector('.label-timer').textContent = 10;

function TurnOnTimer() {
  IsTimerOn = true;
  const interval = setInterval(() => {
    if (TimerSeconds !== 0) {
      --TimerSeconds;
      document.querySelector('.label-timer').textContent = TimerSeconds;
      RestartBtn.disabled = true;
    } else {
      clearInterval(interval);
      document.querySelector('.label-timer').textContent = '⛔';
      document.querySelector('.label-high-score').textContent = HighScore;

      clickMeBtn.disabled = true;
      RestartBtn.disabled = false;
      IsTimerOn = false;
    }
  }, 1000);
  ++CurrentScore; // i need to increment here because of if and else statement of click button event listener
  document.querySelector('.label-score').textContent = CurrentScore;
  let TimerSeconds = 10;
  document.querySelector('.label-timer').textContent = TimerSeconds;
  RestartBtn.disabled = true;
}

function UpdateScore() {
  ++CurrentScore;
  if (CurrentScore > HighScore) HighScore = CurrentScore;
  document.querySelector('.label-score').textContent = CurrentScore;
}

function RestartGame() {
  CurrentScore = 0;
  document.querySelector('.label-score').textContent = CurrentScore;
  clickMeBtn.disabled = false;
  let ResTimerSeconds = 10;
  document.querySelector('.label-timer').textContent = ResTimerSeconds;

  const interval = setInterval(() => {
    if (TimerSeconds !== 0) {
      --TimerSeconds;
      document.querySelector('.label-timer').textContent = TimerSeconds;
    } else {
      clearInterval(interval);
      IsTimerOn = false;
      clickMeBtn.disabled = true;
      document.querySelector('.label-timer').textContent = '⛔';
      document.querySelector('.label-high-score').textContent = HighScore;
      RestartBtn.disabled = false;
    }
  }, 1000);
}

clickMeBtn.addEventListener('click', function () {
  if (IsTimerOn === false) TurnOnTimer();
  else UpdateScore();
});

RestartBtn.addEventListener('click', function () {
  RestartGame();
});
