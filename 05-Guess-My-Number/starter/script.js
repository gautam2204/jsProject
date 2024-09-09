'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  if (guess == 0) {
    document.querySelector('.message').textContent = 'No Number !!';
  } else if (guess == secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number 🥳';
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'TOO High 😭';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'TOO Low 😭';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

// const val = function()
// {
//     console.log('abc');
// }
// val();
