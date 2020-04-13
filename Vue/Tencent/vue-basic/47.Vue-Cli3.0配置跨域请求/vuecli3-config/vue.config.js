module.exports={
    baseUrl:'/',//根路径
    outputDir:'dist',//构建输出目录(npm run build)
    assetsDir:'assets',//静态资源目录(js,css,img,fonts)
    lintOnSave:false,//是否开启eslint保存检测，有效值：true || false || 'error'
    devServer: {
        open:true,//输入npm run serve时是否弹出浏览器
        host:'localhost',
        port:8081,
        https:false,
        hotOnly:false,//添加模块时可以给我们提供一些配置，具体看webpack官网介绍
        proxy:{
            //配置跨域
            '/api':{
                target:'http://localhost:5000/api',
                ws:true,
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}