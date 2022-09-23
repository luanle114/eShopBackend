import express from "express";
import Slider from "../models/sliderModel.js";
import data from "../data.js";

const sliderRoutes = express.Router();

sliderRoutes.get("/", async (req, res) => {
  const sliders = await Slider.find();
  res.send(sliders);
});

sliderRoutes.post("/", async (req, res) =>{
  for(let i of data.sliderItems){
    const slider = new Slider({
      ...i
    });
    await slider.save();
  }
  return res.status(200);
});

export default sliderRoutes;
