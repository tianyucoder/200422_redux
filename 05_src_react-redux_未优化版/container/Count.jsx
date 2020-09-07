//该组件是Count的容器组件，该组件可以随意使用redux相关的API

//引入action
import {incrementAction,decrementAction} from '../redux/count_action'

//引入connect，用于创建容器组件
import {connect} from 'react-redux'
//引入UI组件
import CountUI from '../components/Count'

//fun1的返回值，就作为传递给UI的状态
function mapStateToProps(state){
	return {sum:state}
}

//fun2的返回值，就作为传递给UI的操作状态的方法
function mapDispatchToProps(dispatch){
	return {
		jia:(number)=> dispatch(incrementAction(number)),
		jian:(number)=> dispatch(decrementAction(number))
	}
}

//创建一个容器组件
const countContainer = connect(mapStateToProps,mapDispatchToProps)(CountUI)

//暴露容器组件
export default countContainer
