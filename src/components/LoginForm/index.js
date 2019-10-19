/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Login from './login'
import Recover from './recover'
import { connect } from 'react-redux'

let LoginForm = class LoginForm extends Component {
	render() {
		const { showLogin, showRecover } = this.props
		return (
			<div className="materialContainer">
				<CssBaseline />
				{showLogin ? <Login /> : null}
				{showRecover ? <Recover /> : null}
			</div>
		)
	}
}

const mapStateToProps = store => {
	return {
		showLogin: store.login.showLogin,
		showRecover: store.login.showRecover,
	}
}

export default connect(mapStateToProps)(LoginForm)
