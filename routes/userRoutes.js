import express from "express";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils.js";
import expressAsyncHanlder from "express-async-handler";
import data from "../data.js";

const userRouter = express.Router();

userRouter.post(
  "/login",
  expressAsyncHanlder(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid Email or Password" });
  })
);

userRouter.post(
  "/signup",
  expressAsyncHanlder(async (req, res) => {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });
    const user = await newUser.save();
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user),
    });
  })
);

userRouter.post("/", (req, res) => {
  for(let i of data.users){
    const user = new User({
      ...i
    });
    user.save();
  }
  return res.status(200);
});

export default userRouter;
