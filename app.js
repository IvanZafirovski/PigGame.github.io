"use strict";
// Selecting Elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//Starting condtitions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

//User rolls dice functionality

btnRoll.addEventListener("click", function () {
  //1.Generationg dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //2.Display dice
  diceEl.classList.remove("hidden");
  // src is == to src in html
  diceEl.src = `dice-${dice}.png`;

  // Check for rolled 1:if true swith to nexy player
  if (dice !== 1) {
    // add dice to current score
  } else {
    //swith to next player
  }
});
