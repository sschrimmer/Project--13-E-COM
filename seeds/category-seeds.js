const { Category } = require('../models');
const categoryData = [{
        category_name: 'Supplements',
    },
    {
        category_name: 'Weights',
    },
    {
        category_name: 'Barbells',
    },
    {
        category_name: 'Bands',
    },
    {
        category_name: 'Apparel',
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);
module.exports = seedCategories;