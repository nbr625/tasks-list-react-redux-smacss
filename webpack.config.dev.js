import path from 'path';
import webpack from 'webpack';

export default {
  devtools: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')
  ],
  output: {
    path: '/',
    publicPath: '/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'client'),
        ],
        loaders: [ 'react-hot-loader', 'babel' ]
      },
       {
         test: /\.css$/,
         loaders: ['css']
       },
       {
         test: /\.scss$/,
         loaders: ['style', 'css', 'sass']
       }
    ]
  },
  resolve: {
    extentions: ['', '.js']
  },
  node: {
    net: 'empty',
    dns: 'empty'
  }
}
