module.exports = {
  publicPath: process.env.NODE_ENV !== 'production' ? '/' : './',
  outputDir: 'dist',
  devServer: {
    port: 8888,
    host: '0.0.0.0',
    https: false,
    open: true,
  },
  lintOnSave: false,
}