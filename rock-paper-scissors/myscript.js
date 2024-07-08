
const selectionContainer = document.querySelector(".selection-container");
const resultContainer = document.querySelector(".results-container");
const startBtn = document.querySelector(".start-btn");
startBtn.addEventListener("click", function () {
    selectionContainer.style.display = "flex";
    resultContainer.style.display = "flex";
    this.style.display = "none";
})

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    let computerChoice = choices[random];
    return computerChoice;
}


let playerScore = 0;
let computerScore = 0;
let compScore = document.querySelector(".comp-score");
let playScore = document.querySelector(".player-score");
compScore.textContent = computerScore;
playScore.textContent = playerScore;

let playerSelection = "";

const selectionItems = document.querySelector(".selection-items");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
rock.addEventListener("click", function () {
    playerSelection = "rock";
    playRound(playerSelection, getComputerChoice);

});

paper.addEventListener("click", function () {
    playerSelection = "paper";
    playRound(playerSelection, getComputerChoice);
});

scissors.addEventListener("click", function () {
    playerSelection = "scissors";
    playRound(playerSelection, getComputerChoice);
});


function playRound(playerSelection, computerSelection) {
    const ps = playerSelection;
    const cs = computerSelection();
    console.log('cs:' + cs);

    let compSelected = document.querySelector(".comp-selected");
    compSelected.textContent = `Computer selected ${cs}`;
    let playerSelected = document.querySelector(".player-selected");
    playerSelected.textContent = `You selected ${ps}`;
    let winnerStatement = document.querySelector(".final-winner");
    let roundStatement = document.querySelector(".round-winner");
    const playAgainBtn = document.querySelector(".play-again-btn");
    playAgainBtn.addEventListener("click", function () {
        window.location.reload();
    })

    if (cs === ps) {
        roundStatement.textContent = "It's a draw!";
    } else if (cs === 'rock' && ps === 'paper') {
        playerScore++;
        roundStatement.textContent = "You win! Paper beats Rock";
    } else if (cs === 'rock' && ps === 'scissors') {
        computerScore++;
        roundStatement.textContent = "You lose! Rock beats Scissors";
    } else if (cs === 'scissors' && ps === 'paper') {
        computerScore++;
        roundStatement.textContent = "You lose! Scissors beats paper";
    } else if (cs === 'paper' && ps === 'scissors') {
        playerScore++;
        roundStatement.textContent = "You win! Scissors beats Paper";
    } else if (cs === 'paper' && ps === 'rock') {
        computerScore++;
        roundStatement.textContent = "You lose! Paper beats Rock";
    } else if (cs === 'scissors' && ps === 'rock') {
        playerScore++;
        roundStatement.textContent = "You win! Rock beats Scissors";
    } else {
        console.log('Invalid input, check again');
    }
    compScore.textContent = computerScore;
    playScore.textContent = playerScore;

    if (playerScore === 5) {
        winnerStatement.textContent = "Congratulations! you won the game";
        playAgainBtn.style.display = "flex";
        setTimeout(() => {
            compSelected.style.display = "none";
            playerSelected.style.display = "none";
            roundStatement.style.display = "none";
            selectionContainer.style.display = "none";
        },2000);
    } else if (computerScore === 5) {
        winnerStatement.textContent = "OOPS! You've lost, try again";
        playAgainBtn.style.display = "flex";
        setTimeout(() => {
            compSelected.style.display = "none";
            playerSelected.style.display = "none";
            roundStatement.style.display = "none";
            selectionContainer.style.display = "none";
        },2000);
    }

}