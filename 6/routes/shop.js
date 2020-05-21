const path = require("path");
const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products");

router.get('/', productsController.getProducts);

router.get('/products', productsController.products);

router.get('/cart', productsController.cart);

router.get('/checkout', productsController.checkout);

module.exports = router;