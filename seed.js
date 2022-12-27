const product = require('./models/product');
const mongoose = require('mongoose');

product.insertMany([
    {
        name:'Eggplant',
        price:9.2,
        category:'fruit'
    },
    {
        name:'Brinjal',
        price:9.2,
        category:'vegetable'
    },

    {
        name:'Aubergine',
        price:9.2,
        category:'vegetable'
    }

]).then(() => {
    console.log("Items added");
}).catch((err) => {
    console.log("Items not added ", err);
});;

//module.exports = Seed;