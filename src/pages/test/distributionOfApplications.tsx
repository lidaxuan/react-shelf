/*
 * @Description: 
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2021-05-12 18:11:10
 * @FilePath: /react-shelf/src/pages/test/distributionOfApplications.tsx
 */

import React, { Component } from 'react';
import * as Loading from 'src/utils/decorators/loading';
import { Menu, Form, Input, Select, Button, Table, Switch, Popover, Pagination, Modal, message, DatePicker, Tag, Space } from 'antd';

enum statusEnum {
  '男' = 1,
  '女' = 2
}
enum statusColorEnum {
  'red'= 1,
  'blud' = 2
}

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
export default class SelectTable extends Component<Props, DashBoardState>  {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentComp: "1", //
      checkStrictly: false,
      selectedRowKeys: [],
      list: [],
      form: {
        type: '',
        date: '',
      } as form,
    } as DashBoardState;

    this.sorter = this.sorter.bind(this);
  }
  // 
  componentDidMount() {
    const arr = [];
    const status = [1, 2];
    for (let i = 0; i < 10; i++) {
      const value_a = Math.random() * 2  + "";
      const index = parseInt(value_a);
      const obj: any = {
        id: 1,
        name: 'John Brown sr.',
        age: 60,
        address: 'New York No. 1 Lake Park',
        tags: ['cool', 'teacher'],
        status: status[index]
      } as any;
      obj.id = i;
      arr.push(obj);
    }
    this.setState({
      list: [].concat(arr),
      selectedRowKeys: [1,2,3],
    });
  }
  sorter(a,b, sorter) {
    console.log(a,b, sorter);
    if (sorter.order === "ascend") {
      console.log('升序');
    } else if (sorter.order === 'descend') {
      console.log('降序');
    }
  }
 
  render() {
    const rowSelection = {
      selectedRowKeys: this.state.selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(selectedRowKeys, selectedRows);
        
      },
      onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
      },
    };
    const { checkStrictly } = this.state;
    const content = (
      <div>
        <Button type="text" onClick={()=> alert('删除成功')}>删除</Button>
      </div>
    );
    const columns = [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        // align: 'right',
        render: text => <a>{text}</a>,
        sorter: true,
      },
      {
        title: 'name',
        dataIndex: 'name',
        key: 'name',
        // align: 'right',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 100,
        align: 'center',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        width: 200,
        align: 'center',
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
      },
      {
        title: 'status',
        key: 'status',
        dataIndex: 'status',
        render: (item:number) => (
          <>
            <span> {statusEnum[item]} </span>
          </>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <a>Invite {record.name}</a>
            <Popover content={content} trigger="hover">
              <a >删除</a>
            </Popover>
          </Space>
        ),
      },
    ] as any;
    
    return(
      <div>
        <Table onChange={this.sorter} columns={columns} rowSelection={{ ...rowSelection, checkStrictly }} bordered loading={Loading.getLoadingValue(this)} dataSource={this.state.list} rowKey="id" pagination={ false } className="mt20">
          {/* <Table.Column title="发送人" dataIndex="name" key="name" width={150}></Table.Column>
          <Table.Column title="会话内容" dataIndex="age" key="age" width={150}></Table.Column>
          <Table.Column title="接收人" dataIndex="address" key="address" width={150}></Table.Column> */}
        </Table>
      </div>
    );
  }
}