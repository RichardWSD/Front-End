import React from 'react';
import ReactDOM from 'react-dom';
import Example from './useRef';

ReactDOM.render(
  <Example />,
  document.getElementById('root')
);

/*
1.React Hooks就是用函数的形式代替原来的继承类的形式，并且使用预函数的形式管理state，有Hooks可以不再使用类的形式定义组件了
2.原来把组件分为有状态组件和无状态组件，有状态组件用类的形式声明，无状态组件用函数的形式声明。那现在所有的组件都可以用函数来声明了
3.hooks的目的就是让你不再写class，让function一统江湖
 */