/*
 * @Description: 
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2020-12-29 13:45:23
 * @FilePath: /react-shelf/src/model/config/quclouds.ts
 */

import _ from 'lodash';
import process from 'src/env';
import jsonp from 'src/dao/jsonp/index';
import { Config } from 'src/utils/quclouds';

export const getQuCloudsConfig = function(query: any): Promise<Config> {
  // const api = process.env.quclouds;
  const api = '';
  return jsonp(api, query);
};