/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-07-22 16:10:46
 * @FilePath: /react-shelf/src/utils/typing.ts
 */
import _ from 'lodash';
interface Chain {
  parent: any,
  dom: any,
  val: Array<any>,
  [key: string]: any
}

class Typing {
  protected opts: any;
  protected source: any;
  protected output: any;
  protected delay: Number | String | any;
  protected chain: Chain;

  constructor(opts) {
    opts = _.assign({}, opts) as any;
    this.source = opts.source;
    this.output = opts.output;
    this.delay = opts.delay || 120;
    
    this.chain = {
      parent: null,
      dom: this.output,
      val: []
    };
  }

  init(): void {
    //初始化函数
    this.chain.val = this.convert(this.source, this.chain.val);
    console.log(this.chain.val);
  }

  convert(dom, arr) {
    //将dom节点的子节点转换成数组，
    let children = Array.from(dom.childNodes) as Array<any>;
    for (let i = 0; i < children.length; i++) {
      let node = children[i] as any;
      if (node.nodeType === 3) {
        arr = arr.concat(node.nodeValue.split(''))   //将字符串转换成字符串数组，后面打印时才会一个一个的打印
      } else if (node.nodeType === 1) {
        let val: Array<any> = [];
        val = this.convert(node, val)
        arr.push({
          'dom': node,
          'val': val
        })
      }
    }
    return arr;
  }

  print(dom, val, callback) {
    console.log(val);
    const delay = this.delay;
    setTimeout(() => {
      dom.appendChild(document.createTextNode(val));
      callback();
    }, delay);
  }
  
  play(ele) {
    if (!ele.val.length) {
      if (ele.parent) {
        this.play(ele.parent);
      }
      return;
    }
    let current = ele.val.shift()  //获取第一个元素，同时删除数组中的第一个元素
    if (typeof current === 'string') {
      this.print(ele.dom, current, () => {
        this.play(ele); //继续打印下一个字符
      })
    } else {
      let dom = current.dom.cloneNode() //克隆节点，不克隆节点的子节点，所以不用加参数true
      ele.dom.appendChild(dom)
      this.play({
        parent: ele,
        dom,
        val: current.val
      })
    }
  }

  start() {
    this.init();
    this.play(this.chain);
  }
}

export default Typing;