import React, { Component } from 'react'
import {Button,Switch,message} from 'antd'
import 'antd/dist/antd.css'

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
