//该组件是Count的容器组件，该组件可以随意使用redux相关的API
//引入action
import {incrementAction,decrementAction} from '../redux/count_action'
//引入connect，用于创建容器组件
import {connect} from 'react-redux'
//引入UI组件
import CountUI from '../components/Count'


//创建并暴露一个容器组件
export default  connect(
	state => ({sum:state}),
	{
		jia:incrementAction,
		jian:decrementAction
	}
	
	/* dispatch => (
		{
			jia:(number)=> dispatch(incrementAction(number)),
			jian:(number)=> dispatch(decrementAction(number))
		}
	) */
)(CountUI)