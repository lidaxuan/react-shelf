/* jshint esversion: 6 */
/*
 * @Description: 处理项目跟目录
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2021-01-05 16:34:17
 * @FilePath: /react-shelf/build/dir.js
 */

const path = require('path');

const getDir = function (...args) {
  const root = path.join(__dirname, '..');
  if (args.length) {
    const arr = [].concat(root, args);
    return path.join(...arr);
  }
  return root;
};

module.exports = getDir;