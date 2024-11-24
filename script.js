const MAX_ROUNDS = 5

const choiceTable = ['rock', 'paper', 'scissors']
let roundNum = 0

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

let humanScore = 0
let computerScore = 0
const playGame = (buttEvent) => {
    
    const rules = {
        scissors : 'paper',
        paper : 'rock',
        rock : 'scissors'
    }
    
    const playRound = (userChoice, computerChoice) => {
        console.log(userChoice, computerChoice)
        if (userChoice === computerChoice){
            gameResults.innerHTML = 'Draw'
        } else if (rules[userChoice] === computerChoice) {
            gameResults.innerHTML = 'You won that round'
            humanScore++
        } else {
            gameResults.innerHTML = 'You lost that round'
            computerScore++
        }
        roundNum++

        if(roundNum === 5){
            gameResults.innerHTML = `Human score: ${humanScore} || Computer score: ${computerScore}`

            if (humanScore > computerScore){
                gameResults.innerHTML += ` Human Wins!`
            } else {
                gameResults.innerHTML += ` Computer Wins!`
            }
            
        }
    }

    if (buttEvent === 'Start'){
        rockButt.addEventListener('click', (e) => {
            const rockChoice = 'rock'
            const computerChoice = getComputerChoice()
            playRound(rockChoice, computerChoice)
        })
        paperButt.addEventListener('click', (e) => {
            const paperChoice = 'paper'
            const computerChoice = getComputerChoice()
            playRound(paperChoice, computerChoice)
        })
        scissorsButt.addEventListener('click', (e) => {
            const scissorsChoice = 'scissors'
            const computerChoice = getComputerChoice()
            playRound(scissorsChoice, computerChoice)
        })

    }
    

}
document.body.appendChild(gameResults)
document.body.appendChild(startButt)

startButt.addEventListener('click', () => {
    document.body.removeChild(startButt)
    let startGame = 'Start'

    document.body.appendChild(rockButt)
    document.body.appendChild(paperButt)
    document.body.appendChild(scissorsButt)

    playGame(startGame)
})


