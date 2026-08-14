const baseContact = { name: `Law`, phone: `123-456-789` }
const fullContact = {...baseContact, email: `law@example.com`}
console.log(fullContact)

function total (...prices){
    return prices.reduce((acc, cur) => acc + cur)
}
console.log(total(67, 69))