module.exports = {
  context: __dirname + '/src',
  entry: {
    'app': __dirname + '/src/app.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          __dirname + '/src'
        ]
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg)$/,
        loader: 'url-loader',
        options: {
          name: '[path][name].[hash].[ext]'
        }
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]'
        }
      }
    ]
  }
};
