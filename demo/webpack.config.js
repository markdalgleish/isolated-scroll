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
