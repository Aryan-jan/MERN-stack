const numArray = [1,2,3,4,5,6]

const numFilter = numArray.filter(n => n % 2 === 0)
console.log(`${numFilter}`)

const numMap = numFilter.map(n => n * 2)
console.log(`${numMap}`)

console.log(`${numArray}`)