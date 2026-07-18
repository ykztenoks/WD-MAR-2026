import { Schema, model } from "mongoose"

const PlayerSchema = new Schema(
  {
    name: { type: String, unique: true, required: true },
    position: {
      type: String,
      enum: ["Attacker", "Defender", "Midfielder", "Goalkeeper"],
    },
    age: { type: Number, max: 50 },
    goals_2026: Number,
    assists_2026: Number,
    current_club: String,
    country: { type: Schema.Types.ObjectId, ref: "Country" },
  },
  {
    timestamps: true,
  },
)

export default model("Player", PlayerSchema)
