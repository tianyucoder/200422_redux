import React, { Component } from 'react'
//引入action，用于操作redux中的状态
import {connect} from 'react-redux'
//引入action，用于操作redux中的状态
import {addPerson} from '../../redux/actions/person'
//用于生成唯一id
import {nanoid} from 'nanoid'

//定义好一个Person组件（UI组件）
class Person extends Component {

	//添加一个人
	addPerson = ()=>{
		const {name,age} = this.refs
		this.props.addPerson({id:nanoid(),name:name.value,age:age.value})
		name.value = ''
		age.value = ''
	}

	render() {
		return (
			<div>
				<h1>我是Person组件</h1>
				<h3>当前总人数为:{this.props.persons.length}，上方组件求和为:{this.props.sum}</h3>
				<input type="text" placeholder="输入名字" ref="name"/>
				<input type="text" placeholder="输入年龄" ref="age"/>
				<button onClick={this.addPerson}>添加</button>
				<ul>
					{
						this.props.persons.map((p)=>{
							return <li key={p.id}>{p.name}-{p.age}</li>
						})
					}
				</ul>
			</div>
		)
	}
}

//创建并暴露一个容器组件，且与PersonUI组件已经建立了联系
export default connect(
	({persons,sum})=>({//映射状态
		persons,
		sum
	}),
	{addPerson}//映射操作状态的方法
)(Person)
