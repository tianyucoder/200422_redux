import React, { Component } from 'react'
import {connect} from 'react-redux'
import {increment,decrement,incrementAsync} from '../../redux/actions/count'

class Count extends Component {
	
	increment = ()=>{
		const {selectedNumber} = this.refs
		this.props.increment(selectedNumber.value*1)
	}
	decrement = ()=>{
		const {selectedNumber} = this.refs
		this.props.decrement(selectedNumber.value*1)
	}
	incrementIfodd = ()=>{
		const {selectedNumber} = this.refs
		if(this.props.sum % 2 !== 0 ){
			this.props.increment(selectedNumber.value*1)
		}
	}
	incrementAsync = ()=>{
		const {selectedNumber} = this.refs
		this.props.incrementAsync(selectedNumber.value*1)
	}

	render() {
		return (
			<div>
				<h1>我是Count组件</h1>
				<h3>当前求和为：{this.props.sum}，下方组件总人数为：{this.props.peronCount}</h3>
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

export default connect(
	(state)=>({
		sum:state.sum,
		peronCount:state.persons.length
	}),//映射状态
	{increment,decrement,incrementAsync}//映射操作状态的方法
)(Count)

