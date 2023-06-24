const express = require("express")
require("dotenv").config()

const app = express()

app.get("/", (req, res)=> {
    res.send({"msg" : `base API point for the user ${process.env.name}`})
})

app.get("/blogs", (req, res)=> {
    res.send({"blogs" : "blah blah...."})
})

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})