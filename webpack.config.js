module.exports = {
  context: __dirname + '/src',
  entry: {
    'app': __dirname + '/src/app.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          __dirname + '/src'
        ]
      }
    ]
  }
};
