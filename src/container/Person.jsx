import React, { Component } from 'react'

export default class Person extends Component {
	render() {
		return (
			<div>
				<h1>我是Person组件</h1>
				<h3>当前总人数为:xxxxx ,上方组件求和为xxxxx</h3>
				<input type="text" placeholder="输入名字"/>
				<input type="text" placeholder="输入年龄"/>
				<button>添加</button>
				<ul>
					<li>tom-19</li>
					<li>peiqi-20</li>
				</ul>
			</div>
		)
	}
}
