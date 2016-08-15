var path = require('path');

module.exports = {
  context: __dirname,

  entry: './index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script.js'
  },

  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.js$/,
        loader: 'babel'
      }
    ]
  }
};
