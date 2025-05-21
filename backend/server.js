import express from "express"

// const express = require("express")
// first api  

const app = express()
// route or a endpoint enpoint is a combination of a url a http method that lets the client interact with a specific resource
app.get("/api/notes",(req,res) => {
    res.status(200).send("you got 10 notes")
})
app.post("/api/notes",(req,res) => {
    res.status(201).json({message: "post creeated succesfully"})
})
app.put("/api/notes/:id",(req,res) => {
    res.status(201).json({message: "post updated succesfully"})
})
app.delete("/api/notes/:id",(req,res) => {
    res.status(201).json({message: "note deleted succesfully"})
})

app.listen(5001,() => {
    console.log("server started on port")
})