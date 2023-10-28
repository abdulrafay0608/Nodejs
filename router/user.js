const express = require('express')
const router = express.Router()
const adduser = require("./adduser")
router.use('/adduser', adduser)
const userModel = require("../model/user")
console.log(userModel);
// const user = [
//     { name: "Alice", email: "alice@gmail.com", id: 1 },
//     { name: "Bob", email: "bob@gmail.com", id: 2 },
//     { name: "Charlie", email: "charlie@gmail.com", id: 3 },
//     { name: "David", email: "david@gmail.com", id: 4 },
//     { name: "Ella", email: "ella@gmail.com", id: 5 },
//     { name: "Frank", email: "frank@gmail.com", id: 6 },
//     { name: "Grace", email: "grace@gmail.com", id: 7 },
//     { name: "Henry", email: "henry@gmail.com", id: 8 },
//     { name: "Ivy", email: "ivy@gmail.com", id: 9 }
//   ];
  
  


router.get('/' , (req ,res) => {
    res.send({
        status: 200,
        users : user
    })
})
router.post('/' , (req ,res) => {
    console.log(req.body)
    res.send({
        status: 200,
        users : user
    })
})




module.exports = router