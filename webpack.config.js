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


// const path = require('path');
// module.exports = {
//     entry: './src/index.js',
//     output: {
//         //path: 'build'
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js' // bundle est le nom par convention
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.js$/, //regex pour chercher les .js
//                 exclude: /node_modules/,
//                 loaders: ['react-hot-loader/webpack', 'babel-loader'] // pour charger, transpiler les fichiers js
//             },
//             {
//                 test: /\.css$/, //regex pour chercher les .css
//                 loader: 'style-loader!css-loader?modules', // pour importer les css, le style loader est pris en compte avant le css
//                 include: /flexboxgrid/
//             }
//         ]
//     },
//     devServer: {
//         inline: true,
//         port: 3000
//     }
// };