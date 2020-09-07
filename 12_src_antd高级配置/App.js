import React, { Component } from 'react'
import {Button,Switch,message} from 'antd'

export default class App extends Component {

	demo = ()=>{
		message.warning('操作成功！')
	}
	
	render() {
		return (
			<div>
				App....
				<button>点我</button>
				<Button onClick={this.demo}>点我</Button>
				<Button onClick={this.demo} type="primary">点我</Button>
				<Button onClick={this.demo} type="danger">点我</Button>
				<Switch defaultChecked/>
			</div>
		)
	}
}
