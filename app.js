const buttons = document.querySelectorAll("button");
const results = document.querySelector("#results");
console.log(results);
const gameplay = document.querySelector("#gameplay");

buttons.forEach((button) => button.addEventListener('click', function(e) {
    const div = document.createElement("div");
    div.innerText = playRound(e.target.textContent);
    gameplay.appendChild(div);
    checkWin(); 
}));

game();

function checkWin() {
    if(computerScore == 5) {
        const div = document.createElement("div");
        div.innerText = playRound("The computer wins the game!");
        gameplay.appendChild(div);
        game();
    }
    
    if(playerScore == 5) {
        const div = document.createElement("div");
        div.innerText = playRound("You win the game!");
        gameplay.appendChild(div);
        game();
    }

}

function getComputerChoice() {
    let computerResponses = ["rock", "paper", "scissors"];
    max = 2;
    min = 0;
    choice = Math.floor( Math.random() * (max - min + 1) + min);

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
        results.innerText = `The score is Player: ${playerScore} Computer: ${computerScore}`;
        return `You win! ${playerSelection} beats ${computerChoice}`
    } 
    computerScore += 1;
    results.innerText = `The score is Player: ${playerScore} Computer: ${computerScore}`;
    return `You lose! ${computerChoice} beats ${playerSelection}`
} 

function game() {
    gameplay.innerText = "This is a game of rock paper scissors! It is a best of 5 against a computer!";
    computerScore = 0;
    playerScore = 0;
    results.innerText = `The score is Player: ${playerScore} Computer: ${computerScore}`;


    //while( computerScore < 3 & playerScore < 3) {
        // playerSelection = prompt("What is your selection?")
        // result = playRound(playerSelection)
        // console.log(result);
    //}

    //console.log(computerScore == 3 ? "The computer wins!": "You win!");
}