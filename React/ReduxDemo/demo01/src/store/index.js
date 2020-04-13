import {createStore, applyMiddleware ,compose} from 'redux' //  引入createStore方法
import reducer from './reducer'
//import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'   //引入saga
import mySagas from './sagas'

const sagaMiddleware = createSagaMiddleware();   //创建saga中间件

const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

//const enhancer = composeEnhancers(applyMiddleware(thunk))
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore( reducer, enhancer) // 创建数据存储仓库

sagaMiddleware.run(mySagas)

export default store   //暴露出去

/*
Redux填三个小坑：
store必须是唯一的，多个store是坚决不允许，只能有一个store空间
只有store能改变自己的内容，Reducer不能改变
Reducer必须是纯函数（如果函数的调用参数相同，则永远返回相同的结果。它不依赖于程序执行期间函数外部任何状态或数据的变化，必须只依赖于其输入参数）
*/

/*
Redux中间件（不是React中间件）：
1.在Dispatch一个Action之后，到达reducer之前，进行一些额外的操作，就需要用到middleware（中间件）
2.在实际工作中你可以使用中间件来进行日志记录、创建崩溃报告，调用异步接口或者路由
3.安装Redux-thunk：npm install --save redux-thunk
 */

 /*
Redux另一个中间件（不是React中间件）：
1.安装npm install --save redux-saga
 */

