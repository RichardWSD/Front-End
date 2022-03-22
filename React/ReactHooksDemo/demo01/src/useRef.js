import React, { useRef, useState, useEffect } from 'react';

function Example8() {
    const inputEl = useRef(null)
    const onButtonClick = () => {
        inputEl.current.value = "Hello ,useRef"
        console.log(inputEl)
    }

    const [text, setText] = useState('jspang')
    const textRef = useRef()

    useEffect(() => {
        textRef.current = text;
        console.log('textRef.current:', textRef.current)
    })

    return (
        <div>
            {/*保存input的ref到inputEl */}
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>在input上展示文字</button>
            <br />
            <br />
            <input value={text} onChange={(e) => {
                console.log('onChange');
                setText(e.target.value)
            }} />

        </div>
    )
}

export default Example8


/*
useRef作用
用useRef获取React JSX中的DOM元素，获取后你就可以控制DOM的任何东西了。但是一般不建议这样来作，React界面的变化可以通过状态来控制
用useRef来保存变量，这个在工作中也很少能用到，我们有了useContext这样的保存其实意义不大，但是这是学习，也要把这个特性讲一下
 */