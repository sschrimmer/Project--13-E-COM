const { Product } = require('../models');
const productData = [{
        product_name: 'Protein',
        price: 34.99,
        stock: 10,
        category_id: 1,
    },
    {
        product_name: '45lb Plate',
        price: 99.0,
        stock: 4,
        category_id: 2,
    },
    {
        product_name: 'Olympic Barbell',
        price: 349.99,
        stock: 8,
        category_id: 3,
    },
    {
        product_name: 'Power Bar',
        price: 389.99,
        stock: 8,
        category_id: 3,
    },
    {
        product_name: '20lb Resistance Band',
        price: 19.99,
        stock: 50,
        category_id: 4,
    },
    {
        product_name: 'Tank Top',
        price: 14.99,
        stock: 50,
        category_id: 5,
    },
];
const seedProducts = () => Product.bulkCreate(productData);
module.exports = seedProducts;