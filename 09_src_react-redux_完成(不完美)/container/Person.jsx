import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addPersonAction} from '../redux/actions/person'
import {nanoid} from 'nanoid'

//UI组件
class Person extends Component {

	addPerson = ()=>{
		//1.获取用户的输入
		const {name,age} = this.refs
		//2.通知redux去加一个人
		this.props.jiaRen({id:nanoid(),name:name.value,age:age.value})
		//3.清空输入
		name.value = ''
		age.value = ''
	}

	render() {
		return (
			<div>
				<h1>我是Person组件</h1>
				<h3>当前总人数为:{this.props.rens.length} ,上方组件求和为{this.props.he}</h3>
				<input type="text" placeholder="输入名字" ref="name"/>
				<input type="text" placeholder="输入年龄" ref="age"/>
				<button onClick={this.addPerson}>添加</button>
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
//创建并
export default connect(
	state =>({
		rens:state.persons,
		he:state.count
	}),//映射状态
	{jiaRen:addPersonAction}//映射操作状态的方法
)(Person)