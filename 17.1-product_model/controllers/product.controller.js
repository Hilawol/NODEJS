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

const getProductbyName = (req, res) => {
  const { name } = req.params;
  productModel.findOne({ name: name }).then((product) => {
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    return res.send(product)
  }).catch((err) => {
    return res.send(err)
  });
}

const activeProducts = (req, res) => {
  const query = req.query;
  if (query.hasOwnProperty("isActive")) {
    productModel.find({ isActive: query.isActive }, (err, results) => {
      if (err) {
        return res.status(500).send();
      }
      else return res.send(results);
    })
  }
  else return res.status(401).send();
}

const getByPriceRange = (req, res) => {
  const query = req.query;
  if (query.hasOwnProperty("min") && query.hasOwnProperty("max")) {
    productModel.find({ "details.price": { $gt: query.min, $lt: query.max } }, (err, results) => {
      if (err) {
        return res.status(500).send();
      }
      else return res.send(results);
    })
  }
  else return res.status(401).send();
}

module.exports = {
  createProduct,
  getProducts,
  getProductbyName,
  activeProducts,
  getByPriceRange
}