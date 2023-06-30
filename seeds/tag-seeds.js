const { Tag } = require('../models');
const tagData = [{
        tag_name: 'Olympic',
    },
    {
        tag_name: 'Power',
    },
    {
        tag_name: 'Gear',
    },
    {
        tag_name: 'Rubberized',
    },
    {
        tag_name: 'Iron',
    },
    {
        tag_name: 'Steel',
    },
    {
        tag_name: 'Preworkout',
    },
    {
        tag_name: 'Powder',
    },
    {
        tag_name: 'Liquid',
    },
];
const seedTags = () => Tag.bulkCreate(tagData);
module.exports = seedTags;