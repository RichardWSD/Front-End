import React, { Component } from 'react';
// 安装reacct-transition-group动画库：npm install react-transition-group --save
/*
    他是有着三个核心库（或者叫组件）：
    Transition
    CSSTransition
    TransitionGroup
*/
import { CSSTransition } from 'react-transition-group'

class Boss extends Component {
    
    constructor(props){
        super(props);
        this.state={
            isShow:true
        };
        this.toToggole = this.toToggole.bind(this);
    }

    render() { 
        return ( 
            <div>
                {/* <div className={this.state.isShow ? 'show' : 'hide'}>BOSS级人物-孙悟空</div> */}
                <CSSTransition 
                    in={this.state.isShow}   //用于判断是否出现的状态
                    timeout={2000}           //动画持续时间
                    classNames="boss-text"   //className值，防止重复
                    unmountOnExit           //unmountOnExit,加上这个的意思是在元素退场时，自动把DOM也删除，这是以前用CSS动画没办法做到的
                >
                    <div>BOSS级人物-孙悟空</div>
                </CSSTransition>

                <div><button onClick={this.toToggole}>召唤Boss</button></div>
            </div>
         );
    }

    toToggole(){
        this.setState({
            isShow:this.state.isShow?false:true
        })
    }
}
 
export default Boss;