//importing express framework

const express = require(`express`)
const app = express()
const PORT = 3001

//User Array

const users = [
    {
        id: 51,
        name: `Alexander Hamilton`,
        legacy: `US Constitution: The Federalist Papers`
    },
    {
        id: 1776,
        name: `Aaron Burr`,
        legacy: `Parent's legacy`
    },
    {
        id: 10,
        name: `Elizabeth Schuyler`,
        legacy: `Burned Alexander's letters while singing \"Burn\"`
    },
]

//getting / page

app.get(`/`, ( req, res ) => {
    res.send("My dog speaks more eloquently than thee")
})

app.get(`/users`, ( req, res ) => {
    res.json(users)
})

// app.get(`/users/:id`, ( req, res ) => {
//     res.json({ id: req.params.id })
// })

//getting the object using id

app.get(`/users/:id`, ( req, res ) => {
    const user = users.find(u => u.id === Number(req.params.id))
    res.json(user)
})

//searching for term

app.get(`/search`, ( req, res ) => {
    res.json({ searchTerm: req.query.term })
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})