import { Schema, model } from "mongoose"

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    maxLength: "16",
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, "Provide valid email"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
})

export default model("User", UserSchema)
