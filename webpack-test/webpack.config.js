let
    path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: "./scripts/android.js",
    //entry: "./scripts/ios.js",
    output: {
        path: __dirname + '/scripts/',
        filename: "bundle.js"
    },
    modulesDirectories: [ 'node_modules' ],
    module: {
        loaders: [
            { test: /\.css$/, exclude: /\.useable\.css$/, loader: "style!css" },
            { test: /\.useable\.css$/, loader: "style/useable!css" },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: { presets: [ 'es2015', 'react' ] } },
            { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
        ],
        resolve: {
            extensions: ['', '.js', '.styl']
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            'React': 'react',
            'ReactDOM': 'react-dom'
        })
    ]
};

