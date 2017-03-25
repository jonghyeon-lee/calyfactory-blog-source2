import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class UserInfo extends Component {
	render(){
		return (
			<div className="userinfo">
				<li className="title">CalyFactory</li>
				<li>{''}{this.props.userId} 님 안녕하세요 ! <input type="button" className="userinfologoutbutton" value="로그아웃" onClick={() => this.props.onLogout()} /></li>
			</div>
		);
	}
};
UserInfo.propTypes={
	userId: PropTypes.string,
	onLogout: PropTypes.function
};
export default UserInfo;