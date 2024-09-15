const path =require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].bundle.js'
    },
plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/template.html'),
        filename: 'index.html'
    })
],

module: {
    rules: [
        {
            test: /\.(?:ico|png|jpeg|gif|jpg)$/i,
            type: 'asset/resource'
        }
            ]
        }
    
}



