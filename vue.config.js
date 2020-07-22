module.exports = {
    // configurewebpack: {
    //     resolve: {
    //         alias: {
                
    //         }
    //     }
    // }
    devServer: {
        publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
        proxy: {
            '/proxyYh': { //要访问的跨域的api的域名
                target: 'http://152.136.185.210:8000/api/n3/',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/proxyYh': ''
                }
            },
        }
      }
}