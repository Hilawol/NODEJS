const productModel = require('../models/product.model');

const createProduct = async (req, res) => {
  const { name, category, isActive, details } = req.body;
  const product = new productModel({
    name: name,
    category: category,
    isActive: isActive,
    details: details,
  });
  try {
    const result = await product.save();
    return res.status(201).json({ "success": result });
  } catch (error) {
    return res.status(500).json({ "error": error })
  }
}

const getProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    return res.send(products);
  } catch (error) {
    return res.status(500).json({ "error": error })
  }
}

const getProductbyName = async (req, res) => {
  try {
    const { name } = req.params;
    const product = await productModel.findOne({ name: name });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    return res.send(product);
  } catch (error) {
    return res.status(500).json({ "error": error })
  }
}

const getActiveProducts = async (req, res) => {
  try {
    const query = req.query;
    if (query.hasOwnProperty("isActive")) {
      const products = await productModel.find({ isActive: query.isActive });
      return res.send(products);
    }
    else {
      return res.status(400).send();
    }
  } catch (error) {
    return res.status(500).json({ "error": error })
  }
}

const getByPriceRange = async (req, res) => {
  try {
    const query = req.query;
    if (query.hasOwnProperty("min") && query.hasOwnProperty("max")) {
      const products = await productModel.find({ "details.price": { $gt: query.min, $lt: query.max } });
      return res.send(products);
    }
    else {
      return res.status(400).send();
    }
  } catch (error) {
    return res.status(500).json({ "error": error })
  }
}

module.exports = {
  createProduct,
  getProducts,
  getProductbyName,
  getActiveProducts,
  getByPriceRange
}