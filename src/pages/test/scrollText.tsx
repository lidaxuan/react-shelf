/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-07-22 15:55:11
 * @FilePath: /react-shelf/src/pages/test/scrollText.tsx
 */
import React, { Component } from 'react';
import { Menu, Form, Input, Select, Button, Table, Switch, Popover, Pagination, Modal, message, DatePicker, Tag, Space } from 'antd';
import TypingCard from 'src/components/typingCard';
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
  constructor(props: Props) {
    super(props);
    this.state = {
      tableList: [],
      form: {
        id: '',
        name: '',
      } as form,
    } as State;
    this.initPage = this.initPage.bind(this);
  }
  // 将要装载，在render之前调用；
  UNSAFE_componentWillMount() {
    
  }
  // (装载完成），在render之后调用 建议请求接口
  componentDidMount() {
    this.initPage();
  }
  initPage() {
    console.log(1111);
  }

  render() {
    const {tableList} = this.state;
    const cardContent = `标记了一个（或封装一组）操作命令，响应用户点击
    行为，触发相应的业务逻辑标记了一个（或封装一组）操作命令，响应用户点击行为，触发
    相应的业务逻辑标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑标记了
    一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操
    作命令，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操作
    命令，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操作命令
    ，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操作命令，响应用户点击
    行为，触发相应的业务逻辑标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业 相应的业务逻辑标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑标记了
    一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操
    作命令，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操作
    命令，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操作命令
    ，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操作命令，响应用户点击
    行为，触发相应的业务逻辑标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业 相应的业务逻辑标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑标记了
    一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操
    作命令，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操作
    命令，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操作命令
    ，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操作命令，响应用户点击
    行为，触发相应的业务逻辑标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业 相应的业务逻辑标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑标记了
    一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操
    作命令，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操作
    命令，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操作命令
    ，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操作命令，响应用户点击
    行为，触发相应的业务逻辑标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业 相应的业务逻辑标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑标记了
    一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操
    作命令，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操作
    命令，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操作命令
    ，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操作命令，响应用户点击
    行为，触发相应的业务逻辑标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业
    相应的业务逻辑标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑标记了
    一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操
    作命令，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操作
    命令，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操作命令
    ，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操作命令，响应用户点击
    行为，触发相应的业务逻辑标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业
    相应的业务逻辑标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑标记了
    一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操
    作命令，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操作
    命令，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操作命令
    ，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操作命令，响应用户点击
    行为，触发相应的业务逻辑标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业
    相应的业务逻辑标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑标记了
    一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操
    作命令，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操作
    命令，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操作命令
    ，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一组）操作命令，响应用户点击
    行为，触发相应的业务逻辑标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业
    务逻辑标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑标记了一个（或封装一
    组）操作命令，响应用户点击行为，触发相应的业务逻辑。<a target="_blank" href="https://zhidao.baidu.com/question/141615057867311245.html">点击调走</a>`
    return(
      <div>
        <TypingCard delay={1} title={"瞎比用"} source={cardContent}/>
      </div>
    );
  }
}