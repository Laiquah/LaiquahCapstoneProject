const { Users } = require('./Users.js')
const { Orders } = require('./Orders.js')
const { Products } = require('./Products.js')

module.exports = {
    users: new Users(),
    cart: new Orders(),
    products: new Products()
}