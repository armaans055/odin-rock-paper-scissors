const rockButton = document.querySelector('.rockbtn')
const paperButton = document.querySelector('.paperbtn')
const scissorsButton = document.querySelector('.scissorbtn')
const winnerDisplay = document.querySelector('.winner')
let playerScore = 0;
let computerScore = 0;
let gameOver = false;

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

function endGame(){
    gameOver = true;
    playerScore = 0;
    computerScore = 0;

}
function gameEnder(computerScore, playerScore){
    if(computerScore === 5 ){
        winnerDisplay.textContent = "Game over you lose..."
        winnerDisplay.style.fontSize = "30px";
        endGame()
        makeButton()
    }else if(playerScore === 5){
        winnerDisplay.textContent = "You wonn!!"
        winnerDisplay.style.fontSize = "30px";
        endGame()
        makeButton()
    }
}
function makeButton(){
    let newButton = document.createElement('button')
    let innerTexs = document.createTextNode("Restart?")
    newButton.appendChild(innerTexs)
    const element = document.querySelector('.winner')
    element.appendChild(newButton)
    newButton.style.fontSize = "20px";
    newButton.addEventListener("click", ()=>{
        playerScore = 0;
        computerScore = 0;
        winnerDisplay.textContent = `Your score is ${playerScore} and the computer score is ${computerScore}`

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

function displayComputerChoice(computerChoice){
    if(computerChoice === 1){
        return "Computer chose rock"
    }else if(computerChoice === 2){
        return "Computer chose paper"
    }else if(computerChoice === 3){
        return "Computer chose rock"
    }
}

rockButton.addEventListener("click", ()=>{
    let playerChoice = 1;
    let computerChoice = getComputerChoice()
    let outcome = findWinner(playerChoice, computerChoice)
        if(outcome === 2){
            playerScore++
        }else if(outcome === 1){
            computerScore++
        }
    let winnerz = displayWinner(outcome)
    let compyChoice = displayComputerChoice(computerChoice)
    winnerDisplay.style.fontSize = "30px"
    winnerDisplay.textContent = ` ${compyChoice} ${winnerz} Your score is ${playerScore} and the computer score is ${computerScore}`
    gameEnder(computerScore, playerScore)

})
paperButton.addEventListener("click" , () => {
    let playerChoice = 2;
    let computerChoice = getComputerChoice()
    let outcome = findWinner(playerChoice, computerChoice)
    if(outcome === 2){
        playerScore++
    }else if(outcome === 1){
        computerScore++
    }
    let winnerz = displayWinner(outcome)
    let compyChoice = displayComputerChoice(computerChoice)
    winnerDisplay.style.fontSize = "30px"
    winnerDisplay.textContent = `${compyChoice} ${winnerz} Your score is ${playerScore} and the computer score is ${computerScore}`
    gameEnder(computerScore, playerScore)
})
scissorsButton.addEventListener("click" , () => {
    let playerChoice = 3;
    let computerChoice = getComputerChoice()
    let outcome = findWinner(playerChoice, computerChoice)
    if(outcome === 2){
        playerScore++
    }else if(outcome === 1){
        computerScore++
    }
    let winnerz = displayWinner(outcome)
    let compyChoice = displayComputerChoice(computerChoice)
    winnerDisplay.style.fontSize = "30px"
    winnerDisplay.textContent = `${compyChoice} ${winnerz} Your score is ${playerScore} and the computer score is ${computerScore}`
    gameEnder(computerScore, playerScore)
})



