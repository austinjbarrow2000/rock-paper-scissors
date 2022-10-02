function getComputerChoice() {
    let computerResponses = ["rock", "paper", "scissors"];
    max = 2;
    min = 0;
    choice = Math.floor( Math.random() * (max - min + 1) + 1);

    return computerResponses[choice];
}

function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerChoice = getComputerChoice()

    if( playerSelection == computerChoice) {
        return "Tie";
    } else if ((playerSelection == "rock" && computerChoice == "scissors") ||
                (playerSelection == "scissors" && computerChoice == "paper") ||
                (playerSelection == "paper" && computerChoice == "rock")) {
        playerScore += 1;
        return `You win! ${playerSelection} beats ${computerChoice}`
    } 
    computerScore += 1;
    return `You lose! ${computerChoice} beats ${playerSelection}`
} 

function game() {
    console.log("This is a game of rock paper scissors! It is a best of 5 against a computer!")
    computerScore = 0;
    playerScore = 0;
    while( computerScore < 3 || playerSelection < 3) {
        playerSelection = prompt("What is your selection?")
        result = playRound(playerSelection)
        console.log(result);
        console.log(`The score is Player: ${playerScore} Computer: ${computerScore}`);
    }

    computerScore = 3 ? "The computer wins!": "You win!";
}