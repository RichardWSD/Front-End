import React, { Component } from 'react';
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {
    
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }

    //子组件接收到父组件传递过来的参数，父组件render函数重新被执行，这个生命周期就会被执行
    //也就是说这个组件第一次存在于Dom中，函数是不会被执行的
    //如果已经存在于Dom中，函数才会被执行
    // componentWillReceiveProps(){
    //     console.log('child - componentWillReceiveProps')
    // }

    // //当组件从页面中删除的时候执行
    // componentWillUnmount(){
    //     console.log('child - componentWillUnmount')
    // }

    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }
       
    }


    render() { 
        console.log('child-render')
        return ( 
            <li onClick={this.handleClick}>
                {this.props.avname}为你作- {this.props.content}
            </li>
         );
    }

    handleClick(){
        //this.props.list=[];//会报错，list是只读的，单项数据流。那如果要改变这里边的值怎么办?其实上节课已经讲过了，就是通过传递父组件的方法
        this.props.deleteItem(this.props.index)
    }
}

XiaojiejieItem.propTypes={
    content:PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number,
    avname:PropTypes.string.isRequired
}

XiaojiejieItem.defaultProps = {
    avname:'松岛枫'
}
 
export default XiaojiejieItem;