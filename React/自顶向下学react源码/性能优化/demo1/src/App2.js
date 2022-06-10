import { useState } from "react";

function ExpensiveCpn() {
  let now = performance.now();
  while (performance.now() - now < 100) {}
  console.log("耗时的组件 render");
  return <p>耗时的组件</p>;
}

/* export default function App() {
  const [num, updateNum] = useState(0);
  // 这里由于 num 写在共同的父节点 div 上，所以跟例1不同
  // 这里我们可以把除了 ExpensiveCpn 的部分抽成一个 wrapper，把 ExpensiveCpn 作为 children 传入
  return (
    <div title={num + ""}>
      <input value={num} onChange={(e) => updateNum(+e.target.value)} />
      <p>num is {num}</p>
      <ExpensiveCpn />
    </div>
  );
} */


function InputWrapper({ children }) {
  const [num, updateNum] = useState(0);
  console.log(111);
  return (
    <div title={num + ""}>
      <input value={num} onChange={(e) => updateNum(+e.target.value)} />
      <p>num is {num}</p>
      {children}
    </div>
  );
}

export default function App() {
  // 这里 App 组件是不变的，因为3个因素都没有发生变化
  // 所以 ExpensiveCpn 组件不会重新 render，而且它是作为 children 属性传入 InputWrapper 组件的。
  // 所以即使 num 发生变化后 InputWrapper 组件重新 render，但在 beginWork 的时候全等比较 ExpensiveCpn 组件，由于是同一个 ExpensiveCpn 对象，所以 ExpensiveCpn 不会重新 render
  // 但是 InputWrapper 组件自己是变化的，所以可以看到发生后的 num 值
  return (
    <InputWrapper>
      <ExpensiveCpn />
    </InputWrapper>
  );
} 