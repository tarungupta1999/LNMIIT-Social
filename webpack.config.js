const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/WebsiteMainFiles/Index.js'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        port:3001,
    },
    plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './src/WebsiteMainFiles/Index.html',
          publicPath: '/'
      })
    ],
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    module: {
      rules: [        
        // JavaScript/JSX Files
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        // CSS and SCSS Files
        {
          test: /\.s?css$/,
          use: ['style-loader', 'css-loader'],
        },
        //Photo
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
      ]
    }
};
