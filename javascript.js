function getComputerChoice(choice) {
    let index = Math.floor(Math.random() * 3);
    return choice[index];
}

function checkWhoWon(playerChoice, computerChoice) {
    if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        return "You win! Rock beats scissors!";
        playerScore++;
    } else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        return "You lose! Paper beats rock!";
        computerScore++;
    } else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        return "You lose! Scissors beat paper!";
        computerScore++;
    } else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        return "You win! Paper beats rock!";
        playerScore++;
    } else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        return "You lose! Rock beats scissors!";
        computerScore++;
    } else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        return "You win! Scissors beat paper;"
        playerScore++;
    } else {
        return "Draw!";
    }
}

const choices = ["Rock", "Paper", "Scissors"];
let playerChoice;
let playerScore = 0;
let computerScore = 0;

const computerChoice = getComputerChoice(choices);

const playerRock = document.getElementById('rock');
const playerPaper = document.getElementById('paper');
const playerScissors = document.getElementById('scissors');

playerRock.addEventListener('click', () => {
    console.log('rock');
    playerChoice = 'rock';
})

playerPaper.addEventListener('click', () => {
    console.log('paper');
    playerChoice = 'paper';
})

playerScissors.addEventListener('click', () => {
    console.log('scissors');
    playerChoice = 'scissors';
})