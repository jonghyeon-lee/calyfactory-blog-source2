import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

import UserInfo from './UserInfo';

// Parent Component
class Hello extends Component {
	constructor(){
		super(...arguments);
		this.state = {
			mans:[]
		};
	}

	componentDidMount(){
		fetch('/man',{
			method: 'get',
			dataType: 'json',
			headers:{
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		.then((response) => response.json())
		.then((responseData) => {
			this.setState({mans: responseData});
		})
		.catch((error)=>{
			console.log('Error fetching man',error);
		});
	}
	render() {
		let mans = this.state.mans.map( (man) => {
			return <Guy
					name={man.name}
					age={man.age}
					createDateTime={man.create_datetime}
					{...man}/>
		});

		let userPanel = (
			 <UserInfo
				userId={this.props.userId}
				onLogout={this.props.onLogout}
				{...UserInfo}/>
		);

		return (
			<div>
				{userPanel}
				<h1>CalyFactory Developers</h1>
				<ul>
				{mans}
				</ul>
			</div>
		);
	}
}
// Child Component
class Guy extends Component {
	render() {
		return (
			<li>
				{this.props.name}, age is {this.props.age}. create time : {this.props.createDateTime}
			</li>
		);
	}
}
export default Hello;