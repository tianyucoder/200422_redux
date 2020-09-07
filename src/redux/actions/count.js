import {INCREMENT,DECREMENT} from '../constant'
//该文件是用于创建action对象的
export const incrementAction  = number => ({type:INCREMENT,data:number})
//异步action
//异步action中一般都会调用一个对应的同步action
export const incrementWaitAction  = number => {
	return (dispatch)=>{
		setTimeout(()=>{
			dispatch(incrementAction(number))
		},500)
	}
}
export const decrementAction  = number => ({type:DECREMENT,data:number})


