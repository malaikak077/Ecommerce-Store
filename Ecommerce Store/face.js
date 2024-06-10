const mongoose = require('mongoose');
const FaceMakeup = require("./Models/FaceMakeup");

mongoose.connect("mongodb://localhost:27017/SemesterProject");

// Sample product data
const products = [
    {
        title: 'Silk Foundation',
        imageUrl: 'https://missrosepakistanofficial.com/cdn/shop/files/MissRoseOilFreeLiquidfoundation.jpg?v=1690992709&width=823',
        price: 120
    },
    {
        title: 'Loose Powder',
        imageUrl: 'https://missrosepakistanofficial.com/cdn/shop/files/MissRose2in1ShellShapedCompact_1.jpg?v=1690990678&width=823',
        price: 130
    },
    {
        title: 'Single Highlighter',
        imageUrl: 'https://missrosepakistanofficial.com/cdn/shop/files/SingleHighlighter_1.jpg?v=1690993116&width=823',
        price: 140
    },
    {
        title: 'Foundation Primer',
        imageUrl: 'https://missrosepakistanofficial.com/cdn/shop/files/MissRosePearlPrimer_2.jpg?v=1690993032&width=823',
        price: 150
    },
    {
        title: 'Rose Loose powder',
        imageUrl: 'https://missrosepakistanofficial.com/cdn/shop/files/MissRoseLoosepowder_8_bd4486c4-2f9e-4e6c-b999-94f1a8f8c106.jpg?v=1690998443&width=823',
        price: 170
    },
    {
        title: 'Full Coverage Foundation',
        imageUrl: 'https://missrosepakistanofficial.com/cdn/shop/files/strongcoverliquidfoundation-1809-09.jpg?v=1703662443&width=823',
        price: 150
    },
    {
        title: 'BB Cream',
        imageUrl: 'https://missrosepakistanofficial.com/cdn/shop/files/MissRoseBBCream_1.jpg?v=1690992047&width=823',
        price: 190
    },
    {
        title: 'Baby Primer',
        imageUrl: 'https://missrosepakistanofficial.com/cdn/shop/files/PreMakeupPrimer_1.jpg?v=1690992996&width=823',
        price: 120
    },
    {
        title: 'Blush Palette',
        imageUrl: 'https://missrosepakistanofficial.com/cdn/shop/files/MissRose6ColorBlushPalette_1.jpg?v=1687870835&width=823',
        price: 160
    },
    {
        title: 'Light Coverage Foundation',
        imageUrl: 'https://missrosepakistanofficial.com/cdn/shop/files/MissRoseHydratingFoundation_3.jpg?v=1687864097&width=823',
        price: 200
    },
    {
        title: 'Square Compact Powder',
        imageUrl: 'https://missrosepakistanofficial.com/cdn/shop/files/MineralCompactPowder_2.jpg?v=1690991977&width=823',
        price: 140
    },
    {
        title: 'Single Blush',
        imageUrl: 'https://missrosepakistanofficial.com/cdn/shop/files/SingleBlush-P_1.jpg?v=1690990345&width=823',
        price: 180
    },
    {
        title: 'Eye Shadow Palette',
        imageUrl: 'https://missrosepakistanofficial.com/cdn/shop/files/work-12-01.jpg?v=1698415821&width=823',
        price: 100
    },
    {
        title: 'Translucent Powder',
        imageUrl: 'https://missrosepakistanofficial.com/cdn/shop/files/E860CC7A-DFEF-48E4-8602-E55254B26D13.jpg?v=1700503162&width=823',
        price: 150
    },
    {
        title: 'Funky Vanity Box',
        imageUrl: 'https://missrosepakistanofficial.com/cdn/shop/files/work-14-01.jpg?v=1698416437&width=823',
        price: 160
    },
    {
        title: 'Zig Zag Blush Palette',
        imageUrl: 'https://missrosepakistanofficial.com/cdn/shop/files/AH1I6009.jpg?v=1712295726&width=823',
        price: 210
    }











   
    
];

// Insert products into MongoDB
FaceMakeup.insertMany(products)
    .then(() => {
        console.log('Products inserted successfully');
    })
    .catch(err => {
        console.error('Error inserting products:', err);
    });
