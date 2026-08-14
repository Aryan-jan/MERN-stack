const person = { name: 'Aryan', age: 16}

const { name, age } = person

let checkVoting = age => (age >= 18) ? `You are an adult and eligible to vote` : `You are a minor and not eligible to vote`

// function checkVoting(age){
//     if (age >= 18){
//         return `You are an adult and eligible to vote`
//     } else {
//         return `You are a minor and not eligible to vote`
//     }
// }

function checkLicense(age){
    if (age < 16){
        return `You are not eligible to Driver's License`
    } else if (age === 16){
        return `You are eligible to Student Permit`
    } else if (age === 17){
        return `You are eligible to Non-Professional Driver's License`
    } else {return(`You are eligible to Professional Driver's License`)}
}

function checkAgeGroup(age){
    if (age >= 65){
        return `Senior`
    } else if (age < 18){
        return `Minor`
    } else {return `Adult`}
}

// let age = 18;
console.log(`${checkVoting(person)}\n${checkLicense(person)}\n${checkAgeGroup(person)}`)

