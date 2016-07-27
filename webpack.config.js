
var webpack = require('webpack');
var path = require("path");
// var commonsPlugin = new webpack.optimize.CommonsChunkPluging('shared.js');

module.exports = {
  context: path.resolve('assets/js'),
  devtool: "#inline-source-map",
  entry: {
    about:'./about_page.js',
    home:'./home_page.js',
    contact:'./contact_page.js'
  },
  output: {
    path: path.resolve('build'),
    publicPath:'/build',
    filename: "[name].js"
  },
  watch:true,
  devServer: {
    contentBase: 'public'
  }
  // module: {
  //   loaders: [
  //     {
  //       test: /\.scss$/, loader: "style!css!sass"
  //       // ?outputStyle=expanded&" +
  //       //   "includePaths[]=" + (path.resolve(__dirname, "./bower_components")) + "&" +
  //       //   "includePaths[]=" + (path.resolve(__dirname, "./node_modules"))
  //     },
  //     { test: /\.css$/, loader:"style!css"}
  //   ]
  // },
  // plugins: debug ? [] : [
  //   new webpack.optimize.DedupePlugin(),
  //   new webpack.optimize.OccurenceOrderPlugin(),
  //   new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  // ],
};
