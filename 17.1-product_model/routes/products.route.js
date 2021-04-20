const express = require('express');
const router = express.Router();
const productControler = require('../controllers/product.controller');


router.get('/', (req, res) => {
  productControler.getProducts(req, res);
}).post('/', (req, res) => {
  productControler.createProduct(req, res);
})

module.exports = router;