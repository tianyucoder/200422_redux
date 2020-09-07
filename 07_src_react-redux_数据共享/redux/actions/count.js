import {INCREMENT,DECREMENT} from '../constant'

//创建一个加的action
export const incrementAction  = number => ({type:INCREMENT,data:number})

//异步action（不是必须要用）
//异步action中一般都会调用一个对应的同步action
export const incrementWaitAction  = number => {
	return (dispatch)=>{
		setTimeout(()=>{
			dispatch(incrementAction(number))
		},500)
	}
}

//创建一个减的action
export const decrementAction  = number => ({type:DECREMENT,data:number})


