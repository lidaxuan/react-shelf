/*
 * @Description: 
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2020-12-29 14:21:51
 * @FilePath: /react-shelf/src/pages/home/index.tsx
 */


import React, { Component } from 'react';
import * as Loading from 'src/utils/decorators/loading';
import { Menu, Form, Input, Select, Button, Table, Switch, Pagination, Modal, message, DatePicker } from 'antd';
const { Option } = Select;
const { RangePicker } = DatePicker;
import { FormInstance } from 'antd/lib/form';
// import SingleEdit from './single';
import 'src/styles/goods/index.scss';

interface Props {
  [key: string]: any
}
interface form extends Props {
  type: number | string;
  date: string;
  [key: string]: any;
}
interface DashBoardState {
  currentComp: string;
  [key: string]: any;
}
export default class DashBoard extends Component<Props, DashBoardState>  {
  formRef = React.createRef<FormInstance>();
  constructor(props: Props) {
    super(props);
    this.state = {
      currentComp: "1", //
      form: {
        type: '',
        date: '',
      } as form,
    } as DashBoardState;

    this.titleMenu = this.titleMenu.bind(this);
    this.searchForm = this.searchForm.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getFieldValue = this.getFieldValue.bind(this);
    
  }
  // 
  componentDidMount() {
    
  }
 
  handleClick(e) {
    
    this.setState({ currentComp: e.key });
  }
  handleChange(value) {
    const form = this.state.form;
    form.type = value;
    this.setState({
      form
    });
  }
  protected getFieldValue<T>(): T {
    if (this.formRef) {
      const { current } = this.formRef;
      if (current && current.getFieldsValue) {
        const value: T = current.getFieldsValue();
        return value;
      }
    }
    return void 0;
  }
  // 获取
  private titleMenu() {
    const { currentComp } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[currentComp]} mode="horizontal">
        <Menu.Item key="1">单聊检索</Menu.Item>
        <Menu.Item key="2" >群聊检索</Menu.Item>
      </Menu>
    );
  }
  private searchForm() {
    const { currentComp } = this.state;
    const style = {
      width: '300px'
    };
    return (
      <Form labelCol={{ span: 10 }} wrapperCol={{ span: 14 }} layout="horizontal" ref={this.formRef}>
        <div className="flex">
          <Form.Item label="查看成员" name="menber">
            <Select defaultValue="lucy" style={{ width: 120 }} onChange={ this.handleChange }>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled">Disabled</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Form.Item>
          <Form.Item style={style} label="姓名" name="name">
            <Input placeholder="请输入姓名"/>
          </Form.Item>

          <Form.Item label="时间范围" name="date">
            <RangePicker />
          </Form.Item>
        </div>
      </Form>
    );
  }
  
  render() {
    const rowSelection = {
      selectedRowKeys: this.state.selectedRowKeys,
    };
    return(
      <div>
        <Button type="primary" onClick={this.getFieldValue}>查询</Button>
        <div dangerouslySetInnerHTML={{ __html: JSON.stringify(this.state) }}></div>
        <div>
          { this.titleMenu() }
        </div>
        <div>
          { this.searchForm() }
        </div>
        <div className="btn-container mt20">
          <div></div>
        </div>
        <Table bordered loading={Loading.getLoadingValue(this)} dataSource={this.state.list} rowKey="id" pagination={ false } className="mt20">
          <Table.Column title="发送人" dataIndex="category_name" key="category_name" width={150}></Table.Column>
          <Table.Column title="会话内容" dataIndex="use_stock" key="use_stock" width={150}></Table.Column>
          <Table.Column title="接收人" dataIndex="sales" key="sales" width={150}></Table.Column>
          <Table.Column title="消息状态" dataIndex="anchor_name" key="anchor_name" width={150}></Table.Column>
          <Table.Column title="发布时间" dataIndex="created_at" key="created_at" width={180}></Table.Column>
          <Table.Column title="操作" dataIndex="created_at" key="created_at" width={180}></Table.Column>
        </Table>
      </div>
    );
  }
}