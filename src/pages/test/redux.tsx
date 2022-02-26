/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-02-26 10:58:24
 * @FilePath: /react-shelf/src/pages/test/redux.tsx
 */
import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { setPageTitle, setInfoList } from '../../store/actions';


class ReduxDemo extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      num: 0,
      pageTitle: ''
    };
    this.add = this.add.bind(this);
  }
  componentDidMount() {
    let { setPageTitle, setInfoList, pageTitle } = this.props;
    this.props.setPageTitleFn(this.state.num);
    this.setState({
      pageTitle
    })
  }
  add() {
    const num = this.state.num + 1;
    this.setState({
      num
    }, () => {
      this.props.setPageTitleFn(num);
      let { pageTitle } = this.props;
      console.log(this.props);
      this.setState({
        pageTitle
      })
    });
  }
  render() {
    return (
      <div>
        <Button onClick={this.add}>加一</Button>
        <br/>
        {this.state.num}
        <hr/>
        {this.state.pageTitle}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    pageTitle: state.pageTitle,
    infoList: state.infoList
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setPageTitleFn (data) {
      // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
      dispatch(setPageTitle(data))
      
    },
    setInfoList (data) {
      dispatch(setInfoList(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxDemo)