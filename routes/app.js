// const messages = [
//     {
//       text: "Hi there!",
//       user: "Amando",
//       added: new Date()
//     },
//     {
//       text: "Hello World!",
//       user: "Charles",
//       added: new Date()
//     }
// ];

const express = require('express')
const router = express.Router()
const messages = require('../messages')

router.get("/", (req, res) => {
    res.render("index", {title: "Mimi messageboard", messages: messages})
})

module.exports = router