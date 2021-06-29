/* jshint esversion: 6 */
/*
 * @Description: webpack 配置
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2021-01-05 16:34:17
 * @FilePath: /react-shelf/build/devserver.js
 */

const getConfig = require('./config');
const webpackConfig = require('./webpack');

async function main(env) {
  const data = await Promise.resolve(webpackConfig(env));
  const config = getConfig(env);
  const option = {
    devServer: {
      clientLogLevel: 'warning',
      contentBase: false,
      compress: true,
      inline: true,
      hot: true, //实时刷新
      publicPath: '/',
      historyApiFallback: {
        rewrites: [
          { from: /.*/, to: '/index.html' },
        ]
      },
      hot: true,
      hotOnly: true,
      progress: true,
      host: 'localhost',
      port: config.port || 80,
      disableHostCheck: true,
      // public: `${config.domain}:${config.port || 80}`
      proxy: {
        "/wecom-business-web": {
          target: "http://172.16.30.88:7175",
          // target: "http://192.168.169.212:7175",
          // target: "http://192.168.169.99:7175",
          // target: "http://192.168.169.177:7175",
          changeOrigin: true,
          loglevel: "debug",
          pathRewrite: {
            "^/apis": "",
          },
          ws: true
        }
      },
    }
  };
  return Promise.resolve(Object.assign({}, data, option));
}

module.exports = main;