function getComputerChoice(choice) {
    let index = Math.floor(Math.random() * 3);
    return choice[index];
}

function checkWhoWon(playerChoice, computerChoice) {
    if(playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors") {
        playerScore++;
        return "You win! Rock beats scissors!";
    } else if(playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper") {
        computerScore++;
        return "You lose! Paper beats rock!";
    } else if(playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors") {
        computerScore++;
        return "You lose! Scissors beat paper!";
    } else if(playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") {
        playerScore++;
        return "You win! Paper beats rock!";
    } else if(playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") {
        computerScore++;
        return "You lose! Rock beats scissors!";
    } else if(playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper") {
        playerScore++;
        return "You win! Scissors beat paper;"
    } else {
        return "Draw!";
    }
}

const choices = ["Rock", "Paper", "Scissors"];
let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

const playerRock = document.getElementById('rock');
const playerPaper = document.getElementById('paper');
const playerScissors = document.getElementById('scissors');

playerRock.addEventListener('click', () => {
    console.log('rock');
    playerChoice = 'rock';
    computerChoice = getComputerChoice(choices);
    checkWhoWon(playerChoice, computerChoice);
})

playerPaper.addEventListener('click', () => {
    console.log('paper');
    playerChoice = 'paper';
    computerChoice = getComputerChoice(choices);
    checkWhoWon(playerChoice, computerChoice);
})

playerScissors.addEventListener('click', () => {
    console.log('scissors');
    playerChoice = 'scissors';
    computerChoice = getComputerChoice(choices);
    checkWhoWon(playerChoice, computerChoice);
})