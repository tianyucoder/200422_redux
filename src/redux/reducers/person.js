import {ADD_PERSON} from '../constant'
//初始化状态
const initState = [{id:'001',name:'tom',age:19}]
//定义一个reducer
export default function (preState=initState,action){
	//解构赋值获取type、data
	const {type,data} = action
	//根据type决定做什么事
	switch (type) { //若为添加一个人
		case ADD_PERSON:
			return [data,...preState]
		default: //若为初始化
			return preState
	}
}