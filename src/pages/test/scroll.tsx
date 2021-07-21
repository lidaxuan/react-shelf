/*
 * @Description: 
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2021-05-13 09:16:36
 * @FilePath: /react-shelf/src/pages/test/scroll.tsx
 */
import React, { Component } from 'react';
import { Menu, Form, Input, Select, Button, Table, Switch, Popover, Pagination, Modal, message, DatePicker, Tag, Space } from 'antd';

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
    this.onScrollCapture = this.onScrollCapture.bind(this);
  }
  // 将要装载，在render之前调用；
  // componentWillMount() {}
  // (装载完成），在render之后调用 建议请求接口
  componentDidMount() {
    this.initPage();
  }
  initPage() {
    const arr = [];
    for (let i = 0; i < 30; i++) {
      const obj = {
        name: '李大玄',
        age: 25,
        id: i,
        sex: '男'
      };
      arr.push(obj);
    }
    this.setState({
      tableList: arr
    });
  }
 
  onScrollCapture(): void {
    const { scrollTop, clientHeight, scrollHeight } = this.scrollRef;
    
    let time: any = null;
    clearTimeout(time);
    time = setTimeout(() => {
      console.log(scrollTop, clientHeight, scrollHeight );
      if(scrollTop + clientHeight >= scrollHeight){
        //请求逻辑
        console.log('触底了');
      }
      if (scrollTop === 0) {
        console.log('触顶了');
        
      }
    }, 1000);
  }
  render() {
    const {tableList} = this.state;
    const boxStyle = {
      background: 'pink',
      // overflow: 'hidden',
    };
    return(
      <div>
        <div className="w300 h300 p10 overauto" onScrollCapture={ this.onScrollCapture } ref={(ref: any) => {this.scrollRef = ref;}} style={boxStyle}>
          <ul>
            {
              tableList.map((item, index) => {
                return (
                  <li key={index}> { item.id } - { item.name } - { item.age } - { item.sex } </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}
// 
