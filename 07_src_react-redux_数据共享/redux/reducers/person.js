import {ADD_PERSON} from '../constant'

//初始化状态---要保存的是一堆人，所以用数组，每个人是一个对象
const initState = [
	{id:'0001',name:'老刘',age:18},
	{id:'0002',name:'强哥',age:19},
]
//定义一个reducer函数
export default function(preState=initState,action){
	const {type,data} = action
	switch (type) {
		case ADD_PERSON:
			return [data,...preState]
		default:
			return preState
	}
}