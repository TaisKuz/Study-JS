module.exports = {
  entry: "./scripts/entry.js",
  output: {
    path: __dirname + '/scripts/',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, exclude: /\.useable\.css$/, loader: "style!css" },
      { test: /\.useable\.css$/, loader: "style/useable!css" }
    ]
  }
};