const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
require('dotenv').config()
const isProduction =  process.env.NODE_ENV === 'production';

module.exports = {
  entry: "./src/frontend/index.jsx",
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          cwd: __dirname,
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !isProduction
            }
          },
          "css-loader",
          {
            loader: 'sass-loader',
            // options: {
            //   prependData: `
            //     @import "src/frontend/assets/styles/Vars.scss";
            //     `,
            // },
          },
        ]
      },
      {
        test: /\.(png|gif|jpg|svg|ttf|mp4|webm)$/,
        use: [
          {
            'loader': 'file-loader',
            options: {
              name: 'assets/static/[name].[ext]',
            },
          },
        ],
      },
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: isProduction ? path.join(process.cwd(), './src/server/public') : '/',
    publicPath: "/",
    filename: "assets/app.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/app.css',
    }),
  ]
};
