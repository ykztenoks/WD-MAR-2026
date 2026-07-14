import { Schema, model } from "mongoose"

const CountrySchema = new Schema(
  {
    country: { type: String, required: true, unique: true },
    iso_code: { type: String, required: true },
    confederation: {
      type: String,
      enum: ["UEFA", "CONMEBOL", "CONCACAF", "CAF", "AFC", "OFC"],
      required: true,
    },
    is_host: { type: Boolean, default: false },
    is_debut_2026: { type: Boolean },
    world_cup_titles: { type: Number, max: 6 },
    tournament_status_2026: { type: String },
  },
  {
    timestamps: true,
  },
)

export default model("Country", CountrySchema)
