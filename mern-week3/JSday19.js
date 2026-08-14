const express = require(`express`)
const app = express()
const PORT = 3002
app.use(express.json())

//Create array as temporary storage

let notes = []

//GET / notes
app.get(`/notes`, ( req, res ) => {
    res.json(notes)
})

app.get(`/notes/:id`, ( req, res ) => {
    const note = notes.find(u => u.id === Number(req.params.id))
    if (!note) return res.status(404).json({ error: `ID not found`})
    res.json(note)
})

//POST /notes
app.post(`/notes`, ( req, res ) => {
    if (!req.body.text || req.body.text.trim().length === 0) {
        return res.status(400).json({ error: `JSON cannot be empty`})
    }
    const newNote = { id: notes.length + 1, text: req.body.text }
    notes.push(newNote)
    res.json(newNote)
})

//PUT /notes/:id
app.put(`/notes/:id`, ( req, res ) => {
    //Locate the id
    const note = notes.find(u => u.id === Number(req.params.id))

    //Catch error
    if (!note) return res.status(404).json({ error: `ID not found`})
    
    //Action
    note.text = req.body.text;

    //respond or result
    res.json(note)
})

app.delete(`/notes/:id`, ( req, res ) => {
    const note = notes.findIndex(u => u.id === Number(req.params.id))
    if (note === -1) return res.status(404).json({ error: `Id not found`})
    notes.splice(note, 1)
    res.json({ message: `Body with id ${req.params.id} Deleted`})
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})