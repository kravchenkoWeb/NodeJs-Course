const path = require("path");
const express = require("express");
const router = express.Router();

const adminData = require("./adminRoutes");

router.get('/', (req, res, next) => {
    const prodcuts = adminData.products;
    res.render("shop", {
        prods: prodcuts,
        pageTitle: 'Shop',
        path: '/',
        hasVal: prodcuts.length > 0,
        activeShop: true,
        productCss: true
    });
});

module.exports = router;