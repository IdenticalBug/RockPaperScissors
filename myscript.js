function getComputerChoice() {
    // Create variable that stores random number
    let randomNum = Math.random() * (30 - 1) + 1;
    
    // If variable is between 1-10, then it returns Rock
    if (randomNum >= 1 && randomNum <= 10) {
        return "Rock";
    // else if the variable is between 11-20, it returns paper
    } else if (randomNum >= 11 && randomNum <= 20) {
        return "Paper";
    // else the variable is between 21-30, it returns scissors
    } else {
        return "Scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    // If humanLowercase is rock and computerChoice is paper, say "You lose! Paper beats rock!" 
    // and return 0 to indicate computer wins.
    if (humanChoice == "rock" && computerChoice == "Paper") {
        winnerText.textContent = "You lose! Paper beats rock!";
        return 0;
    //else if humanLowercase is paper and computerChoice is Scissors, say "You lose! Scissors beats paper!" 
    // and return 0 to indicate computer wins.
    } else if (humanChoice == "paper" && computerChoice == "Scissors") {
        winnerText.textContent = "You lose! Scissors beats paper!";
        return 0;
    // else if humanLowercase is scissors and computerChoice is Rock, say "You lose! Rock beats scissors!" 
    // and return 0 to indicate computer wins.
    } else if (humanChoice == "scissors" && computerChoice == "Rock") {
        winnerText.textContent = "You lose! Scissors beats paper!";
        return 0;
    // else if humanLowercase is scissors and computerChoice is Paper, say "You won!" Scissors beat paper!" 
    // and return 1 to indicate human wins.
    } else if (humanChoice == "scissors" && computerChoice == "Paper") {
        winnerText.textContent = "You won! Scissors beats paper!";
        return 1;
    // else if humanLowercase is paper and computerChoice is Rock, say "You won!" Paper beats rock!" 
    // and return 1 to indicate human wins.
    } else if (humanChoice == "paper" && computerChoice == "Rock") {
        winnerText.textContent = "You won! Paper beats rock!";
        return 1;
    //else if humanLowercase is rock and computerChoice is Scissors, say "You won! Rock beats scissors!" 
    // and return 1 to indicate human wins.
    } else if (humanChoice == "rock" && computerChoice == "Scissors") {
        winnerText.textContent = "You won! Rock beats scissors!";
        return 1;
    } else{
        winnerText.textContent = "It's a tie! Press a button again."
    }
}

function calculateWinner(scoreOfHuman, scoreOfComputer){
    if (scoreOfHuman > scoreOfComputer) {
        winnerText.textContent = "Congratulations, you have won!";
    } else {
        winnerText.textContent = "You have lost! Try again next time!";
    }
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let winnerIs = null;
    let roundNumber = 0;
    
    
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const computerSelection = getComputerChoice();
            winnerIs = playRound(button.id, computerSelection);
            if (winnerIs == 0 && roundNumber != 5) {
                computerScore++;
                roundNumber++;
                compScore.textContent = `Computer Score: ${computerScore}`;
            } else if (winnerIs == 1 && roundNumber != 5) {
                humanScore++;
                roundNumber++;
                playerScore.textContent = `Your Score: ${humanScore}`;
            } else if (roundNumber == 5) {
                calculateWinner(humanScore, computerScore);
            }
            
            });
        });   
}




const buttons = document.querySelectorAll("button");
const playerScore = document.querySelector("#playerScore");
const compScore = document.querySelector("#compScore");
const winnerText = document.querySelector("#winnerText");

playGame();
