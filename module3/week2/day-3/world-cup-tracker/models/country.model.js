import { Schema, model } from "mongoose"

const CountrySchema = new Schema(
  {
    country: { type: String, required: true, unique: true },
    iso_code: { type: String, required: true, unique: true },
    confederation: {
      type: String,
      required: true,
      enum: ["CONMEBOL", "CONCACAF", "UEFA", "CAF", "AFC", "OFC"],
    },
    is_host: Boolean,
    is_debut_2026: Boolean,
    tournament_status_2026: String,
  },
  {
    timestamps: true,
  },
)

export default model("Country", CountrySchema)
