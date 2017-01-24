'use strict';

var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: './browser/index.js',

  output: {
    // index.html and bundle.js should be here
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  context: __dirname,
  module: {
    loaders: [
      {
        test: /js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
};
