import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import cookie from 'react-cookie';

import Hello from './Hello';
import LoginPanel from './LoginPanel';

class Home extends Component {
	componentWillMount(){
		this.state = {
			userId: ''
		};
		//adminId: cookie.load('adminId'),
	}

	onLogin(adminId){
		this.setState({
			userId:userId
		});
		//cookie.save('adminId',adminId, { path: '/'});
	}

	onLogout(){
		this.setState({
			userId:''
		});
		console.log("OK, Logout !");
		//cookie.remove('adminId', { path: '/'});
	}

	render(){
		if(!this.state.userId){
			return <LoginPanel 
					onSuccess={this.onLogin.bind(this)} 
					/>;
		}

		return <Hello 
			userId={this.state.userId}
			onLogout={this.onLogout.bind(this)}
			/>;
	}
}
export default Home;