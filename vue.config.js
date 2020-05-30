module.exports = {
    // 不打包js下的.map文件
    productionSourceMap: false,

    // 设置输出目录
    // outputDir: 'myDist',

    // css,js等文件的基础路径（上线？开发？）
    // publicPath: process.env.NODE_ENV == "production" ? '/' : 'https://www.baidu.com',

    // 设置静态资源css\js等存放路径
    assetsDir: 'assets',

    // 正常的webpack配置
    configureWebpack: {
        
    }
}