const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  lintOnSave: false, // 是否在保存的时候检查
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  outputDir:process.env.VUE_APP_OUTPUT||'dist',
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {   
       //生产环境与测试环境都需要的配置
      //开启代码压缩
      config.optimization
      .minimize(true)
      .end();
      //删除prelosd插件
      config.plugins
      .delete('preload')
      .delete('prefetch')
      .end();
      if(process.env.VUE_APP_Flags){
        // 为测试环境修改配置...
        //开启性能优化图
        config
        .plugin('bundle')
        .use(BundleAnalyzerPlugin)
        .end();
        //测试环境服务器代理设置
        //设置代理的服务器
        // config
        // .devServer
        // .proxy({})
        // .end();
      }else{
        // 为生产环境修改配置...
        // config
        // .externals({vue: 'Vue'})
        // .end();            //使用后需要手动cdn引入vue的库
        
        //去除console
        config.optimization
        .minimizer('terser')      //必须要指定一个名字
          .use(TerserPlugin,[{   //使用插件TerserPlugin
            terserOptions: {
               compress: {
                drop_console: true, //删除所有console.log
              },
           },
        }])
        .end();
      } 
    } else {
      //为开发环境配置环境
     //设置服务器代理
        // config
        // .devServer
        // .proxy({})
        // .end();
    }
  }
}