const rockButt = document.createElement('button')
rockButt.innerHTML = 'Rock'

const paperButt = document.createElement('button')
paperButt.innerHTML = 'Paper'

const scissorsButt = document.createElement('button')
scissorsButt.innerHTML = 'Scissors'


const choiceTable = ['rock', 'paper', 'scissors']
let humanScore = 0
let computerScore = 0

const getComputerChoice = () => {
    const arrLength = choiceTable.length
    let randomNum = Math.floor(Math.random() * arrLength)
    return choiceTable.at(randomNum)
}

const playGame = (buttEvent) => {
    if(choiceTable.includes(buttEvent.toLowerCase())){
        console.log('Legal')
    }

    const rules = {
        scissors : 'paper',
        paper : 'rock',
        rock : 'scissors'
    }

    const playRound = (humanChoice) => {
        let computerChoice = getComputerChoice()
        // console.log(`Human choice is: ${humanChoice}`)
        // console.log(`Computer choice is: ${computerChoice}`)

        
        if (humanChoice === computerChoice){
            console.log('Draw')
        } else if (rules[humanChoice] === computerChoice) {
            console.log('Human wins')
            humanScore++
        } else {
            console.log('You lose!')
            computerScore++
        }
    }

    // for (let i = 0; i < maxRounds; i++) {
    //     let humanSelection = getHumanChoice()
    //     let computerSelection = getComputerChoice()
    //     playRound(humanSelection, computerSelection)
    // }

    console.log(`Human score: ${humanScore} || Computer score: ${computerScore}`)

    if (humanScore > computerScore){
        console.log(`Human Wins!`)
    } else {
        console.log('Computer Wins!')
    }

}


document.body.appendChild(rockButt)
document.body.appendChild(paperButt)
document.body.appendChild(scissorsButt)

rockButt.addEventListener('click', (e) => {
    const rockChoice = 'Rock'
    getHumanChoice(rockChoice)
    playGame(rockChoice)
})
paperButt.addEventListener('click', (e) => {
    const paperChoice = 'Paper'
    getHumanChoice(paperChoice)
    playGame(paperChoice)
})
scissorsButt.addEventListener('click', (e) => {
    const scissorsChoice = 'Scissors'
    getHumanChoice(scissorsChoice)
    playGame(scissorsChoice)
})
