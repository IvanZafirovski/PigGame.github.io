"use strict";
// Selecting Elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//Starting condtitions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// this can not be inside the function due to it will set to zero each time we click
let currentScore = 0;
let activePlayer = 0;

//User rolls dice functionality

btnRoll.addEventListener("click", function () {
  //1.Generationg dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //2.Display dice
  diceEl.classList.remove("hidden");
  // src is == to src in html
  diceEl.src = `dice-${dice}.png`;

  // Check for rolled 1
  if (dice !== 1) {
    // add dice to current score
    currentScore += dice; // is equel to --> currentScore = currentScore + dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore; // this is more dinamic way

    // current0El.textContent = currentScore; // Change later this line will chage only player 0
  } else {
    //swith to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0; //Ternary operator if active player is 0 then the new active player is 1 else is 0
    player0El.classList.toggle("player--active"); //toogle method is if is there removed it, if is not there add it
    player1El.classList.toggle("player--active");
  }
});
