import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import store from './redux/store'

ReactDOM.render(
	//使用Provider给App所有的后代容器组件提供store对象
	<Provider store={store}>
		<App/>
	</Provider>
,document.getElementById('root'))