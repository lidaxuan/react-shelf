/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-01-05 10:55:23
 * @FilePath: /react-shelf/src/pages/test/in.tsx
 */
import React, { Component } from 'react';
import { Button } from 'antd';
import * as Loading from 'src/utils/decorators/loading';

function addTwo() {
  return function (target: any, methodName: string, descriptor: PropertyDescriptor) {
    console.log(target);
    console.log(methodName);
    console.log(descriptor);
    const fun = descriptor.value;
    descriptor.value = async function () {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const self: any = this;
      try {
        const data = await fun.apply(self);
      } catch (error) {
        // error
      }
      const num = self.state.num + 2;
      self.setState({
        num
      });
    };
  };
}

function Class() {
  return function (target: any): any {
    return class extends target {
      constructor(...args: any[]) {
        super(...args);
        if (!this.state) {
          this.state = {};
        }
        this.del = this.del.bind(this);
      }
      del() {
        const num = this.state.num - 1;
        this.setState({
          num
        });
      }
      render() {
        return (
          <div>
            <Button className="mr10" onClick={this.add}>加一</Button>
            {this.state.num}
            <Button className="ml10" onClick={this.del}>减一</Button>
          </div>
        );
      }
    };
  };
}


@Class()
export default class In extends Component<any, any> {
  
  constructor(props: any) {
    super(props);
    this.state = {
      num: 0,
    };
    this.add = this.add.bind(this);
  }
  @addTwo()
  add() {
    const num = this.state.num + 1;
    this.setState({
      num
    });
  }
  render() {
    return (
      <div>
        <Button onClick={this.add}>加一</Button>
        <br/>
        {this.state.num}
      </div>
    );
  }
}