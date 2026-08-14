const express = require(`express`)
const router = express.Router()

router.use(logger)

router.get(`/`, ( req, res ) => {
    console.log(req.query.name)
    res.send(`User List`)
})

router.get(`/new`, ( req, res ) => {
    res.render(`users/new`)
})

router.post(`/`, ( req, res ) => {
    const isValid = true
    if (isValid){
        users.push({ firstName: req.body.firstName })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log(`Erorr`)
        res.render(`users/new`, { firstName: req.body.firstName })
    }
    console.log(req.body.firstName)
    res.send(`Hi`)
})

//Dynamic Route

//cleaner code block
router.
    route(`/:id`)
    .get(( req, res ) => {
        console.log(req.user)
        res.send(`Get User with ID ${req.params.id}`)
    })
    .put(( req, res ) => {
        res.send(`Update User with ID ${req.params.id}`)
    })
    .delete(( req, res ) => {
        res.send(`Delete User with ID ${req.params.id}`)
    })

//same code block but separate
// router.get(`/:id`, ( req, res ) => {
//     res.send(`Get User with ID ${req.params.id}`)
// })

// router.put(`/:id`, ( req, res ) => {
//     res.send(`Update User with ID ${req.params.id}`)
// })

// router.delete(`/:id`, ( req, res ) => {
//     res.send(`Delete User with ID ${req.params.id}`)
// })

const users = [{ name: `Cj Cabe`}, { name: `Ralph Oliver Ebrado`}]

router.param(`id`, ( req, res, next, id ) =>{
    req.user = users[id]
    next()
})

function logger( req, res, next ){
    console.log(req.originalUrl)
    next()
}

module.exports = router