const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  mode: "production",
  entry: {index: './src/index.js'},
  output: {
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js'
    filename: '[name].bundle.js'
  },
//   optimization: {
//       splitChunks: {
//           chunks: 'all',
//           cacheGroups: {
//             commons: {
//             name: 'commons',
//             chunks: 'initial',
//             minChunks: 2
//             }
//           }
//       }
//   },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: "file-loader",
      }, 
      {
        test: /\.bundle\.js$/,
        use: [
            {
            loader: 'bundle-loader',
            options: {
                lazy: true,
                name: 'chunk'
            }
            }
        ]
      }
    ]
  },
   plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};