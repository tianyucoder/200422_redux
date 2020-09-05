//该组件是Count的容器组件，该组件可以随意使用redux相关的API

//引入connect，用于创建容器组件
import {connect} from 'react-redux'
//引入UI组件
import CountUI from '../components/Count'

//fun1的返回值，就作为传递给UI的状态
function fun1(){
	return {sum:999}
}

//fun2的返回值，就作为传递给UI的操作状态的方法
function fun2(){
	return {
		jia:(numer)=> alert(`我后期会通知redux帮你加${numer}的`),
		jian:(numer)=> alert(`我后期会通知redux帮你减${numer}的`),
	}
}

//创建一个容器组件
const countContainer = connect(fun1,fun2)(CountUI)

//暴露容器组件
export default countContainer
