const path = require('path');

module.exports = {
    entry: '/shop.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};