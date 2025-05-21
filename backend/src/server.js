import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
// const express = require("express")
// first api  

const app = express()
app.use("./api/notes",notesRoutes)

// route or a endpoint enpoint is a combination of a url a http method that lets the client interact with a specific resource

app.listen(5001,() => {
    console.log("server started on port")
})