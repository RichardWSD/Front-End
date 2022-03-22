import React, { useState ,useEffect ,useCallback } from 'react';

//封装成一个自定义Hooks函数，记住一定要用use开头，这样才能区分出什么是组件，什么是自定义函数
//自定义Hooks函数偏向于功能，而组件偏向于界面和业务逻辑
function useWinSize(){
  console.log(1111);
    const [ size , setSize] = useState({
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight
    })

    const onResize = useCallback(()=>{
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    },[])
    useEffect(()=>{
        window.addEventListener('resize',onResize)
        return ()=>{
            window.removeEventListener('resize',onResize)
        }
    },[])

    return size;

}

function Example9(){

    const size = useWinSize()
    console.log(222);
    return (
        <div>页面Size:{size.width}x{size.height}</div>
    )
}

export default Example9