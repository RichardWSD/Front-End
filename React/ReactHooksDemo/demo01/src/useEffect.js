import React, { useState , useEffect } from 'react';

function Example(){

    const [ count , setCount ] = useState(0);
    //在用Class制作组件时，经常会用生命周期函数，来处理一些额外的事情（副作用：和函数业务主逻辑关联不大，特定时间或事件中执行的动作，比如Ajax请求后端数据，添加登录监听和取消登录，手动修改DOM等等）。
    //在React Hooks中也需要这样类似的生命周期函数，比如在每次状态（State）更新时执行，它为我们准备了useEffect
/*
    useEffect两个注意点
    React首次渲染和之后的每次渲染都会调用一遍useEffect函数，
    而之前我们要用两个生命周期函数分别表示首次渲染(componentDidMonut)和更新导致的重新渲染(componentDidUpdate)。

    useEffect中定义的函数的执行不会阻碍浏览器更新视图，也就是说这些函数时异步执行的，
    而componentDidMonut和componentDidUpdate中的代码都是同步执行的。
    个人认为这个有好处也有坏处吧，比如我们要根据页面的大小，然后绘制当前弹出窗口的大小，如果时异步的就不好操作了。
 */
    useEffect(()=>{
        console.log(`useEffect=>You clicked ${count} times`)
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
        </div>
    )
}
export default Example;