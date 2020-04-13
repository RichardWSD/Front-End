import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList'
import { Provider } from 'react-redux'
import store from './store'

const App = (
  <Provider store={store}>
      <TodoList />
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));

//1.安装react-redux：npm install --save react-redux
//2.安装redux，react-redux是以redux为基础的：npm install --save redux