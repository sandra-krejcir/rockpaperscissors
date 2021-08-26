"use strict";
let choiceUser;
let compChoice;
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
    choiceUser = "rock";
  } else if (this.classList.contains("paper")) {
    console.log("paper clicked");
    choiceUser = "paper";
  } else {
    console.log("scissors clicked");
    choiceUser = "scissors";
  }

  randomChoice();
}

function randomChoice() {
  console.log("function randomChoice()");

  compChoice = Math.round(Math.random() * 2);
  showAnimation();
}

function showAnimation() {
  console.log("function showAnimation()");
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
  document
    .querySelector("#player2")
    .addEventListener("animationend", revealWinner);
}

function revealWinner() {
  console.log("function revealWinner()");
  if (choiceUser === "rock") {
    document.querySelector("#player2").classList.add("rock");
    if (compChoice === 0) {
      document.querySelector("#player1").classList.add("scissors");
      youWin();
    } else if (compChoice === 1) {
      document.querySelector("#player1").classList.add("paper");
      youLose();
    } else {
      document.querySelector("#player1").classList.add("rock");
      draw();
    }
  } else if (choiceUser === "paper") {
    document.querySelector("#player2").classList.add("paper");
    if (compChoice === 0) {
      document.querySelector("#player1").classList.add("scissors");
      youLose();
    } else if (compChoice === 1) {
      document.querySelector("#player1").classList.add("paper");
      draw();
    } else {
      document.querySelector("#player1").classList.add("rock");
      youWin();
    }
  } else {
    document.querySelector("#player2").classList.add("scissors");
    if (compChoice === 0) {
      document.querySelector("#player1").classList.add("scissors");
      draw();
    } else if (compChoice === 1) {
      document.querySelector("#player1").classList.add("paper");
      youWin();
    } else {
      document.querySelector("#player1").classList.add("rock");
      youLose();
    }
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
  document.querySelector("#draw").classList.remove("hidden");
}
