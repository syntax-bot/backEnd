const express = require("express");

const productController = require("../../node/controller/product");

const router = express.Router();

router
  .post("/", productController.createProduct)
  .get("/", productController.getAllProducts)
  .get("/add", productController.getAddProduct)
  .get("/:id", productController.getProduct)
  .put("/:id", productController.replaceProduct)
  .patch("/:id", productController.updateProduct)
  .delete("/:id", productController.deleteproduct);

exports.router=router;