/* jshint esversion: 6 */
/*
 * @Description: 环境变量信息
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2021-01-05 16:34:17
 * @FilePath: /react-shelf/build/process.js
 */

const _ = require('lodash');
const webpack = require('webpack');
const getConfig = require('./config');

const processValue = function(env) {
  const config = getConfig(env);
  const result = {};
  _.each(config, function (value, key) {
    result[key] = `"${value}"`;
  });
  return result;
};

const getProcess = function (env) {
  const value = processValue(env);
  return [
    new webpack.DefinePlugin({
      'process.env': value
    }),
  ];
};

module.exports = {
  value: processValue,
  plugin: getProcess
};