const devConfig = require('./webpack.config.dev')
const path = require('path')

module.exports = Object.assign(devConfig, {
  mode: 'production',
  watch: false,
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    library: 'beta',
    libraryTarget: 'umd',
  },
})