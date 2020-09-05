//该文件是用于创建整个redux中最为核心的store对象

//引入createStore，用于创建store对象
import {createStore} from 'redux'
//引入为store服务的reducer
import countReducer from './count_reducer'

//得到一个store对象
const store = createStore(countReducer)

//暴露store对象
export default store
