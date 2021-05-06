/*
 * @Description: 
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2021-05-06 18:31:12
 * @FilePath: /react-shelf/src/test/demo5/index.tsx
 */
/*
 * @Description: 
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2020-12-29 14:21:51
 * @FilePath: /react-shelf/src/pages/home/index.tsx
 */


import React, { Component } from 'react';
import * as Loading from 'src/utils/decorators/loading';
import { Button, Table } from 'antd';
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
  list: Array<any>;
  [key: string]: any;
}

@Loading.Class()
export default class DashBoard extends Component<Props, DashBoardState>  {
  formRef = React.createRef<FormInstance>();
  constructor(props: Props) {
    super(props);
    this.state = {
      list: [], //
      form: {
        type: '',
        date: '',
      } as form,
    } as DashBoardState;
    this.fetchTableData = this.fetchTableData.bind(this);
    this.tableDel = this.tableDel.bind(this);
  }
  // 
  componentDidMount() {
    console.log(1);
    this.fetchTableData();
  }
 
  
  tableDel(index: any) {
    console.log(index);
    const table = this.state.list;
    table.splice(index, 1);
    this.setState({
      list: [].concat(table)
    });
  }
  @Loading.Fun()
  protected fetchTableData(): Array<any> {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      const obj = {
        name: `李大玄${i}`,
        sex: '1',
        address: '北京',
        id: i
      };
      arr.push(obj);
    }
    setTimeout(() => {
      this.setState({
        list: arr
      });
    }, 1000);
    return arr;
  }
  
  render() {
    const rowSelection = {
      selectedRowKeys: this.state.selectedRowKeys,
    };
    const columnsItem = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        render(text: string) {
          return <span>{text}</span>;
        }
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
        render(text: string) {
          return <span>{text}</span>;
        }
      },
      {
        title: '操作',
        key: 'id',
        render:(text: string, record:any, index: number)=> {
          return (
            <div key={index} >
              <span onClick={ () => this.tableDel(index) }>删除</span>
            </div>
          );
        },
      },
    ];
    return(
      <div>
        {/* <Button type="primary" onClick={this.fetchTableData}>查询</Button> */}
        <div dangerouslySetInnerHTML={{ __html: JSON.stringify(this.state) }}></div>
        
        <div>
          <Table bordered dataSource={this.state.list} columns={columnsItem} pagination={false} rowKey="id" size="small"/>
        </div>
      </div>
    );
  }
}