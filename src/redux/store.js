//该文件是用于创建整个redux中最为核心的store对象

//引入createStore，用于创建store对象
import {createStore,applyMiddleware,combineReducers} from 'redux'
//引入为count服务的reducer
import countReducer from './reducers/count'
//引入为person服务的reducer
import personReducer from './reducers/person'
//redux-thunk
import thunk from 'redux-thunk'

//组合多个reducer-----传入的这个对象，就是redux保存的总状态对象
const reducer= combineReducers({
	count:countReducer,
	persons:personReducer
})

//得到一个store对象
const store = createStore(reducer,applyMiddleware(thunk))

//暴露store对象
export default store
