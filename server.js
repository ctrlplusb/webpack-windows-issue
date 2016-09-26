const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackConfigFactory = require('./webpack.config');

const app = express();

const config = webpackConfigFactory();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.resolve(__dirname, './static')));

app.listen(3005);

console.log(`==> HTTP Listener is running on port ${3005}`);
