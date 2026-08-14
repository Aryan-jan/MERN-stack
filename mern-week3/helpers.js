let checkNumber = number => { return (number % 2 === 0) ? "Even number" : "Odd number" };

function jackEnPoy(hand) {
    const bato = 1
    const papel = 2
    const gunting = 3

    const numbers = [bato, papel, gunting]
    const names = ["Bato", "Papel", "Gunting"]

    const randomIndex = Math.floor(Math.random() * numbers.length)

    const randomHand = numbers[randomIndex]

    const output = `${names[hand - 1]} vs ${names[randomHand - 1]}`
    if(hand === bato){
        if(randomHand === gunting){
            return `${output}\nYou won!`
        }
        if(randomHand === papel){
            return `${output}\nYou lost :<`
        } else {return `${output}\nIt's a tie`}
    }
    if(hand === papel){
        if(randomHand === bato){
            return `${output}\nYou won!`
        }
        if(randomHand === gunting){
            return `${output}\nYou lost :<`
        } else {return `${output}\nIt's a tie`}
    }

    if(hand === gunting){
        if(randomHand === papel){
            return `${output}\nYou won!`
        }
        if(randomHand === bato){
            return `${output}\nYou lost :<`
        } else {return `${output}\nIt's a tie`}
    }

}

module.exports = { checkNumber, jackEnPoy };