const getComputerChoice = () => {
    const choiceTable = ['rock', 'paper', 'scissors']
    const arrLength = choiceTable.length

    let randomNum = Math.floor(Math.random() * arrLength)
    console.log(choiceTable.at(randomNum))
}