import mongoose from "mongoose";

//Create table
const categorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true, //add date
  }
);

const Category = mongoose.model("Category", categorySchema); // name for table
export default Category;
