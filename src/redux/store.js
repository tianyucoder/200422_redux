import {createStore,applyMiddleware} from 'redux'
//引入thunk用于支持异步action
import thunk from 'redux-thunk'
//引入composeWithDevTools用于支持开发者工具
import {composeWithDevTools} from 'redux-devtools-extension'
//引入汇总之后的reducer
import reducer from './reducers'

//暴露最核心的store对象
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))