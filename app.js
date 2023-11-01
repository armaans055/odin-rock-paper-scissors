// Requirements: Functions to make random guesses for the computer, and those guesses turn into a choice
// let play = prompt("What is your choice player? rock, paper, or scissors?")
// let playerChoice = play.toLowerCase()
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


const playerChoice = prompt("make  a choice")
const computerChoice = getComputerChoice()
console.log(findWinner(playerChoice, computerChoice))

