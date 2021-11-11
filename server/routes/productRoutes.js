const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.createAProduct);
  .delete(productController.deleteAProduct);
  .put(productController.updateAProduct);
module.exports = router;
