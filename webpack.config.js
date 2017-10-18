const path = require('path');
const { HotModuleReplacementPlugin, NamedModulesPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  /**
   * This option controls how source maps are generated. The 'inline-source-maps' devtool is a bit faster than 'source-map' while also using your original code.
   */
  devtool: 'inline-source-maps',
  devServer: {
    /**
     * contentBase specifies which directory to serve files from.
     */
    contentBase: path.join(__dirname, 'public'),
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      /**
       * This plugin adds optional parameters (e.g. appMountId - The <div> element id on which you plan to mount a JavaScript app.)
       */
      template: require('html-webpack-template'),
      appMountId: 'app',
      title: 'Something Sweet'
    }),
    new HotModuleReplacementPlugin(),
    /**
     * This plugin will cause the relative path of the module to be displayed when HMR is enabled. 
     */
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
          /**
           * The modules query param enables the CSS Modules spec.
           */
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