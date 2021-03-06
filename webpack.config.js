/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2021-01-05 16:34:17
 * @FilePath: /react-shelf/webpack.config.js
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

const argv = require('@lijixuan/getargv');

const option = async function(_, env) {
  const data = Object.assign({}, env, argv);
  // 此处控制读取 config 下面的环境变量信息, 默认为 production
  data['mode'] = data.env || 'production';
  if (data.w) {
    const webpack = require('./build/devserver');
    return Promise.resolve(webpack(data));
  } else {
    const webpack = require('./build/webpack');
    return Promise.resolve(webpack(data));
  }
};

module.exports = option;