/* 该文件用于汇总所有的reducer */

//引入为count服务的reducer
import countReducer from './count'
//引入为person服务的reducer
import personReducer from './person'
//引入combineReducers
import {combineReducers} from 'redux'

/* 
	特别注意：
		1.多个reducer要用combineReducers进行合并，变成一个总reducer
		2.combineReducers传入的对象就是redux保存的【总状态对象】
*/
//组合多个reducer
export default combineReducers({
	count:countReducer,
	persons:personReducer
})

