import express from "express"
import morgan from "morgan"
import connectDB from "./db/mongoose.connect.js"
import Country from "./models/country.model.js" // Country could be 🍌
import Player from "./models/player.model.js" // Player could be 🍌
import "dotenv/config"

const app = express()

app.use(morgan("dev"))
app.use(express.json())

app.get("/", (req, res) => {
  res.json({ message: "hi there" })
})

app.get("/countries", async (req, res) => {
  try {
    const countries = await Country.find()

    res.status(200).json(countries)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

app.post("/countries", async (req, res) => {
  try {
    const {
      country,
      iso_code,
      confederation,
      is_host,
      is_debut_2026,
      world_cup_titles,
      tournament_status_2026,
    } = req.body

    const created = await Country.create({
      country,
      iso_code,
      confederation,
      is_host,
      is_debut_2026,
      tournament_status_2026,
    })

    res.status(201).json(created)
  } catch (error) {
    console.log(error)
    if (error.errorResponse.code === 11000) {
      return res.status(500).json({ message: "This country already exists" })
    }
    res.status(500).json(error)
  }
})

app.get("/players", async (req, res) => {
  try {
    const players = await Player.find().populate("country")

    res.status(200).json(players)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

app.post("/player", async (req, res) => {
  try {
    const {
      name,
      country,
      position,
      age,
      goals_2026,
      assists_2026,
      current_club,
    } = req.body
    const created = await Player.create({
      name,
      country,
      position,
      age,
      goals_2026,
      assists_2026,
      current_club,
    })
    res.status(201).json(created)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

app.listen(8080, () => {
  console.clear()
  console.log("Server up and running")
  connectDB()
})
