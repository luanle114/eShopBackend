import mongoose from "mongoose";

//Create table
const usersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true, //add date
  }
);

const User = mongoose.model("User", usersSchema); // name for table
export default User;
