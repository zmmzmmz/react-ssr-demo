const path = require('path');
const webpack = require('webpack');
const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'public');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const nodeExternals = require('webpack-node-externals')


function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: srcPath,
  target: 'web',
  entry: path.resolve(__dirname, './src/client.js'),
  output: {
    path: distPath,
    filename: 'js/client.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.vue', '.json', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
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
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new ExtractTextPlugin({
      filename: 'styles/main-[hash].css',
      allChunks: true
    })
  ]
};
