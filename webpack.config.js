const path = require('path');
const { HotModuleReplacementPlugin, NamedModulesPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  devtool: 'inline-source-maps',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'app',
      title: 'Something Sweet'
    }),
    new HotModuleReplacementPlugin(),
    new NamedModulesPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
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
        use: [
          'style-loader',
          'css-loader?modules&localIdentName=[name]__[local]__[hash:base64:5]',
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  }
};