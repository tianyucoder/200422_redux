import React, { Component } from 'react'
//引入action
import {incrementAction,decrementAction} from '../redux/count_action'
//引入connect，用于创建容器组件
import {connect} from 'react-redux'

//定义一个UI组件
class Count extends Component {

	increment = ()=>{
		//1.获取用户选择的数字
		const {selectedNumber} = this.refs
		this.props.jia(selectedNumber.value*1)
	}

	decrement = ()=>{
		//1.获取用户选择的数字
		const {selectedNumber} = this.refs
		this.props.jian(selectedNumber.value*1)
	}

	incrementIfodd = ()=>{
			//1.获取用户选择的数字
			const {selectedNumber} = this.refs
			this.props.jia(selectedNumber.value*1)
	}
	
	incrementAsync = ()=>{
		//1.获取用户选择的数字
		const {selectedNumber} = this.refs
		this.props.jia(selectedNumber.value*1)
	}

	render() {
		// const {sum} = this.state
		console.log(this.props);
		return (
			<div>
				<h1>当前求和为：{this.props.sum}</h1>
				<select ref="selectedNumber">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfodd}>奇数加</button>&nbsp;
				<button onClick={this.incrementAsync}>异步加</button>
			</div>
		)
	}
}

//创建并暴露一个容器组件
/* 
	关connect函数你要知道的：
		1.connect是一个函数，它调用的返回值依然是一个函数
		2.connect的作用是：连接UI与redux
		3.connect的语法是：connect(映射状态的函数，映射操作状态的函数/对象)(UI组件)
		4.connect是高阶函数，同时应用了函数柯里化技术
*/
export default connect(
	state => ({sum:state}),
	//第二个参数为对象（最终会被翻译成函数的形式）
	{
		jia:incrementAction,
		jian:decrementAction
	}
	//第二个参数为函数
	/* dispatch => (
		{
			jia:(number)=> dispatch(incrementAction(number)),
			jian:(number)=> dispatch(decrementAction(number))
		}
	) */
)(Count)