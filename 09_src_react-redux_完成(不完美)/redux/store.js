//该文件是用于创建整个redux中最为核心的store对象

//引入createStore，用于创建store对象
import {createStore,applyMiddleware} from 'redux'
//redux-thunk
import thunk from 'redux-thunk'
//引入汇总之后的reducer
import reducer from './reducers'
//引入composeWithDevTools，用于让开发者工具找到store
import {composeWithDevTools} from 'redux-devtools-extension'

//创建并暴露store对象
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
