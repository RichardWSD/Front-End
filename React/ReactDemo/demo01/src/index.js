import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Xiaojiejie from './Xiaojiejie'

//JSX  javascript和xml的结合
//可以方便的利用HTML语法来创建虚拟DOM，当遇到<，JSX就当作HTML解析，遇到{就当JavaScript解析
ReactDOM.render(
  //自定义的组件必须首写字母要进行大写
  <Xiaojiejie />,
  document.getElementById('root')
);
