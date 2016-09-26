const path = require('path');
const webpack = require('webpack');

module.exports = function() {
  return {
    target: 'web',
    entry: {
      app: path.resolve(__dirname, './src/index.js')
    },
    output: {
      path: path.resolve(__dirname, './build'),
      filename: '[name].js',
      publicPath: '/js'
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ],
    module: {
      rules: [
        // Javascript
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          include: [path.resolve(__dirname, './src')]
        }
      ],
    },
  };
}
