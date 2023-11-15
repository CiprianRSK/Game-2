'use strict';

// console.log(document.querySelector('.message').textContent);
// DOM MANIPULATION

// DOCUMENT OBJECT MODEL
// REPREZINTA O STRUCTURA A DOCUMENTELOR DIN HTML. II PERMITE JS-ului SA
// ACCESEZE ELEMENTELE DIN HTML SI CSS SI SA LE MANIPULEZE IN JS.
// DOM ESTE UN API - SCRIS IN JS ( O LIBRARIE )

//document.querySelector('.message').textContent = 'Correct Number!';
//console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.message').textContent = 'RSK';
// document.querySelector('.number').textContent = '69';
// document.querySelector('.score').textContent =
//   "You're HACKED by RSK. Good bye 🎃";

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// HANDLING CLICK EVENTS - SA FACA CEVA CAND DAM CLICK PE CEVA.

// UN EVENT POATE INSEMNA UN CLICK, O TASTA APASATA, MISCAREA MOUSE-ULUI ETC.

// Math.trunc - elimina numerele de dupa virgula, in loc de 19.5 avem 19 fix.
// Math.random - ne genereaza numere random.
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');
    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🤩 Correct Number!';
    displayMessage('🤩 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--; // score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
    // } else if (guess > secretNumber) {
    //   // When guess is too low
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📉 Too low!';
    //     score--; // score = score - 1;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '💥 You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// REFACTORING
// Mereu sa evitam sa duplicam codul si sa folosim cod duplicat.
// Refactoring inseamna sa restructuram codul, fara a-i schimba functionalitatea
// De fiecare data cand repetam un cod, il putem pune intr-o functie si chema
// functia de fiecare data cand avem nevoie, ex de mai sus cu .message ;
