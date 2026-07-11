// const express = require("express")
import express from "express"
import morgan from "morgan"

const app = express()

app.use(express.static("public"))
app.use(express.json())
app.use(morgan("dev"))

app.get("/health", (req, res) => {
  try {
    res.status(200).json({ message: "We are healthy" })
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

app.get("/welcome-message", (req, res) => {
  try {
    res.send("<h1>Hello world! Welcome</h1> <p>we are learning express!</p>")
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

app.get("/homepage", (req, res) => {
  try {
    res.sendFile(import.meta.dirname + "/views/homepage.html")
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

app.get("/john-doe", (req, res) => {
  try {
    res.sendFile(import.meta.dirname + "/views/john-doe.html")
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

app.listen(8080, () => {
  console.log("Server up and running on 8080")
})
