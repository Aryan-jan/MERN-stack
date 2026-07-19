let contactBook = [
    {
        name: `Law`,
        phone: `123-456-789`,
        email: `law@example.com`
    },
    {
        name: `Jed`,
        phone: `321-654-987`,
        email: `jed@example.com`
    },
    {
        name: `Rex`,
        phone: `987-654-321`,
        email: `rex@example.com`
    }
]

// console.log(contactBook[1])
// console.log(contactBook[0].name)
contactBook.forEach(
    contact => console.log(`Name: ${contact.name}\nPhone: ${contact.phone}\nEmail: ${contact.email}\n`)
    )

for (const key in contactBook) {
    console.log(`${key}: ${contactBook[key]}`)
}
