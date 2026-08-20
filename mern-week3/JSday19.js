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
    //Finds the id
    const note = notes.find(u => u.id === Number(req.params.id))

    //catch error
    if (!note) return res.status(404).json({ error: `ID not found`})

    //action
    res.json(note)
})

//POST /notes
app.post(`/notes`, ( req, res ) => {
    //Condition that if the value of text key is empty, return catch error
    if (!req.body.text || req.body.text.trim().length === 0) {
        return res.status(400).json({ error: `JSON cannot be empty`})
    }

    //declare object and store it in newNote variable
    const newNote = { id: notes.length + 1, text: req.body.text }

    //Whatever is inputted in req.body.text of notes will be pushed to newNote
    notes.push(newNote)

    //shows the json body
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
    //finds the index of the id
    const note = notes.findIndex(u => u.id === Number(req.params.id))

    //catch error if the id is -1
    if (note === -1) return res.status(404).json({ error: `Id not found`})
    
    //Action
    notes.splice(note, 1)

    //respond json
    res.json({ message: `Body with id ${req.params.id} Deleted`})
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})