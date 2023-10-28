const express = require('express')
const app = express()
const port = 3000
const router = require("./router/user")
const mongoose = require('mongoose');
app.use('/user', router)


mongoose.connect('mongodb+srv://abdulrafay0608:abdulrafay@backend.bcab9hf.mongodb.net/').then(() => {
    console.log('Mongodb Connected')
}).catch((err) => console.log(err))



app.get('/', (req, res) => {
    res.send({
        status: 200,
        Message: "Project is working...."
    })
})
app.post('/', (req, res) => {
    res.send({
        status: 200,
        Message: "api is working...."
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})