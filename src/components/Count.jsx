import React, { Component } from 'react'

export default class Count extends Component {

	/* state = {
		sum:0
	} */

	increment = ()=>{
		//1.获取用户选择的数字
		const {selectedNumber} = this.refs
		//2.获取原状态
		// const {sum} = this.state
		//3.执行加
		// this.setState({sum:sum + selectedNumber.value*1})
	}

	decrement = ()=>{
		//1.获取用户选择的数字
		const {selectedNumber} = this.refs
		//2.获取原状态
		// const {sum} = this.state
		//3.执行加
		// this.setState({sum:sum - selectedNumber.value*1})
	}

	incrementIfodd = ()=>{
			//1.获取用户选择的数字
			const {selectedNumber} = this.refs
			//2.获取原状态
			// const {sum} = this.state
			// if(sum % 2 !== 0){
			// 	//3.执行加
			// 	this.setState({sum:sum + selectedNumber.value*1})
			// }
	}
	
	incrementAsync = ()=>{
		//1.获取用户选择的数字
		const {selectedNumber} = this.refs
		//2.获取原状态
		// const {sum} = this.state
		setTimeout(()=>{
			//3.执行加
			// this.setState({sum:sum + selectedNumber.value*1})
		},500)
	}

	render() {
		// const {sum} = this.state
		return (
			<div>
				<h1>当前求和为？？？</h1>
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