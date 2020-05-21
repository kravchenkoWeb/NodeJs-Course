const path = require("path");
const express = require("express");

const productsController = require("../controllers/products");

const router = express.Router();




// /admin/add-product => get
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => post
router.post('/add-product', productsController.postAddProduct);

// /admin/products => get
router.get('/products', productsController.adminProds);

exports.routes = router;