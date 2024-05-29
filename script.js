'use strict';

//PROJECT 1:GUESS THE GENERATED NUMBER

//variables
let message = document.querySelector('.message'); //displayed if guess = generated
let score = document.querySelector('.score'); //try to maintain a score variable in code ie.let score = 20;
let highscore = document.querySelector('.highscore');
let guessInputBox = document.querySelector('.guess');
let buttonCheck = document.querySelector('.btn-check');
let buttonAgain = document.querySelector('.btn-again');
let number = document.querySelector('.number');
let body = document.querySelector('body');
let secretNumber; //should be global

//calling function to generate a number for first trail of game
generateNumber();

function generateNumber() {
  //called at starting and when again button is clicked
  //generating random number
  let min = 1;
  let max = 20;
  secretNumber = Math.floor(Math.random() * (max - min + 1)) + min; //if Math.random = 0,then need to add minimum
  console.log(secretNumber);
  //max-min is for the range
  //+1 is for the possibility to generate max number.
}

function displayMessage(string) {
  message.textContent = string;
}

let guessedInput;
//eventHandling code
buttonCheck.addEventListener('click', function () {
  guessedInput = Number(guessInputBox.value);
  //what is the type of this guessedInput(number mentioned in HTML)

  //when there's no input or,input = 0;
  if (!guessedInput) {
    displayMessage('try again with some valid number');
  }

  //when players wins
  else if (guessedInput === secretNumber) {
    //set flag so that it will be easy to update the highscore.
    displayMessage('Right Answer!!');
    number.textContent = secretNumber; //revealing the secretNumber

    //its better to write this highscore updation code in the winning block.
    if (score.textContent > highscore.textContent) {
      highscore.textContent = score.textContent;
    }

    guessInputBox.disabled = true; //disabled the input.
    buttonCheck.disabled = true;

    //manipulating CSS
    body.style.cssText = 'background-color:green';
    number.style.width = '30rem';
  }

  //when the guessedInput is low
  else if (guessedInput < secretNumber) {
    displayMessage('too low');
    score.textContent--;
  }

  //when the guessedInput is low
  else {
    displayMessage('too high');
    score.textContent--;
  }

  //decrement the score until it reaches zero
  //score is zero means no more attempts so disable check - button and input.

  //when player looses.
  if (score.textContent == 0) {
    displayMessage('you lost the game😒');
    number.textContent = secretNumber; //revealing the secret number
    body.style.cssText = 'background-color:red';
    guessInputBox.disabled = true;
    buttonCheck.disabled = true;
  }
});

//when player wants to play again.
buttonAgain.addEventListener('click', function () {
  //all these values are set in HTML file
  //is there a way to reset web page,initializing these values.

  score.textContent = 20;
  number.textContent = '?';
  displayMessage('Start Guessing...');
  guessInputBox.value = ''; //textContent doesnt work here why.
  body.style.cssText = 'background-color:black';
  number.style.width = '15rem';

  generateNumber();
  guessInputBox.disabled = false;
  buttonCheck.disabled = false;

  //Location.reload() will reset entire web page
});

//its better to write function for all these textContent changes(by passing text/string as parameter)
