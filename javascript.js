const choose = ["Rock", "Paper", "Scissors"];

function getComputerChoice(choice) {
    let index = Math.floor(Math.random() * 3);
    return choice[index];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        return "You win! The computer chose scissors!";
    } else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        return "You lose! The computer chose rock!";
    } else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        return "You lose! SThe computer chose paper!";
    } else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        return "You win! The computer chose rock!";
    } else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        return "You lose! The computer chose scissors!";
    } else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        return "You win! The computer chose paper!;"
    } else {
        return "Draw!";
    }
}


