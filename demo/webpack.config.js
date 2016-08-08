module.exports = {
  context: __dirname,

  entry: './index.js',

  output: {
    path: 'dist',
    filename: 'script.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      }
    ]
  }
};
