/*
 * @Description: 
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2021-01-22 14:31:24
 * @FilePath: /react-shelf/src/pages/antv/index.tsx
 */

import _ from 'lodash';
import React from 'react';
import '../../styles/antv/antv.scss';


interface GoodsProps {
  [key: string]: any;
}
interface Goods {
  graph: any;
  editorClass: any;
  editTbaleIndex: number,
  [key: string]: any;
}

export default abstract class Antv<Props extends GoodsProps, State extends Goods> extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = this.stateInit();
    this.init = this.init.bind(this);
  }
  stateInit() {
    const state = {
      graph: '',
      editorClass: void 0,
    };
    return state as State;
  }

  componentDidMount() {
    this.init();
    // todo
  }

  componentWillUnmount(): void {
    // todo
  }
  init() {
    console.log(1);
    
  }
  /** 添加类目 ---------------------------- */
  render(): React.ReactElement {
    return (
      <div className="antv">
        <div>123</div>
        <div id="container"></div>
      </div>);
  }
}