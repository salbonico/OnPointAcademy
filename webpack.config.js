module.exports = {
  context: __dirname + "/app",
  entry: "./app.js",

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
}
module: {
  loaders: [
    // Make sure 'haml-jsx' is last!
    { test: /\.js$/, loaders: ['babel', 'haml-jsx'] },

    // Works with hot module replacement:
    { test: /\.js$/, loaders: ['react-hot', 'babel', 'haml-jsx'] },
  ]
},
