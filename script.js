const choiceTable = ['rock', 'paper', 'scissors']
let humanScore = 0
let computerScore = 0

const getComputerChoice = () => {
    const arrLength = choiceTable.length

    let randomNum = Math.floor(Math.random() * arrLength)
    return choiceTable.at(randomNum)
}

const getHumanChoice = () => {
    let userChoice = prompt('Choose Rock, Paper or Scissors').toLowerCase()
    if (choiceTable.includes(userChoice.toLowerCase())) {
        return userChoice
    } else {
        console.log('Invalid input')
        return getHumanChoice()
    }
}

const playGame = () => {
    const maxRounds = 5

    const playRound = (humanChoice, computerChoice) => {
        console.log(`Human choice is: ${humanChoice}`)
        console.log(`Computer choice is: ${computerChoice}`)

        const rules = {
            scissors : 'paper',
            paper : 'rock',
            rock : 'scissors'
        }
        console.log(Object.keys(rules))
        
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

    for (let i = 0; i < maxRounds; i++) {
        let humanSelection = getHumanChoice()
        let computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
    }

    console.log(`Human score: ${humanScore} || Computer score: ${computerScore}`)

    if (humanScore > computerScore){
        console.log(`Human Wins!`)
    } else {
        console.log('Computer Wins!')
    }
}
