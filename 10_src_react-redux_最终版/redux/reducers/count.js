import {INCREMENT,DECREMENT} from '../constant'

//初始化状态
const initState = 0
//定义一个reducer
export default function (preState=initState,action){
	//解构赋值获取type、data
	const {type,data} = action
	//根据type决定做什么事
	switch (type) {
		case INCREMENT: //若为加
			return preState+data
		case DECREMENT: //若为减
			return preState-data
		default: //若为初始化
			return preState
	}
}