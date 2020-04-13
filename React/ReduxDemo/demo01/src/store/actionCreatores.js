import {GET_MY_LIST, CHANGE_INPUT , ADD_ITEM,DELETE_ITEM, GET_LIST}  from './actionTypes'
import axios from 'axios'

export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})

export const addItemAction = ()=>({
    type:ADD_ITEM
})

export const deleteItemAction = (index)=>({
    type:DELETE_ITEM,
    index
})

export const getListAction  = (data)=>({
    type:GET_LIST,
    data
})

//利用中间件把原本在TodoList的componentDidMount生命周期请求接口的动作放在这里
export const getTodoList = () =>{
    //这个函数可以直接传递dispatch进去，这是自动的
    return (dispatch)=>{
        axios.get('https://easy-mock.com/mock/5d6cbd61f1e27d6cc80739e5/ReactDemo01/getList').then((res)=>{
            const data = res.data
            const action = getListAction(data)
            dispatch(action)
        })
    }
}

export const getMyListAction = ()=>({
    type:GET_MY_LIST
})
