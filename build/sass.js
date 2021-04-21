/* jshint esversion: 6 */
/*
 * @Description: sass 处理
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2021-01-05 16:34:17
 * @FilePath: /react-shelf/build/sass.js
 */


const _ = require('lodash');
const getDir = require('./dir');
const getConfig = require('./config');

const functionFile = 'src/styles/function.scss';

// 默认从那个目录导入文件
const includePaths = function() {
  const dir = getDir();
  return [].concat(dir);
};

const scssData = function (env) {
  const config = getConfig(env);
  const text = [
    `@import "${functionFile}";`
  ];
  _.each(config, function (value, key) {
    const name = '$' + key;
    text.push(`${name}: "${value}";`);
  });
  const code = text.join('\n');
  return code;
};


module.exports = {
  data: scssData,
  includePaths: includePaths
};