import express from "express"
import {
  getCountries,
  getCountry,
  updateCountry,
  createCountry,
  deleteCountry,
} from "../controllers/country.controller.js"

const router = express.Router()

router.get("/", getCountries)
router.get("/:id", getCountry)
router.patch("/:id", updateCountry)
router.post("/create", createCountry)
router.delete("/:id", deleteCountry)

export default router
