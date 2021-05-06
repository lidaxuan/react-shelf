/**
 * @file 表单案例
 * @author 15201002062@163.com
 */

import React from 'react';
import Edit from './edit';
import Create from './create';
import { Row, Col } from 'antd';


export default class Demo2 extends React.Component {
  render(): React.ReactElement {
    return (
      <Row>
        <Col span={11}>
          <Create></Create>
        </Col>
        <Col span={2}></Col>
        <Col span={11}>
          <Edit></Edit>
        </Col>
      </Row>
    );
  }
}

