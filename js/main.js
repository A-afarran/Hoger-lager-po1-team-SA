console.log('Main loaded');
const playerDiceOne = document.querySelector(".playerDiceOne");
const playerDiceTwo = document.querySelector(".playerDiceTwo");
const messageBox = document.querySelector(".message-box");
const playerCredits = document.querySelector(".player-credits");
const computerCredits = document.querySelector(".computer-credits");
const go = document.querySelector(".go-button");
const higher = document.querySelector(".higher-button");
const lower = document.querySelector(".lower-button");
const goButton = document.querySelector(".dice-button");
let creditsPlayer = 0;
let creditsComputer = 0;
let playerChoice
let computerDiceOne = document.querySelector(".computer-dice-one")
let computerDiceTwo = document.querySelector(".computer-dice-two")
const playerResult = getRandomInt(6);
const computerResult = getRandomInt(6);

lower.disabled = true;
higher.disabled = true;
chuck.disabled = true;
go.disabled = false;


let playerDice1 = getRandomInt(6);
let playerdice2 = getRandomInt(6);

let computerDice1 =getRandomInt(6);
let computerDice2 =getRandomInt(6);

let computerTurn = true;

