import express from "express";
import Category from "../models/categoryModel.js";

const categoryRoutes = express.Router();

categoryRoutes.get("/", async (req, res) => {
  const categories = await Category.find();
  res.send(categories);
});

export default categoryRoutes;
