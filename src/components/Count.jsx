//该组件是Count的UI组件，该组件中不能使用任何redux相关的API
import React, { Component } from 'react'

export default class Count extends Component {

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