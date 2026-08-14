const express = require(`express`)
const app = express()

//to access source script in ejs file (HTML)
// app.use(express.static(`mern-week2`))

app.use(express.static(`public`))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//to access the ejs file (HTML)
// app.set(`views`, `./mern-week2`)
app.set(`view engine`, `ejs`)

//Send
// app.get(`/`, ( req, res ) => {
//     res.send(`Yohoo`)
// })

//Rendering
// app.get(`/`, logger, ( req, res ) => {
//     res.render(`HTMLday14.ejs`)
// })

//Status
// app.get(`/`, ( req, res ) => {
//     res.status(500).json({ message: `Error`})
// })

//Download
// app.get(`/`, ( req, res ) => {

//     res.download("mern-week3/JSday19.js")
// })

//Router
const userRouter = require(`./routes/users`)

app.use(`/users`, userRouter)

app.listen(3003)