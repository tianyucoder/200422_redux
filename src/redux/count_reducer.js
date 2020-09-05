//该文件用于创建为Count组件服务的reducer
//该reducer用于：1.初始化Count组件的状态 2.加工Count组件的状态

const initState = 0 //初始化状态
export default function countReducer(preState=initState,action){
		//根据action对象中的type、data决定如何加工状态
		const {type,data} = action
		//根据type决定如何操作状态
		switch (type) {
			case 'increment': //若为加
				return preState + data
			case 'decrement': //若为减
				return preState - data
			default: //若为初始化
				return preState
		}
}