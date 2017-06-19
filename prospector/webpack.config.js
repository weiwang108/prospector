const path = require('path');

const sfcta_components = [
     'cmp',
     'tnc',
];

module.exports = {
     entry: () => {
       let entries = {};
       for (let tool of sfcta_components) {
         entries[tool] = `./src/${tool}/code.js`;
       }
       return entries;
     },

     output: {
         path: path.join(__dirname, './src/bundles/'),
         filename: '[name].js'
     },
     module: {
       loaders: [{
         exclude: /node_modules/,
         loader: 'babel-loader',
       }]
     },
};
