/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-02-26 10:59:46
 * @FilePath: /react-shelf/src/store/actions.ts
 */
export function setPageTitle (data) {
  return (dispatch, getState) => {
    dispatch({
      type: 'SET_PAGE_TITLE',
      data: data
    });
  }
}
 
export function setInfoList (data) {
  return (dispatch, getState) => {
    // 测试接口
    let url = 'http://localhost:8000/user';
    // 使用fetch实现异步请求
    window.fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      return res.json()
    }).then(res => {
      let { code, data } = res
      if(code === 0){
        dispatch({
          type: 'SET_INFO_LIST',
          data: data
        })
      }
    })
  }
}