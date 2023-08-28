const Users = require('./Users.js')
const Cart = require('./Cart.js')
const Products = require('./Products.js')

module.exports = {
    users: new Users(),
    cart: new Cart(),
    products: new Products()
}