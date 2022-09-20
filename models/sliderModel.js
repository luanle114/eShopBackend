import mongoose from "mongoose";

//Create table
const sliderSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
  },
  {
    timestamps: true, //add date
  }
);

const Slider = mongoose.model("Slider", sliderSchema); // name for table
export default Slider;
