let
    path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: "./scripts/main.js",
    output: {
        path: __dirname + '/scripts/',
        filename: "bundle.js"
    },
    modulesDirectories: [ 'node_modules' ],
    module: {
        loaders: [
            { test: /\.css$/, exclude: /\.useable\.css$/, loader: "style!css" },
            { test: /\.useable\.css$/, loader: "style/useable!css" },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: { presets: [ 'es2015', 'react' ] } }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            'React': 'react',
            'ReactDOM': 'react-dom'
        })
    ]
};