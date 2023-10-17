const express = require('express')
const app = express()
const port = 3000
const router = require("./router/user")
app.use('/user' , router)    
app.get('/', (req, res) => {
    res.send({
        status : 200,
        Message: "Project is working...."
    })
})
app.post('/', (req, res) => {
    res.send({
        status : 200,
        Message: "api is working...."
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})