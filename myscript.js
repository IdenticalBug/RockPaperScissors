function getComputerChoice() {
    // Create variable that stores random number
    let randomNum = Math.random() * (30 - 1) + 1;
    
    // If variable is between 1-10, then it returns Rock
    if (randomNum >= 1 && randomNum <= 10) {
        return "Rock";
    // else if the variable is between 10-20, it returns paper
    } else if (randomNum >= 11 && randomNum <= 20) {
        return "Paper";
    // else the variable is between 20-30, it returns scissors
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    // Prompt user for input of strings "Rock" "Paper" or "Scissors" and store in variable
    userInput = prompt("Input Rock, Paper, or Scissors");
    //If userInput is equal to Rock, return Rock
    if (userInput == "Rock") {
        return "Rock";
    //else if userInput is Paper, return Paper
    } else if (userInput == "Paper") {
        return "Paper";
    //else userInput is Scissors, return Scissors
    } else if (userInput == "Scissors") {
        return "Scissors";
    } else {
        return "Please input one of the above options!";
    }

    
}

console.log(getComputerChoice());
console.log(getHumanChoice());