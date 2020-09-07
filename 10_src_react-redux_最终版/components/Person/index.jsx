import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addPerson} from '../../redux/actions/person'
import {nanoid} from 'nanoid'

class Person extends Component {

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

export default connect(
	({persons,sum})=>({
		persons,
		sum
	}),
	{addPerson}
)(Person)
