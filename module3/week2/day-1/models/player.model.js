import { Schema, model } from "mongoose"

const PlayerSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    country: { type: Schema.Types.ObjectId, ref: "Country" },
    position: {
      type: String,
      enum: ["Attacker", "Midfielder", "Defender", "Goalkeeper"],
    },
    age: Number,
    goals_2026: { type: Number },
    assists_2026: { type: Number },
    current_club: { type: String },
  },
  {
    timestamps: true,
  },
)

export default model("Player", PlayerSchema)
