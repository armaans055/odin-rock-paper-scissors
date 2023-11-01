// Requirements: Functions to make random guesses for the computer, and those guesses turn into a choice

function getComputerChoice(){
    let compChoice = Math.floor(Math.random()*3)+1
    if(compChoice === 1){
        return "rock"
    }else if(compChoice === 2){
        return "paper"
    }else{
        return "scissors"
    }
}

// A function that captures and compare the player choice to the computer choice using if and else statements

function findWinner(playerChoice, computerChoice){
   if(playerChoice === computerChoice){
    return "Draw"
   }else if (playerChoice === "rock" && computerChoice === "paper"){
    return "You lose!"
   }else if (playerChoice === "paper" && computerChoice === "scissors"){
    return "You lose!"
   }else if (playerChoice === "scissors" && computerChoice === "rock"){
    return "You lose!"
   }else{
    return "You win!"
   }

}


let gameLength = 0
let playerScore = 0
let computerScore = 0
while(gameLength < 5){
    let play = prompt("What is your choice player? rock, paper, or scissors?")
    let playerChoice = play.toLowerCase()
    if(playerChoice === "rock" || playerChoice === "paper" || playerChoice ==="scissors"){
        let computerChoice = getComputerChoice()
        let outcome = findWinner(playerChoice, computerChoice)
        if (outcome === "You win!"){
            gameLength++
            playerScore++
        }else if (outcome === "You lose!"){
            gameLength++
            computerScore++
        }
    console.log(`${outcome} you have played ${gameLength} rounds the score is Player:${playerScore} Computer:${computerScore}`)
}else{
    break;
}   
}

