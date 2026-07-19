const num = [1, 2, 3]
const person = [`Rex`, `Valera`, `Taeza`]

const m1 = num.map(n => n + 3) //each element is added 3
console.log(m1)

const m2 = num.filter(n => n > 2) //shows element that are more than 2
console.log(m2)

const m3 = num.reduce((acc, cur) => acc * cur) 
/* acc = index 0, cur = index 1
acc = acc[0] * cur[1]
acc = acc[0 * 1] * cur[2]
*/
console.log(m3)

const m4 = person.find(n => n = person[0]) //finds the element
console.log(m4)

const m5 = person.includes(`Valera`) //boolean; checks if it includes the element
console.log(m5)

const m6 = person.forEach((hooman) => {
    console.log(`I'm ${hooman}`)
}); //a loop that calls the element dependeng on the condition 


