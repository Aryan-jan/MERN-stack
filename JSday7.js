for (let i = 1; i < 31; i++){
    if ((i % (3 * 5)) === 0){
        console.log(`FizzBuzz`)
    } else if (i % 3 === 0){
        console.log(`Fizz`)
    } else if (i % 5 === 0){
        console.log(`Buzz`)
    } else (console.log(i))
}

const people = [
    { name: `Rex`, age: 16},
    { name: `Valera`, age: 18},
    { name: `Taeza`, age: 20}
];

// const filterAge = people.filter(n => n.age >= 18)
// const mapPeople = filterAge.map(n => n.name)
// console.log(mapPeople)

function findAdults(people){
        const filterAge = people.filter(n => n.age >= 18)
        const mapPeople = filterAge.map(n => n.name)
        return mapPeople
}

console.log(findAdults(people))