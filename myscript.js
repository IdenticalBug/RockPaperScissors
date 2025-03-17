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

function getHumanChoice() {
    // Prompt user for input of strings "Rock" "Paper" or "Scissors" and store in variable
    let userInput = prompt("Input Rock, Paper, or Scissors");
    userInput = userInput.toLowerCase();
    //If userInput is equal to Rock, return Rock
    if (userInput == "rock") {
        return "rock";
    //else if userInput is Paper, return Paper
    } else if (userInput == "paper") {
        return "paper";
    //else if userInput is Scissors, return Scissors
    } else if (userInput == "scissors") {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    // If humanLowercase is rock and computerChoice is paper, say "You lose! Paper beats rock!" 
    // and return 0 to indicate computer wins.
    if (humanChoice == "rock" && computerChoice == "Paper") {
        console.log("You lose! Paper beats rock!");
        return 0;
    //else if humanLowercase is paper and computerChoice is Scissors, say "You lose! Scissors beats paper!" 
    // and return 0 to indicate computer wins.
    } else if (humanChoice == "paper" && computerChoice == "Scissors") {
        console.log("You lose! Scissors beats paper!");
        return 0;
    // else if humanLowercase is scissors and computerChoice is Rock, say "You lose! Rock beats scissors!" 
    // and return 0 to indicate computer wins.
    } else if (humanChoice == "scissors" && computerChoice == "Rock") {
        console.log("You lose! Scissors beats paper!");
        return 0;
    // else if humanLowercase is scissors and computerChoice is Paper, say "You won!" Scissors beat paper!" 
    // and return 1 to indicate human wins.
    } else if (humanChoice == "scissors" && computerChoice == "Paper") {
        console.log("You won! Scissors beats paper!");
        return 1;
    // else if humanLowercase is paper and computerChoice is Rock, say "You won!" Paper beats rock!" 
    // and return 1 to indicate human wins.
    } else if (humanChoice == "paper" && computerChoice == "Rock") {
        console.log("You won! Paper beats rock!");
        return 1;
    //else if humanLowercase is rock and computerChoice is Scissors, say "You won! Rock beats scissors!" 
    // and return 1 to indicate human wins.
    } else if (humanChoice == "rock" && computerChoice == "Scissors") {
        console.log("You won! Rock beats scissors!");
        return 1;
    }
    else {
        console.log("It's a tie! Try again!");
    }
}


function playGame() {
    //declare score variables to start at 0
    let humanScore = 0;
    let computerScore = 0;
    // For 5 rounds, ask human for a choice and assign choice to a variable, have computer make a selection 
    // then assign the choice to a variable,  
    // compare the choices in playRound, then add to score of whoever won depending on what number is returned in function. 
    for (let i = 1; i <= 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let winnerIs = playRound(humanSelection, computerSelection);
        if (winnerIs == 0) {
            computerScore++;
        } else {
            humanScore++;
        }
    }
    //Once 5 rounds are played, compare humanScore and computerScore to see who won, 
    // then print a winning statement for whoever won.
    if (humanScore > computerScore) {
        console.log("Congratulations, you have won!");
    } else {
        console.log("You have lost! Try again next time!");
    }
}




//playGame();
