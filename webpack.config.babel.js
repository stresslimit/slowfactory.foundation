import webpack from 'webpack'
import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

let extractStyles = new ExtractTextPlugin({
  filename: '[name].css'
})


let config = {
  stats: 'minimal',
  entry: {
    'css/style': [
      path.resolve(__dirname, '_css/index.css')
    ],
    'js/app': [
      path.resolve(__dirname, '_js/index.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'assets' ),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractStyles.extract({
          use: ['css-loader?importLoaders=1','postcss-loader']
        })
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
      options: {
      }
    }),
    extractStyles
  ],
}

if ( process.env.NODE_ENV === 'production' ) {
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }))
  config.plugins.push(new webpack.optimize.UglifyJsPlugin())
}

export default config
