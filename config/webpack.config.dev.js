const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'lib.js',
    path: path.resolve(__dirname, '../examples'),
    publicPath: '/',
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.(ts)?$/,
        use: [
          { loader: 'babel-loader', options: { cacheDirectory: true } },
          { loader: 'eslint-loader', options: { fix: true } },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  }
}