/*
 * @Description: 
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2020-12-29 13:45:23
 * @FilePath: /react-shelf/src/model/user/index.ts
 */
import { axios } from 'src/dao/index';
import { getConfig, Api } from 'src/utils/quclouds';

export const getUser = async function() {
  const config = getConfig();
  const api: Api = config.api;
  const url = `${api.host}${api.basePath}${api.userdetail}`;
  try {
    const user = await axios.get(url);
    return user;
  } catch (error) {
    return void 0;
  }
};