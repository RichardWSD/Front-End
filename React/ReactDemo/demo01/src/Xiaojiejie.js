import React, { Component,Fragment } from 'react';
import './style.css';
import XiaojiejieItem from './XiaojiejieItem' 
import axios from 'axios'
import Boss from './Boss' 
import {CSSTransition , TransitionGroup} from 'react-transition-group'

class Xiaojiejie extends Component{

    //js的构造函数，由于其他任何函数执行
    constructor(props){
        console.log('----constructor----');
        super(props) //调用父类的构造函数，固定写法
        this.state={
            inputValue:'' , // input中的值
            list:[]    //服务列表
        }
    }

    componentDidMount(){
        console.log('componentDidMount----组件挂载完成的时刻执行')
        //axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
        axios.get('https://easy-mock.com/mock/5d6cbd61f1e27d6cc80739e5/ReactDemo01/xiaojiejie')
            .then((res)=>{
                console.log('axios 获取数据成功:',res)  
                this.setState({
                    list:res.data.data
                })
            })
            .catch((error)=>{console.log('axios 获取数据失败'+error)})
    }

    /*
        React声明周期的四个大阶段：
        Initialization:初始化阶段。
        Mounting: 挂在阶段。
        Updation: 更新阶段。
        Unmounting: 销毁阶段
    */

    // componentWillMount(){
    //     console.log('componentWillMount----组件将要挂载到页面的时刻')
    // }

    // componentDidMount(){
    //     console.log('componentDidMount----组件挂载完成的时刻执行')
    // }

    // //每次文本框发生改变时都会随着改变。如果你返回了false，这组件就不会进行更新了。
    // //简单点说，就是返回true，就同意组件更新;返回false,就反对组件更新
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate---组件发生改变前执行')
        return true;
        //return false;
    }

    // //shouldComponentUpdate返回true才会被执行。
    componentWillUpdate(){
        console.log('componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate----组件更新之后执行')
    }

    render(){
        //加上最外层的DIV，组件就是完全正常的，但是你的布局就偏不需要这个最外层的标签怎么办?
        //比如我们在作Flex布局的时候,外层还真的不能有包裹元素。这种矛盾其实React16已经有所考虑了，为我们准备了<Fragment>标签

        console.log('render---组件挂载中.......')
        return(
            <Fragment>
                {/* JSX坑1：注释 */}
               <div>
                   {/* JSX坑4： label标签*/}
                    <label htmlFor="jspang">加入服务：</label>
                    {/* JSX坑2： className*/}
                    <input id="jspang" 
                        className="input" 
                        value={this.state.inputValue} 
                        onChange={this.inputChange.bind(this)}
                        ref={(input)=>{this.input=input}}
                        /> 

                   <button onClick={this.addList.bind(this)}> 增加服务 </button>
                </div>
               <ul ref={(ul)=>{this.ul=ul}}>
                    <TransitionGroup>
                    {
                            this.state.list.map((item,index)=>{
                                {/* JSX坑3： html解析*/}
                                return (
                                    // <li 
                                    //     key={index+item}
                                    //     onClick={this.deleteItem.bind(this,index)}
                                    //     dangerouslySetInnerHTML={{__html:item}}
                                    // >
                                    //     {/* {item} dangerouslySetInnerHTML让输入框输入html标签格式的内容时可以正确显示标签样式*/}
                                    // </li>

                                    <CSSTransition
                                    timeout={1000}
                                    classNames='boss-text'
                                    unmountOnExit
                                    appear={true}   //页面第一次出现时就有效果
                                    key={index+item}
                                    >
                                            <XiaojiejieItem 
                                            //key={index+item} 
                                            content={item} 
                                            index={index}
                                            //avname='波多野结衣'
                                            //list={this.state.list}
                                            deleteItem={this.deleteItem.bind(this)}
                                            />
                                    </CSSTransition>
                                    
                                )
                            })
                    }
                    </TransitionGroup>
               </ul> 

               <Boss />
            </Fragment>
        )
    }

    inputChange(e){
        //console.log(e.target.value);
        //console.log(this);
        this.setState({
            // inputValue:e.target.value
            inputValue:this.input.value
        })
    }

    //增加服务的按钮响应方法
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            //点击按钮后让输入框的值清空
            inputValue:''
        },()=>{
            // 坑4：这个坑是因为React中更多setState是一个异步函数所造成的。也就是这个setState，代码执行是有一个时间的，
            // 如果你真的想了解清楚，你需要对什么是虚拟DOM有一个了解。简单的说，就是因为是异步，还没等虚拟Dom渲染，
            // 我们的console.log就已经执行了。setState方法提供了一个回调函数，也就是它的第二个函数
            console.log(this.ul.querySelectorAll('li').length)
        })
    }

    //删除单项服务
    deleteItem(index){
        //大坑：先声明一个局部变量,然后利用传递过来的下标,删除数组中的值.删除后用setState更新数据就可以了，不能直接使用this.state.list
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }

    //错误写法：React是禁止直接操作state的,虽然上面的方法也管用,但是在后期的性能优化上会有很多麻烦,所以一定不要这样操作
    /* #region   */
    // deleteItem(index){
    //     this.state.list.splice(index,1)
    //     this.setState({
    //         list:this.state.list
    //     })
    // }
    /* #endregion */
}

export default Xiaojiejie