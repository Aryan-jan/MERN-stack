{/* express is module */}

const express = require("express")
const app = express()
const PORT = 3000

{/* res send response HTML to the server/page */}

app.get(`/`, ( req, res ) => {
    res.send(`Happy birthday Dominic Austria`)
})

app.get(`/about`, ( req, res ) => {
    res.json({ name: `Dominic Austria`, topic: `Express, GET method, Creating servers`})
})

{/* app.listen activates the server */}

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})