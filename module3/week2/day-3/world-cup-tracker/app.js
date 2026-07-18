import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import connectDB from "./db/connect.js"
import countryRoutes from "./routes/country.routes.js"
import "dotenv/config" //makes environment variables available

const app = express()

app.use(morgan("dev")) // logs requests
app.use(helmet()) // sets HTTP headers
app.use(express.json()) // parses json

app.use("/countries", countryRoutes)

app.listen(process.env.PORT, () => {
  console.log("server up and running on port " + process.env.PORT)
  connectDB()
})
