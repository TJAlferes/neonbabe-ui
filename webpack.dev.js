module.exports = {
  mode: 'development',
  devServer: {
    contentBase: './dist'
  },
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  }
};