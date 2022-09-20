import express from "express";
import Slider from "../models/sliderModel.js";

const sliderRoutes = express.Router();

sliderRoutes.get("/", async (req, res) => {
  const sliders = await Slider.find();
  res.send(sliders);
});

export default sliderRoutes;
