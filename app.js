// // // Requirements: Functions to make random guesses for the computer, and those guesses turn into a choice



// // // A function that captures and compare the player choice to the computer choice using if and else statements

// // function findWinner(playerChoice, computerChoice){
// //    if(playerChoice === computerChoice){
// //     return "Draw"
// //    }else if (playerChoice === "rock" && computerChoice === "paper"){
// //     return "You lose!"
// //    }else if (playerChoice === "paper" && computerChoice === "scissors"){
// //     return "You lose!"
// //    }else if (playerChoice === "scissors" && computerChoice === "rock"){
// //     return "You lose!"
// //    }else{
// //     return "You win!"
// //    }

// // }


// // let gameLength = 0
// // let playerScore = 0
// // let computerScore = 0
// // while(gameLength < 5){
// //     let play = prompt("What is your choice player? rock, paper, or scissors?")
// //     let playerChoice = play.toLowerCase()
// //     if(playerChoice === "rock" || playerChoice === "paper" || playerChoice ==="scissors"){
// //         let computerChoice = getComputerChoice()
// //         let outcome = findWinner(playerChoice, computerChoice)
// //         if (outcome === "You win!"){
// //             gameLength++
// //             playerScore++
// //         }else if (outcome === "You lose!"){
// //             gameLength++
// //             computerScore++
// //         }
// //     console.log(`${outcome} you have played ${gameLength} rounds the score is Player:${playerScore} Computer:${computerScore}`)
// // }else{
// //     break;
// // }   
// // }
const rockButton = document.querySelector('.rockbtn')
const paperButton = document.querySelector('.paperbtn')
const scissorsButton = document.querySelector('.scissorbtn')
const winnerDisplay = document.querySelector('.winner')

function getComputerChoice(){
    let compChoice = Math.floor(Math.random()*3)+1
    if(compChoice === 1){
        return 1
    }else if(compChoice === 2){
        return 2
    }else{
        return 3
    }
}

function findWinner(playerChoice, computerChoice){
   if(playerChoice === computerChoice){
    return 0
   }else if (playerChoice === 1 && computerChoice === 2){
    return 1
   }else if (playerChoice === 2 && computerChoice === 3){
    return 1
   }else if (playerChoice === 3 && computerChoice === 1){
    return 1
   }else{
    return 2
   }

}

function gameEnder(computerScore, playerScore){
    if(computerScore === 5 ){
        winnerDisplay.textContent = "Game over you lose..."
        winnerDisplay.style.fontSize = "x-large";
        makeButton()
    }else if(playerScore === 5){
        winnerDisplay.textContent = "You wonn!!"
        winnerDisplay.style.fontSize = "x-large";
        makeButton()
    }
}
function makeButton(){
    let newButton = document.createElement('button')
    let innerTexs = document.createTextNode("Restart?")
    newButton.appendChild(innerTexs)
    const element = document.querySelector('.winner')
    element.appendChild(newButton)
    newButton.addEventListener("click", ()=>{
        let playerScore = 0;
        let computerScore = 0;
    })

}

function displayWinner(outcome){
    if(outcome === 0){
        return "Draw"
    }else if (outcome === 1){
        return "You win!"
    }else{
        return "You lose"
    }
}



// rockButton.addEventListener("click", ()=>{
//     let playerChoice = 1;
//     let roundWinner = findWinner(playerChoice, getComputerChoice())
//     winnerDisplay.textContent = roundWinner
//     winnerDisplay.style.fontSize = "x-large";
// })
// paperButton.addEventListener("click" , () => {
//     let playerChoice = 2;
//     let roundWinner = findWinner(playerChoice, getComputerChoice())
//     winnerDisplay.textContent = roundWinner
//     winnerDisplay.style.fontSize = "x-large";
// })
// scissorsButton.addEventListener("click" , () => {
//     let playerChoice = 3;
//     let roundWinner = findWinner(playerChoice, getComputerChoice())
//     winnerDisplay.textContent = roundWinner
//     winnerDisplay.style.fontSize = "x-large";
// })

// 0=draw , 1=player win, 2=playerloss

let playerScore = 0;
let computerScore = 0;
 rockButton.addEventListener("click", ()=>{
    let playerChoice = 1;
    let outcome = findWinner(playerChoice, getComputerChoice())
        if(outcome === 1){
            playerScore++
        }else if(outcome === 2){
            computerScore++
        }
    let winnerz = displayWinner(outcome)
    winnerDisplay.textContent = `${winnerz} Your score is ${playerScore} and the computer score is ${computerScore}`
    gameEnder(computerScore, playerScore)

})
paperButton.addEventListener("click" , () => {
    let playerChoice = 2;
    let outcome = findWinner(playerChoice, getComputerChoice())
    if(outcome === 1){
        playerScore++
    }else if(outcome === 2){
        computerScore++
    }
    let winnerz = displayWinner(outcome)
    winnerDisplay.textContent = `${winnerz} Your score is ${playerScore} and the computer score is ${computerScore}`
    gameEnder(computerScore, playerScore)
})
scissorsButton.addEventListener("click" , () => {
    let playerChoice = 3;
    let outcome = findWinner(playerChoice, getComputerChoice())
    if(outcome === 1){
        playerScore++
    }else if(outcome === 2){
        computerScore++
    }
    let winnerz = displayWinner(outcome)
    winnerDisplay.textContent = `${winnerz} Your score is ${playerScore} and the computer score is ${computerScore}`
    gameEnder(computerScore, playerScore)
})



