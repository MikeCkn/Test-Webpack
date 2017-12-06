const path = require('path');
// const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['react-hot-loader/patch', './src/index.js'],
    output: {
        //path: 'build'
        // path: path.resolve(__dirname, 'public'),
        // publicPath: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: ['react-hot-loader/webpack', 'babel-loader']
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    }
    // plugins: [
    //     new HtmlPlugin({
    //         title: 'TestX',
    //         filename: path.join(__dirname, './public/index.html')
    //     })
    // ]
}
