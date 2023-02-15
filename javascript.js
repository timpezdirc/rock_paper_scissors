function getComputerChoice(choice) {
    let index = Math.floor(Math.random() * 3);
    return choice[index];
}

function checkWhoWon(playerChoice, computerChoice) {
    if(playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors") {
        playerScore++;
        let result = createTextNode('You win! Rock beats scissors!');
        displayScore(result);
    } else if(playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper") {
        computerScore++;
        let result = createTextNode('You lose! Paper beats rock!');
        displayScore(result);
    } else if(playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors") {
        computerScore++;
        let result = createTextNode('You lose! Scissors beat paper!');
        displayScore(result);
    } else if(playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") {
        playerScore++;
        let result = createTextNode('You win! Paper beats rock!');
        displayScore(result);
    } else if(playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") {
        computerScore++;
        let result = createTextNode('You lose! Rock beats scissors!');
        displayScore(result);
    } else if(playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper") {
        playerScore++;
        let result = createTextNode('You Win! Scissors beat paper!');
        displayScore(result);
    } else {
        let result = createTextNode('Draw!');
        displayScore(result);
    }
}

function displayScore(result) {
    let parent = document.querySelector('.container');
    let child = document.createElement('div');
    child.appendChild(result);
    parent.appendChild(child);
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