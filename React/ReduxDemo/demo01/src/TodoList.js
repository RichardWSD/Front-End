import React, { Component } from 'react';
import store from './store' //相当于import store from './store/index'
import {getMyListAction, changeInputAction , addItemAction ,deleteItemAction,getListAction} from './store/actionCreatores'
// import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM } from './store/actionTypes'

import TodoListUI from './TodoListUI'
import axios from 'axios'

class TodoList extends Component {

    constructor(props) {
        super(props)
        //console.log(store.getState())
        this.state = store.getState();
        this.changeInputValue= this.changeInputValue.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)

        this.storeChange = this.storeChange.bind(this)  //转变this指向
        store.subscribe(this.storeChange) //订阅Redux的状态
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                deleteItem={this.deleteItem}
            />
         );
    }

    componentDidMount(){
        // const action = getTodoList()
        // store.dispatch(action)

        const action =getMyListAction()
        store.dispatch(action)
    }

    changeInputValue(e){
        //console.log(e.target.value)
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    storeChange(){
        this.setState(store.getState())
    }

    clickBtn(){
        const action = addItemAction()
        store.dispatch(action)
     }

     deleteItem(index){
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}
export default TodoList;