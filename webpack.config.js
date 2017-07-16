const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.jsx',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'BenchTest'
    })
  ],
  module: {
    rules: [{
      test: /\.less$/,
      use: [{
        loader: 'style-loader' 
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
        }
      }, {
        loader: 'less-loader'
      }],
    }, {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react'],
          plugins: [
            ['transform-react-jsx', {
              'pragma': 'createElement',
            }]
          ]
        }
      }
    }],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};