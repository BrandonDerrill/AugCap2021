const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  quantity: [String],
  color: [String],
  size: [String]


});

const Product = mongoose.model("Product", productSchema);

module.exports = {
  model: Product,
  schema: productSchema
};
