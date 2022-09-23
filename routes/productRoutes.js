import express from "express";
import Product from "../models/productModel.js";
import data from "../data.js";

const productRoutes = express.Router();

productRoutes.get("/", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

//Product
productRoutes.get("/slug/:slug", async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not Found" });
  }
});

productRoutes.post("/", async (req, res) =>{
  for(let i of data.products){
    const product = new Product({
      ...i
    });
    await product.save();
  }
  return res.status(200).send({ message: "Product not Found" });;
});

export default productRoutes;
