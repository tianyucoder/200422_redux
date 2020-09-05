import {INCREMENT,DECREMENT} from './constant'
//该文件是用于创建action对象的
export const incrementAction  = number => ({type:INCREMENT,data:number})
export const decrementAction  = number => ({type:DECREMENT,data:number})
