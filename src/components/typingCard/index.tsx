/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-07-22 15:55:38
 * @FilePath: /react-shelf/src/components/typingCard/index.tsx
 */
import React from "react";
import { Card } from "antd";
import { PropertySafetyFilled } from "@ant-design/icons";
import Typing from "src/utils/typing";

interface Props {
  [key: string]: any;
}

interface State {
  [key: string]: any;
}
interface defaultProps {
  title: String,
  source: any,
  height: Number
}
export default class TypingCard extends React.Component<Props, State> {
  private source: any;
  private output: any;

  constructor(props: any) {
    super(props);
  }
  static defaultProps: defaultProps = {
    title: '如何使用',
    source: '',
    height: 136
  };
  componentDidMount() {
    const typing = new Typing({
      source: this.source,
      output: this.output,
      delay: this.props.delay || 1000,
    })
    typing.start()
  }
  render() {
    return (
      <Card hoverable bordered={false} className='card-item' title={this.props.title} style={{ minHeight: this.props.height }} id={this.props.id}>
        <div style={{ display: 'none' }} ref={el => this.source = el} dangerouslySetInnerHTML={{ __html: this.props.source }} />
        <div ref={el => this.output = el} />
      </Card>
    )
  }
}
