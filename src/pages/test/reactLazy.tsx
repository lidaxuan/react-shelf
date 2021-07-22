/*
 * @Description: react.lazy
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2021-01-27 10:12:18
 * @FilePath: /react-shelf/src/pages/test/reactLazy.tsx
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
  constructor(props: Props) {
    super(props);
    this.state = {
      tableList: [],
      form: {
        id: '',
        name: '',
      } as form,
      str: `到百度首页
      今日新鲜事
      百度首页设置152******62
      网页资讯视频图片知道文库贴吧地图采购更多
      展开 相关软件
      
      百度APP
      有事搜一搜没事看一看
      
      
      好看视频
      专业短视频聚合平台
      
      
      微博
      微型博客通指新浪微博
      
      
      网易新闻
      相关门户网站
      
      腾讯网
      
      新浪
      中国四大门户之一
      
      
      凤凰网
      综合门户网站
      
      
      搜狐
      中国四大门户网站之一
      
      收起工具时间不限所有网页和文件站点内检索
      搜索工具百度为您找到相关结果约13,400,000个
      今日新鲜事 - 视频大全 - 高清在线观看
      【航拍雨后郑州：道路积水正退去 交通逐步恢复正常】据沸点天际线消息：7月21日，河南郑州，00:41
      【航拍雨后郑州：道路积水正退去 ...
      好看视频
      美国常务副国务卿舍曼将于7月25日至26日访华01:39
      美国常务副国务卿舍曼将于7月25日...
      好看视频
      4方面原因造成河南强降雨，未来3天河南仍有降雨01:47
      4方面原因造成河南强降雨，未来3天...
      好看视频
      五城市率先开展国际消费中心城市培育建设00:29
      五城市率先开展国际消费中心城市培...
      好看视频
      吴京起诉“战狼”有结果了！法院认定侵权，判赔34万！01:04
      吴京起诉“战狼”有结果了！法院认...
      好看视频
      院士增选女科学家优先！13部门出台政策助推科创巾帼力量01:00
      院士增选女科学家优先！13部门出台...
      好看视频
      「九点」今日新鲜事2017.8.2119:39
      「九点」今日新鲜事2017.8.21
      好看视频
      「九点」今日新鲜事2017.8.1819:12
      「九点」今日新鲜事2017.8.18
      好看视频
      查看更多视频 >
      今日新鲜事_新闻头条最新消息_今天的新闻头条-热搜榜
      
      热搜榜,实时发布最新新闻头条,今日新鲜事,今日新鲜事新闻,最新新闻,热点新闻资讯。
      www.resobang.cn/
      
      百度快照
      百度热搜
      热搜榜
      1 河南新乡最大持续降水量907毫米搜索指数:4949458 
      7月17日8点至22日6点，新乡市出现较大面积的暴雨灾情，最大持续降水量达907毫米，全市出现700毫米以上降水量的站点有14个。
      2 航拍雨后郑州:道路积水正退去搜索指数:4705619 
      3 直播:多路直击河南防汛现场搜索指数:4605394 
      4 女记者报道商户被淹忍不住哭了搜索指数:4569306 
      5 31省区市新增12例本土确诊搜索指数:4453945 
      更多热搜榜>>
      top.baidu.com/board?tab=realtime&sa=fyb_search_ala_36172_more
      今日新鲜事吧 - 百度贴吧
      
      欢迎来到今日新鲜事吧参与讨论
      
      关注用户：8082人
      
      累计发贴：1万
      
      生活新鲜事 娱乐新鲜事 体育新鲜事 电影新鲜事 动漫新鲜事
      
      工程项目做了，拥金不履行了。签名同意支付不支...点击：4万回复：242
      签订绩效合同，想着法子不履行，就是有这样的公...点击：2万回复：217
      云南之旅——导游的套路点击：3万回复：13
      查看更多今日新鲜事吧的内容 >
      tieba.baidu.com/
      今日新鲜事(宁德)网络科技有限公司 - 企业信息
      
      今日新鲜事(宁德)网络科技有限公司，法定代表人：谢祥茂，注册资金：100万元，地址：福建省宁德市东侨经济开发区闽东中路28号盈丰佳园4幢1梯402室，经营范围：互联网接入服务业务；互联网数据中心业务；互联网上网服务；基础软件开发；网络与信息安全软件开发；...
      
      基本信息 资质证书 数据解读 网站备案 商标信息 更多 >
      
      爱企查 
      技术资源吧 - 今日新鲜事,优质资源,汇集精华热点资讯网
      
      技术资源吧(www.jsz998.com)汇集今日新鲜事,优质资源,精华热点资讯,热点新闻事件,内容含QQ资源,技术,活动,段子,八卦,科技,汽车,历史,养生,游戏等多个类别,让有价值的信息无需筛选,获取更简单。
      www.jsz998.com/
      
      百度快照
      畅说_本地生活网_分享今日新鲜事
      
      畅说免费提供生活服务类实用信息,随时随地分享今日新鲜事,爆料花边,看本地生活就上畅说!
      www.tc108.com/
      
      百度快照
      今日新鲜事_今日新闻头条最新消息_热点头条新闻-聚热点网
      
      聚热点网是汇聚今日新鲜事、今日新闻头条最新消息的时事热点新闻资讯平台,24小时实时提供国际、国内今日新鲜事头条新闻热搜榜事件,娱乐,科技,财经,体育,军事,热点人物等。
      www.juredian.net/
      
      百度快照
      今日新鲜事_七彩空间
      社会的发展!离婚率越来越高!不出去还好在家穷点,出去老婆就是别人的了!你懂滴! 今日新鲜事第一集 今日新鲜事第二集 不出去还好在家穷点 云想衣裳花想容 今日新鲜事第五集 ~~~...
      www.qicaispace.com/flash/xinxi...
      
      百度快照
      今日新鲜事-最新热点-每日头条新闻-A5新闻网
      
      A5新闻网为您提供最新今日新鲜事,百度沸点,今日头条,今日新闻,头条新闻,每天24小时不间断为呈现国内今日新鲜事,国外今天新鲜事,时政要闻,地方今日新鲜事,军事新鲜事,娱乐新鲜事等精彩内容。
      www.a5xw.cn/
      
      百度快照
      1
      2
      3
      4
      5
      6
      7
      8
      9
      10
      下一页 >
      帮助举报用户反馈`,
      content: ''
    } as State;
    this.initPage = this.initPage.bind(this);
    this.setcontent = this.setcontent.bind(this);
  }
  // 将要装载，在render之前调用；
  UNSAFE_componentWillMount() {
    
  }
  // (装载完成），在render之后调用 建议请求接口
  componentDidMount() {
    this.initPage();
    this.setcontent();
  }
  initPage() {
    console.log(1111);
  }
  setcontent() {
    let progress = 0;
    let timer = setInterval(() => {
      progress++;

      let content = this.state.content;
      content = this.state.str.substring(0, progress) + '_';
      this.setState({
        content
      });
      if (progress > this.state.str.length) {
        clearInterval(timer); 
      }
    }, 1)
  }

  render() {
    const {tableList} = this.state;
    return(
      <div>
        111
        { this.state.content }
      </div>
    );
  }
}