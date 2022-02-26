/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-02-26 11:00:29
 * @FilePath: /react-shelf/src/store/reducers.ts
 */
import { combineReducers } from 'redux';
// 默认值
import defaultState from './state';
 
// 一个reducer就是一个函数
function pageTitle (state = defaultState.pageTitle, action) {
  // 不同的action有不同的处理逻辑
  switch (action.type) {
    case 'SET_PAGE_TITLE':
      return action.data
    default:
      return state
  }
}
 
function infoList (state = defaultState.infoList, action) {
  switch (action.type) {
    case 'SET_INFO_LIST':
      return action.data
    default:
      return state
  }
}
 
// 导出所有reducer
export default combineReducers({
  pageTitle,
  infoList
})
