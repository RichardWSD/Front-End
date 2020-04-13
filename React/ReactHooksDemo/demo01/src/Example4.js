import React, { useState, createContext, useContext } from 'react';

const CountContext = createContext()

function Counter() {
    const count = useContext(CountContext)  //一句话就可以得到count
    return (<h2>{count}</h2>)
}

function Example4() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>click me</button>
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>
        </div>
    )
}
export default Example4;

/*
useContext，它可以帮助我们跨越组件层级直接传递变量，实现共享
useContext和redux的作用是不同的，一个解决的是组件之间值传递的问题，一个是应用中统一管理状态的问题
通过和useReducer的配合使用，可以实现类似Redux的作用
 */