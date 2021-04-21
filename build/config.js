/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2021-01-05 16:34:17
 * @FilePath: /react-shelf/build/config.js
 */
const _ = require('lodash');
const getDir = require('./dir');
const getMode = require('./mode');

const getConfig = function (env) {
  const { mode } = getMode(env);
  const data = require(getDir(`config/${env.mode}`));
  const result = {
    mode: mode
  };
  _.each(data, function (value, key) {
    result[key] = value;
  });
  return result;
};

module.exports = getConfig;