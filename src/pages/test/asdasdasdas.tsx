/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-06-29 14:23:52
 * @FilePath: /react-shelf/src/pages/test/asdasdasdas.tsx
 */

import React, { Component } from 'react';
import { Menu, Form, Input, Select, Button, Table, Switch, Popover, Pagination, Modal, message, DatePicker, Tag, Space } from 'antd';
import styled from 'styled-components';

enum statusEnum {}
// 参数接收
interface Props {
  [key: string]: any
}
// 某个对象
interface form extends Props {
  id: number | string;
  name: string;
}

// state
interface State {
  tableList: Array<any>;
  [key: string]: any;
}
export default class Scroll extends Component<Props, State>  {
  private scrollRef: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      tableList: [],
      
    } as State;
    this.initPage = this.initPage.bind(this);
  }
  // 将要装载，在render之前调用；
  // componentWillMount() {}
  // (装载完成），在render之后调用 建议请求接口
  componentDidMount() {
    this.initPage();
  }
  initPage() {}
 
  render() {
    const {tableList} = this.state;
    const Title = styled['h1']`color:red; font-size: 20px`;
    // const Title = styled.h1`color:red; font-size: 20px`;
    
  //   const Title = styled('div')((theme: any) => ({
  //     minHeight: '100px',
  //     color: 'red'
  //  }));
    return(
      <div>
        <Title>1asdasd</Title>
      </div>
    );
  }
}
// 
