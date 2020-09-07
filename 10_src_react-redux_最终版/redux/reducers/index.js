//引入combineReducers用于组合多个reducer
import {combineReducers} from 'redux'
//引入countReducer
import countReducer from './count'
//引入personReducer
import personReducer from './person'

//合并所有reducer，并设置好redux中的总状态
export default combineReducers({
	sum:countReducer,
	persons:personReducer
})