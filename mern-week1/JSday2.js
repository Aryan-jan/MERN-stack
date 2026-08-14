console.log(`Voter and Driver Age Verification\nHow old are you?`)

const age = 18

if (age < 0){
    console.log(`${age} is not a valid age.`)
} else {verifier()}

function verifier() {
    console.log(`I'm ${age} years old`)

    if (age < 18){
        console.log(`You are a minor and not eligable to vote.`)
    } else {console.log(`You are an adult and are eligable to vote.`)}

    if (age < 16){
        console.log(`You are not eligible to Driver's License`)
    } else if(age === 16){
        console.log(`You are eligible to Student License`)
    } else if (age === 17){
        console.log(`You are eligible to Non-Professional License`)
    } else {console.log(`You are eligible to Professional License`)}

    if (age >= 65){
        console.log(`Senior`)
    } else if (age >= 18){
        console.log(`Adult`)
    } else {console.log(`Minor`)}
    }