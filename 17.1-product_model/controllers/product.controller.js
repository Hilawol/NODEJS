const productModel = require('../models/product.model');


const createProduct = (req, res) => {
  const { name, category, isActive, details } = req.body;
  const product = new productModel({
    name: name,
    category: category,
    isActive: isActive,
    details: details,
  });

  product.save((err) => {
    if (err) return res.json({ "error": err })
    return res.json({ "success": product })
  });
}

const getProducts = (req, res) => {
  productModel.find({}).then((products) => {
    return res.send(products)
  }).catch((err) => {
    return res.send(err)
  });
}

module.exports = {
  createProduct,
  getProducts
}