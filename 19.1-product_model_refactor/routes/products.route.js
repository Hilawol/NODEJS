const express = require('express');
const router = express.Router();
const productControler = require('../controllers/product.controller');


router
  .get('/', (req, res) => {
    productControler.getProducts(req, res);
  })
  .get('/active', (req, res) => {
    productControler.getActiveProducts(req, res);
  })
  .get('/price', (req, res) => {
    productControler.getByPriceRange(req, res);
  })
  .get('/:name', (req, res) => {
    productControler.getProductbyName(req, res);
  })
  .patch('/:name', (req, res) => {
    productControler.updateProduct(req, res);
  })
  .post('/', (req, res) => {
    productControler.createProduct(req, res);
  })
  .delete('/', (req, res) => {
    productControler.deleteAllProducts(req, res);
  })
  .delete('/:name', (req, res) => {
    productControler.deleteProduct(req, res);
  })


module.exports = router;