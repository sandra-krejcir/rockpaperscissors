"use strict";
let winner = "";
let userChoice;
window.addEventListener("DOMContentLoaded", begin);

function begin() {
  console.log("function begin()");
  document.querySelectorAll("#buttons button").forEach((elm) => {
    elm.addEventListener("click", userChoice);
  });
  // userChoice();
}

function userChoice() {
  console.log("buttonClicked", this);

  if (this.classList.contains("rock")) {
    console.log("rock clicked");
  } else if (this.classList.contains("paper")) {
    console.log("paper clicked");
  } else {
    console.log("scissors clicked");
  }

  randomChoice();
}

function randomChoice() {
  console.log("function randomChoice()");
  showAnimation();
}

function showAnimation() {
  console.log("function showAnimation()");
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("player2").classList.add("shake");
  revealWinner();
}

function revealWinner() {
  console.log("function revealWinner()");

  if (winner === "computer") {
    youLose();
  } else if (winner === "user") {
    youWin();
  } else {
    draw();
  }
}

function youWin() {
  console.log("function youWin()");
  document.querySelector("#win").classList.remove("hidden");
}

function youLose() {
  console.log("function youLose()");
  document.querySelector("#lose").classList.remove("hidden");
}

function draw() {
  console.log("function draw()");
  document.querySelector("#draw").classList.remove("hidden;");
}
