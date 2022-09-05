const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  output: {
    filename: 'pack.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  devServer: {
    static: {
        directory: path.join(__dirname, '/')
    }
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,  // RegEx to match files
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
