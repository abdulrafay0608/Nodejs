const express = require('express')
const route = express.Router()

  


route.get('/:id' , (req ,res) => {
    res.send(
        "add user router is working"
    )
})





module.exports = route