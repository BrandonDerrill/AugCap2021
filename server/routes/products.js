const { Router } = require("express");
const Product = require("../models/Product");
const router = Router();

router.route("/").get((request, response) => {
  // handle GET request
  response.send(JSON.stringify({ message: "All products" }));
});

// Create record in MongoDB
router.post("/", (request, response) => {
  const newProduct = new Product.model(request.body);
  newProduct.save((err, product) => {
    return err ? response.sendStatus(500).json(err) : response.json(product);
  });
});
