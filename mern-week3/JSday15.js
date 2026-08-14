const { jackEnPoy } = require(`./helpers`)

console.log(jackEnPoy(3))

const fs = require(`fs`)

fs.writeFileSync(`journal.txt`, `August 4 started learning Node`)

const content = fs.readFileSync(`journal.txt`, `utf8`)
console.log(content)

fs.appendFileSync(`journal.txt`, `\nAnother line.`)

const updatedContent = fs.readFileSync(`journal.txt`, `utf8`)
console.log(updatedContent)