/*
 * @Description: 
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2021-01-21 09:40:52
 * @FilePath: /react-shelf/src/routers/index.tsx
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment

import React from 'react';
import * as config from './config';
// 实现异步组件
import asnyc from 'src/utils/async';
import Layout from 'src/pages/layout/index';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// 路由变化时触发
const onUpdate = function (): void {
  console.log(window.location.pathname);
  
  // todo
  // const location = browserHistory.getCurrentLocation();
  // console.log(location);
  if (window.location.pathname === '/') {
    window.location.href = `/demo1`;
  }
};

// const goodsList = asnyc(() => import('src/pages/goods/goodlist'));

const Routers: React.FC = function (): React.ReactElement {
  return (
    <Router history={browserHistory} onUpdate={onUpdate}>
      <Route path={config.routers.dashboard} component={Layout}>
        <IndexRoute component={asnyc(() => import('src/pages/home/index'))}></IndexRoute>
        {/* <Route path="/demo1" component={ asnyc(() => import('src/pages/antv/index'))}></Route> */}
        {/* <Route path={ config.routers.test.study } component={ asnyc(() => import('src/pages/test/study'))}></Route> */}
        <Route path={ config.routers.session.starr } component={ asnyc(() => import('src/pages/session/starr'))}></Route>
        <Route path={ config.routers.demo.one } component={ asnyc(() => import('src/test/demo1/index')) }></Route>
        <Route path={ config.routers.demo.two } component={ asnyc(() => import('src/test/demo2/index')) }></Route>
        <Route path={ config.routers.demo.there } component={ asnyc(() => import('src/test/demo3/index')) }></Route>
        <Route path={ config.routers.demo.four } component={ asnyc(() => import('src/test/demo5/index')) }></Route>
        {/* <Route path={ config.routers.goods.list } component={ asnyc(() => import('src/pages/goods/index')) }></Route>
        <Route path={config.routers.goods.create} component={asnyc(() => import('src/pages/goods/operation'))}></Route>
        <Route path={config.routers.goods.edit} component={asnyc(() => import('src/pages/goods/operation'))}></Route>
        <Route path={config.routers.earnings.earningsList} component={asnyc(() => import('src/pages/earnings/index'))}></Route>
        <Route path={config.routers.system.group.info} component={asnyc(() => import('src/pages/system/group/index'))}></Route>
        <Route path={config.routers.system.group.share} component={asnyc(() => import('src/pages/system/group/share'))}></Route>
        <Route path={config.routers.system.group.service} component={asnyc(() => import('src/pages/system/group/service'))}></Route>
        <Route path={config.routers.shop.set} component={asnyc(() => import('src/pages/shop/set'))}></Route>
        <Route path={config.routers.live.list} component={asnyc(() => import('src/pages/live/list'))}></Route>
        <Route path={config.routers.live.add} component={asnyc(() => import('src/pages/live/add'))}></Route> */}
        <Route path="*" component={asnyc(() => import('src/test/demo5/index'))} />
      </Route>
    </Router>
  );
};

export default Routers;