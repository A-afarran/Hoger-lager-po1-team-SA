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

let computerDice1 = getRandomInt(6);
let computerDice2 = getRandomInt(6);

let computerTurn = true;

console.log("U heeft" + playerDice1 + "gegooid")
console.log("u heeft" + playerDice2 + "gegooid")
console.log("de pc heeft" + computerDice1 + "gegooid")
console.log("de pc heeft" + computerDice2 + "gegooid")

playerCredits.textContent = creditsPlayer
computerCredits.textContent = creditsComputer

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

lower.addEventListener('click', function () {
    playerChoice = 'Lower'
    
    chuck.disabled = false;
    higher.disabled true
    lower.disabled true;

    console.log('Er is geklikt op een button');
});

chuck.addEventListener('click', function () {

    higher.disabled = false;
    lower.disabled = false;
    go.disabled = true;
    chuck.disabled = true

    console.log("er is geklikt op een button");

    if (computerTurn) {
        computerDice1 = getRandomInt(6);
        computerDice2 = getRandomInt(6);

        computerChangeDiceOne(computerDice1);
        computerChangeDiceTwo(computerDice2);
        computerTurn = false;
    } else {
        playerDice1 = getRandomInt(6);
        playerdice2 = getRandomInt(6);
       
        playerChangeDiceOne(playerDice1);
        playerChangeDiceTwo(playerdice2);
        const myScore= playerDice1 + playerDice2
        const computerScore = computerDice1 + computerDice2

        if(playerChoice==="Higher" && myScore>computerScore){
            creditsPlayer = creditsPlayer + 1;
            console.log("U heeft gewonnen")
        } else if(playerChoice === "Higher" && myScore< computerScore){
            creditsComputer = creditsComputer + 1;
            console.log("de computer heeft gewonnen")
        } else if(playerChoice=== "lower" && myScore>computerScore) {
            creditsPlayer = creditsPlayer + 1;
            console.log ("Player heeft gewonnen")
        } else if(playerChoice==="lower" && myScore<computerScore){
            computerCredits = computerCredits + 1;
            console.log("computer heeft gewonnen")

        } else{
            console.log("het is gelijkspel")
        }

        playerCredits.textContent = creditsPlayer
        computerCredits.textContent = creditsPlayer
        if(creditsPlayer === 10){
            console.log("De speler heeft de spel gewonnen")
        }
        if (creditsComputer === 10){
            console.log("De computer heeft de spel gewonnen ")
        }
       
       
        computerTurn = true;
        }
    });

    function computerChangeDiceOne(computerResult){
            computerDiceOne.textContent = getRandomInt(6);

  
            if (computerResult === 1) {
                computerDiceOne.innerHTML = "&#9856;"
            } else if (computerResult === 2) {
                computerDiceOne.innerHTML = "&#9857;"
            } else if (computerResult === 3) {
                computerDiceOne.innerHTML = "&#9858;"
            } else if (computerResult === 4) {
                computerDiceOne.innerHTML = "&#9859;"
            } else if (computerResult === 5) {
                computerDiceOne.innerHTML = "&#9860;"
            } else if (computerResult === 6) {
                computerDiceOne.innerHTML = "&#9861;"
            }
        }

    function computerChangeDiceTwo (computerResult){
             computerDiceTwo.textContent = getRandomInt(6);
             if (computerResult === 1) {
                computerDiceTwo.innerHTML = "&#9856;"
            } else if (computerResult === 2) {
                computerDiceTwo.innerHTML = "&#9857;"
            } else if (computerResult === 3) {
                computerDiceTwo.innerHTML = "&#9858;"
            } else if (computerResult === 4) {
                computerDiceTwo.innerHTML = "&#9859;"
            } else if (computerResult === 5) {
                computerDiceTwo.innerHTML = "&#9860;"
            } else if (computerResult === 6) {
                computerDiceTwo.innerHTML = "&#9861;"
            }

        }

        function playerChangeDiceOne(playerResult){
            if (playerResult === 1) {
                playerDiceOne.innerHTML = "&#9856;"
            } else if (playerResult === 2) {
                playerDiceOne.innerHTML = "&#9857;"
            } else if (playerResult === 3) {
                playerDiceOne.innerHTML = "&#9858;"
            } else if (playerResult === 4) {
                playerDiceOne.innerHTML = "&#9859;"
            } else if (playerResult === 5) {
                playerDiceOne.innerHTML = "&#9860;"
            } else if (playerResult === 6) {
                playerDiceOne.innerHTML = "&#9861;"
            }
        }
       
        function playerChangeDiceTwo (playerResult){
                if (playerResult === 1) {
                    playerDiceTwo.innerHTML = "&#9856;"
                } else if (playerResult === 2) {
                    playerDiceTwo.innerHTML = "&#9857;"
                } else if (playerResult === 3) {
                    playerDiceTwo.innerHTML = "&#9858;"
                } else if (playerResult === 4) {
                    playerDiceTwo.innerHTML = "&#9859;"
                } else if (playerResult === 5) {
                    playerDiceTwo.innerHTML = "&#9860;"
                } else if (playerResult === 6) {
                    playerDiceTwo.innerHTML = "&#9861;"
        }

    }

