
var path = require('path');

module.exports = {
  mode: 'production',
  entry: './views/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },/*
  plugins: [
    new HtmlWebpackPlugin({
        template: 'index.html',
    }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
],*/
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: Infinity,
            },
          },
        ],
      },
    ]
  },
  resolve: {
    fallback: {
      'buffer': require.resolve('buffer/'),
      'url': require.resolve('url/'),
      'stream': require.resolve('stream-browserify'),
      'querystring': require.resolve('querystring-es3'),
      'http': require.resolve('stream-http'),
      'crypto': require.resolve('crypto-browserify'),
      'zlib': require.resolve('browserify-zlib'),
      'assert': require.resolve('assert/'),
    }
  },
};