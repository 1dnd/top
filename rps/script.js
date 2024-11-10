function playGame() {
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return result = choices[randomIndex];
}

console.log(getComputerChoice());

function getHumanChoice() {
    const choice = prompt("Enter value (rock, paper or scissors): ");
    return choice;
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie! Both chose " + humanChoice);
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock") 
    ) {
        humanScore++;
        console.log("You win this round! " + humanChoice + " beats " + computerChoice);
    } else {
        computerScore++;
        console.log("You lose this round " + computerChoice + " beats " + humanChoice);
    }
}

for (let round = 1; round <= 5; round++) {
    console.log("Round " + round) 

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);

    console.log(`Scores -> Human: ${humanScore}, Computer: ${computerScore}\n`);
}

if (humanScore > computerScore) {
    console.log("Congralutations! You won the game!");
} else if (computerScore > humanScore) {
    console.log("You lost! The computer won the game!");
} else {
    console.log("The game is a tie!");
}

}

playGame();