import React, { Component } from 'react'
import { connect } from 'react-redux'

//UI组件
class Person extends Component {
	render() {
		return (
			<div>
				<h1>我是Person组件</h1>
				<h3>当前总人数为:{this.props.rens.length} ,上方组件求和为xxxxx</h3>
				<input type="text" placeholder="输入名字"/>
				<input type="text" placeholder="输入年龄"/>
				<button>添加</button>
				<ul>
					{
						this.props.rens.map((ren)=>{
							return <li key={ren.id}>{ren.name}-{ren.age}</li>
						})
					}
				</ul>
			</div>
		)
	}
}
//创建并暴露一个容器组件
export default connect(
	state =>({rens:state.persons}),//映射状态
	{}//映射操作状态的方法
)(Person)