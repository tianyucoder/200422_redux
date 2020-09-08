import {INCREMENT,DECREMENT} from '../constant'
//创建加的action
export const increment = (number) => ({type:INCREMENT,data:number})
//创建异步加的action
export const incrementAsync = (number) => {
	return (dispatch)=>{
		setTimeout(()=>{
			dispatch(increment(number))
		},500)
	}
}
//创建减的action
export const decrement = (number) => ({type:DECREMENT,data:number})