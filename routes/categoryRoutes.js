import express from "express";
import Category from "../models/categoryModel.js";
import data from "../data.js";

const categoryRoutes = express.Router();

categoryRoutes.get("/", async (req, res) => {
  const categories = await Category.find();
  res.send(categories);
});

categoryRoutes.post("/", async (req, res) =>{
  for(let i of data.categoryItems){
    const category = new Category({
      ...i
    });
    await category.save();
  }
  return res.status(200);
});

export default categoryRoutes;
