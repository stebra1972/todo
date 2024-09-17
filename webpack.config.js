const path =require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    devServer: {
        inline: true,
        port: 8000
     },



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
        // Existing rules...
        {
            test: /\.(?:ico|png|jpeg|gif|jpg)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
    ],
        }

        
    
}



