let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessField = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");

let resetButton = document.querySelector(".resetButton");
let guessCount = 1;

function checkGuess() {
  if (guessField.value === null || guessField.value === "") {
    return false;
  } else {
    let guessNumber = Number(guessField.value);
    if (guessCount === 1) {
      guesses.textContent = "Previous guess: ";
    }
    guesses.textContent += guessNumber + " ";

    if (guessNumber === randomNumber) {
      //WINNER
      lastResult.style.backgroundColor = "green";
      lastResult.textContent = "Winner";
      setGameOver();
    } else if (guessCount === 10) {
      lastResult.textContent = "Game Over";
      setGameOver();
    } else {
      lastResult.textContent = "Wrong";
      lastResult.style.backgroundColor = "red";
      if (guessNumber < randomNumber) {
        lowOrHi.textContent = "too low";
      } else if (guessNumber > randomNumber) {
        lowOrHi.textContent = "too high";
      }
    }
    guessCount++;
    guessField.value = "";
    guessField.focus();
  }
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessSubmit.disabled = true;
  guessField.disabled = true;
  resetButton.style.opacity = "1";
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;

  const resultParas = document.querySelectorAll(".resultParas p");

  for (let i = 0; i < resultParas.length; i++) {
    resultParas[i].textContent = "";
  }

  guessSubmit.disabled = false;
  guessField.disabled = false;
  guessField.focus();

  resetButton.style.opacity = "0";
  lastResult.style.backgroundColor = "transparent";
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
