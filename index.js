const express = require('express')
const app = express()
const path = require("node:path")

//to parse the form data
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

//routes
const appRoute = require('./routes/app')
const newRoute = require('./routes/new')
app.use("/", appRoute)
app.use("/new", newRoute)

//setting views
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

const PORT = 3000

app.listen(PORT, () => {
    console.log(`running on the port ${PORT}` )
})