let checkVoting = isAge => (isAge >= 18) ? `You are an adult and eligible to vote` : `You are a minot and not eligible to vote`

function checkLicense(isAge){
    if (isAge < 16){
        return `You are not eligible to Driver's License`
    } else if (isAge === 16){
        return `You are eligible to Student Permit`
    } else if (isAge === 17){
        return `You are eligible to Non-Professional Driver's License`
    } else {return(`You are eligible to Professional Driver's License`)}
}

function checkAgeGroup(isAge){
    if (isAge >= 65){
        return `Senior`
    } else if (isAge < 18){
        return `Minor`
    } else {return `Adult`}
}

let age = 18;
console.log(`${checkVoting(age)}\n${checkLicense(age)}\n${checkAgeGroup(age)}`)


