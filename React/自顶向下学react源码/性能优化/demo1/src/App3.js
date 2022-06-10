import React, {useState, useContext, useMemo} from 'react';

const numCtx = React.createContext<number>(0);
const updateNumCtx = React.createContext<React.Dispatch<number>>(() => {});

function Button() {
  const updateNum = useContext(updateNumCtx);
  console.log('btn render')
  return (
    <button onClick={() => updateNum(Math.random())}>产生随机数</button>
  )
}


function Show() {
  // num值发生变化，Show是一个变化的组件
  const num = useContext(numCtx);
  return <p>num is: {num}</p>;
}

const Middle = () => {
  return (
    <>
      <Button/>
      <Show/>
    </>
  )
}
// 或者
/* const Middle = useMemo(() => {
  return (
    <>
      <Button/>
      <Show/>
    </>
  )
}, []) */

// const Middle = React.memo(() => {
//   return (
//     <>
//       <Button/>
//       <Show/>
//     </>
//   )
// }) 

export default function App() {
  const [num, updateNum] = useState(0);
  // 由于 num 改变会导致 App 组件重新 render，ExpensiveCpn 也没有做缓存处理，默认组件为全等比较 === ， ExpensiveCpn在beginWork的时候全等比较 props 不相等所以需要重新 render
  // 所以我们只需缓存 Middle 组件即可防止 Middle 组件重复 render
  return (
    <numCtx.Provider value={num}>
      <updateNumCtx.Provider value={updateNum}>
        <Middle/>
      </updateNumCtx.Provider>
    </numCtx.Provider>
  );
}

