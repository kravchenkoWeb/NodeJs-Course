const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cartItem');
const Order = require('./models/order');
const OrderItem = require('./models/orderItem');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
   User.findByPk(1).then(user => {
       req.user = user;
       next();
   }).catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Product); // Just to show another direction of relations between Products and Users

User.hasOne(Cart);
Cart.belongsTo(User);

Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, {through: OrderItem});

sequelize
    .sync()
    // .sync({force: true}) // force commented because we don't want to override our table each time
    .then(response => {
    // console.log(response);
    return User.findByPk(1);
})
    .then(user => {
        if (!user) {
            return User.create({
                name: 'Vitaliy',
                email: 'kravamail@dd.qw'
            })
        }

        return Promise.resolve(user); // Also possible just return user without promise, it's just to clarify;
    })
    .then(user => {
        user.createCart();
    })
    .then(user => {
        // console.log(user);
        app.listen(3000);
    })
    .catch(err => console.log(err))
