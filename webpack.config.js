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
            loader: 'style-loader!css-loader',
            // include: /flexboxgrid/
        }]
    }
  // plugins: [
  //     new webpack.ProvidePlugin({
  //       $: 'jquery',
  //       jQuery: 'jquery',
  //       'window.jQuery': 'jquery',
  //       Popper: ['popper.js', 'default'],
  //       // In case you imported plugins individually, you must also require them here:
  //       Util: "exports-loader?Util!bootstrap/js/dist/util",
  //       Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
    
  //     })
  // ]
}
