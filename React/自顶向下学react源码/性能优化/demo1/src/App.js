import { useState, useEffect } from "react";

/* 
  优化原则 - 将变的部分与不变部分分离 
  导致组件发生变化的3个因素
  1. props
  2. state
  3. context
*/

// 注意这个项目讨论的是怎么让组件不会重新执行render函数，而不是说组件挂载。区分这两个概念非常重要！！！

function ExpensiveCpn(props) {
  useEffect(() => {
    console.log("ExpensiveCpn mounted ==> ");
    return () => {
      console.log("ExpensiveCpn unmounted ==> ");
    };
    // });
  }, []);
  /* useEffect(() => {
    console.log("ExpensiveCpn updated ==> ");
    return () => {
      console.log("ExpensiveCpn unupdated ==> ");
    };
  }, [props.num]); */
  let now = performance.now();
  while (performance.now() - now < 100) {}
  console.log("耗时的组件 render");
  return <p>耗时的组件</p>;
}

export default function App() {
  // 这里每次num变化的时候导致重新render，重新生成 fiber 节点
  // 由于 ExpensiveCpn 也没有做缓存处理，默认组件为全等比较 === ， ExpensiveCpn在beginWork的时候全等比较 props 不相等所以需要重新 render
  // 所以 ExpensiveCpn 一直重新 render
  const [num, updateNum] = useState(0);

  return (
    <div>
      <input value={num} onChange={(e) => updateNum(+e.target.value)} />
      <p>num is {num}</p>
      {/* <ExpensiveCpn num={num} /> */}
      <ExpensiveCpn />
    </div>
  );
}

// 解决办法：把不变和变的部分抽离出来
/* function InputCpn() {
  const [num, updateNum] = useState(0);
  return (
    <>
      <input value={num} onChange={(e) => updateNum(+e.target.value)} />
      <p>num is {num}</p>
    </>
  );
}
export default function App() {
  return (
    <div>
      <InputCpn />
      <ExpensiveCpn />
    </div>
  );
} */
