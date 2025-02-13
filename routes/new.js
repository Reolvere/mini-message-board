const express = require("express")
const router = express.Router()
const messages = require('../messages')

router.get("/", (req, res) => {
    res.render("form")
})

router.post("/", (req, res) => {
    console.log("Received POST request:", req.body);
    const { messageText, messageUser } = req.body;
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect("/")
})

module.exports = router