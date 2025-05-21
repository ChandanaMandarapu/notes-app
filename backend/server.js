import express from "express"

// const express = require("express")
// first api  

const app = express()

app.get("/api/notes",(req,res) => {
    res.send("you got 5notes")
})
app.listen(5001,() => {
    console.log("server started on port")
})