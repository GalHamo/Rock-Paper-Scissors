const MAX_ROUNDS = 5
const choiceTable = ['rock', 'paper', 'scissors']

const rockButt = document.createElement('button')
rockButt.innerHTML = 'Rock'
const paperButt = document.createElement('button')
paperButt.innerHTML = 'Paper'
const scissorsButt = document.createElement('button')
scissorsButt.innerHTML = 'Scissors'

const startButt = document.createElement('button')
startButt.innerHTML = 'Start'

let gameResults = document.createElement('div')

const getComputerChoice = () => {
    const arrLength = choiceTable.length
    let randomNum = Math.floor(Math.random() * arrLength)
    return choiceTable.at(randomNum)
}

const playGame = (buttEvent) => {
    let humanScore = 0
    let computerScore = 0

    const rules = {
        scissors : 'paper',
        paper : 'rock',
        rock : 'scissors'
    }

    const playRound = (userChoice) => {
        let computerChoice = getComputerChoice()

        if (userChoice === computerChoice){
            gameResults.innerHTML = 'Draw'
        } else if (rules[userChoice] === computerChoice) {
            gameResults.innerHTML = 'Human wins'
            humanScore++
        } else {
            gameResults.innerHTML = 'You lose!'
            computerScore++
        }
    }

    if (buttEvent === 'Start'){
        for (let roundNum = 0; roundNum < MAX_ROUNDS; roundNum++) {

            rockButt.addEventListener('click', (e) => {
                const rockChoice = 'rock'
                playRound(rockChoice)
            })
            paperButt.addEventListener('click', (e) => {
                const paperChoice = 'paper'
                playRound(paperChoice)
            })
            scissorsButt.addEventListener('click', (e) => {
                const scissorsChoice = 'scissors'
                playRound(scissorsChoice)
            })
        }
        gameResults.innerHTML = `Human score: ${humanScore} || Computer score: ${computerScore}`

        if (humanScore > computerScore){
            gameResults.innerHTML += `Human Wins!`
        } else {
            gameResults.innerHTML += `You Lose!`
        }
    }

}

document.body.appendChild(startButt)

startButt.addEventListener('click', () => {
    document.body.removeChild(startButt)
    let startGame = 'Start'
    playGame(startGame)

    document.body.appendChild(rockButt)
    document.body.appendChild(paperButt)
    document.body.appendChild(scissorsButt)
})
