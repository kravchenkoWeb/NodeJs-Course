const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join( rootDir, 'views', 'add-product.html'));
    res.render("add-product", {pageTitle: 'Add Product', path: 'admin/add-product', formsCss: true, productCss: true, activeProduct: true});
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render("shop", {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasVal: products.length > 0,
            activeShop: true,
            productCss: true
        });
    });
};