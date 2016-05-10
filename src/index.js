'use strick'

import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import component from './component';

class HelloWorld extends Component {
	render(){
		return (
			<h1>Hello World</h1>
		)
	}
}

ReactDOM.render(<HelloWorld/>,document.getElementById('app'));