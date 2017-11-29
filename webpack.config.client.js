const path = require('path');
const webpack = require('webpack');
const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'public/javascripts');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: srcPath,
  target: 'web',

  entry: path.resolve(__dirname, './src/client.js'),
  output: {
    path: distPath,
    filename: 'client.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader'
          }, {
            loader: "sass-loader"
          }, {
            loader: "postcss-loader"
          }],
          fallback: 'style-loader'
        }),
        include: resolve('src')
      },
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new ExtractTextPlugin(
      path.posix.join('public', 'css/styles.css')
    )
  ]
};
