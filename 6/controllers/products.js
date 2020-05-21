const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join( rootDir, 'views', 'add-product.html'));
    res.render("admin/add-product", {pageTitle: 'Add Product', path: '/admin/add-product', formsCss: true, productCss: true, activeProduct: true});
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render("shop/product-list", {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasVal: products.length > 0,
            activeShop: true,
            productCss: true
        });
    });
};

exports.products = (req, res, next) => {
    res.render("shop/index", {
        path: '/products',
        pageTitle: 'Main Products'
    });
};

exports.cart = (req, res, next) => {
    res.render("shop/cart", {
        path: '/cart',
        pageTitle: 'Cart'
    });
};

exports.adminProds = (req, res, next) => {
    res.render("admin/products", {
        path: '/admin/products',
        pageTitle: 'products'
    });
};

exports.checkout = (req, res, next) => {
    res.render("shop/checkout", {
        path: "/checkout",
        pageTitle: "Checkout"
    });
};