module.exports = {
  // 部署应用包的基本 URL，NODE_ENV：Node.js 暴露给执行脚本的系统环境变量。通常用于确定在开发环境还是生产环境
  publicPath: process.env.NODE_ENV == 'production' ? './' : '/',
  outputDir: 'dist',  // 输出文件目录，当运行 vue-cli-service build(npm run build) 时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
  assetsDir: 'static', // 放置静态文件资源        注：从生成的资源覆写 filename 或 chunkFilename 时，assetsDir 会被忽略。
  // indexPath: 'index.html', // 可以不设置，一般默认
  // filenameHashing: true, // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
  
  // dev 环境下 webpack-dev-serve相关配置
  devServer: {
    port: 9901,  // 开发时 运行的端口
    host: '0.0.0.0', // 开发运行时域名， 设置成 ‘0.0.0.0’，在同一个局域网下，如果你的项目运行，同时可以通过你的http://ip:port/... 访问你的项目
    https: false, // 是否启用 https
    open: true,   // 运行时 是否直接打开浏览器
    proxy: {
      '/api': {
        target: '', // 允许跨域的地址
        ws: true,
        changeOrigin: true,  // 允许跨域
        pathRewrite: {
          '^/api': '',  // 请求的时候使用这个 api 就可以了
        }
      }
    }
  },
}