import express from "express"
import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import isAuth from "../middlewares/isAuth.middleware.js"

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

router.post("/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body

    if (!email || !password || !username) {
      return res.status(400).json({ message: "Please provide all fields" })
    }

    const passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/

    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          "Password must be 8 characters long and contain one uppercase and one lowercase character, a number, and a special character.",
      })
      return
    }

    const foundUser = await User.findOne({ $or: [{ email }, { username }] })
    if (foundUser) {
      return res.status(409).json({ message: "User already exists" })
    }

    const salts = await bcrypt.genSalt(10)

    const hashedPassword = await bcrypt.hash(password, salts)

    const createdUser = await User.create({
      email,
      username,
      password: hashedPassword,
    })

    res.status(201).json(createdUser)
  } catch (error) {
    console.log(error.message)
    res.status(500).json(error.message)
  }
})

router.post("/login", async (req, res) => {
  try {
    const { email, username, password } = req.body

    if ((!email && !username) || !password) {
      return res
        .status(400)
        .json({ message: "please provide email or username and password" })
    }

    const foundUser = await User.findOne({ $or: [{ email }, { username }] })

    if (!foundUser) {
      return res.status(404).json({ message: "This user does not exist" })
    }

    const passwordCheck = await bcrypt.compare(password, foundUser.password)

    if (!passwordCheck) {
      return res.status(401).json({ message: "Password incorrect" })
    }

    const token = await jwt.sign(
      {
        email: foundUser.email,
        username: foundUser.username,
        _id: foundUser._id,
      },
      process.env.TOKEN_SECRET,
      { algorithm: "HS256", expiresIn: "1h" },
    )

    res
      .status(200)
      .json({ message: "Logged in succesfully", token, user: foundUser })
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

router.get("/verify", isAuth, (req, res) => {
  console.log(req.user)
  res.status(200).json({ user: req.user })
})

export default router
