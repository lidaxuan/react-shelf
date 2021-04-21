/* jshint esversion: 6 */
/*
 * @Description: 处理 webpack mod
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2021-01-05 16:34:17
 * @FilePath: /react-shelf/build/mode.js
 */

const _ = require('lodash');

const getMode = function (env) {
  let mode = env.mode;
  if (_.includes(['development', 'production'], mode) === false) {
    mode = 'development';
  }
  const devtool = mode === 'development' ? 'cheap-eval-module-source-map' : false;
  // const devtool = 'cheap-eval-module-source-map';
  return { mode, devtool };
};

module.exports = getMode;