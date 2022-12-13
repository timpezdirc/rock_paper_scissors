const choose = ["Rock", "Paper", "Scissors"];

function getComputerChoice(choice) {
    let index = Math.floor(Math.random() * 3);
    return choice[index];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        return "You win! Rock beats scissors!";
    } else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        return "You lose! Paper beats rock!";
    } else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        return "You lose! Scissors beat paper!";
    } else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        return "You win! Paper beats rock!";
    } else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        return "You lose! Rock beats scissors!";
    } else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        return "You win! Scissors beat paper;"
    } else {
        return "Draw!";
    }
}

function game(numberOfRounds) {
    for(let i = 0; i < numberOfRounds; i++) {
        const playerChoice = prompt("Rock, paper or scissors?");
        console.log(playerChoice);
        const computerChoice = getComputerChoice(choose);
        console.log(computerChoice);

        alert(playRound(playerChoice, computerChoice));
    }
}

game(5);
