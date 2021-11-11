const Product = require("../models/productModel");

exports.getAllProducts = async (request, response) => {
  try {
    const product = await Product.find();

    response.status(200).json({
      data: {
        product
      }
    });
  } catch (error) {
    response.status(404).json({
      message: error
    });
  }
};

exports.createAProduct = async (request, response) => {
  try {
    const Product = await Product.create(request.body);

    response.status(201).json({
      data: {
        product: newProduct
      }
    });
  } catch (error) {
    response.status(400).json({
      message: error
    });
  }
};

exports.deleteAProduct = async (request, response) => {
  try {
    const deleteProduct = await Product.delete(request.body);

    response.status(201).json({
      data: {
        product: deleteProduct
      }
    });
  } catch (error) {
    response.status(404).json({
      message: error
    });
  }
};


exports.updateAProduct = async (request, response) => {
  try {
    const updateproduct = await Product.update(request.body);

    response.status(201).json({
      data: {
        product: updateProduct
      }
    });
  } catch (error) {
    response.status(404).json({
      message: error
    });
  }
};
