/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { myInput } from '../Field'
import { requiredInput, correctInput } from '../../validation'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { useStyles, Box, Label, FormTitle } from './styled'
import i18n from '../../i18n'
import { connect } from 'react-redux'
import { updateUser, remeberUser, switchForm } from '../../actions'

let LoginInputs = class Login extends Component {
	componentDidMount = () => {
		const { updateUser } = this.props
		const localFlag = localStorage.getItem('rememberMe') === 'true'
		const localUser = localFlag ? localStorage.getItem('user') : ''
		updateUser({ email: localUser })
	}

	submit = e => {
		const { updateUser, rememberMe } = this.props
		e.preventDefault()
		const data = new FormData(e.target)
		const localUser = data.get('email')
		updateUser({ email: localUser })
		localStorage.setItem('rememberMe', rememberMe)
		localStorage.setItem('user', rememberMe ? localUser : '')
	}

	handleChange = e => {
		const { remeberUser } = this.props
		const input = e.target
		const value = input.type === 'checkbox' ? input.checked : input.value
		remeberUser({ rememberMe: value })
	}

	forgotPswdHandler = e => {
		const { switchForm } = this.props
		e.preventDefault()
		switchForm({ showLogin: false, showRecover: true })
	}

	render() {
		const { email, rememberMe } = this.props
		return (
			<Box>
				<Grid container>
					<Grid item xs>
						<Avatar className="Ava">
							<LockOutlinedIcon />
						</Avatar>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs>
						<FormTitle>{i18n.t('loginTitle')}</FormTitle>
					</Grid>
				</Grid>
				<form className={useStyles.form} onSubmit={this.submit}>
					<Label>
						{i18n.t('loginEmail')}
						<Field
							name="email"
							component={myInput}
							validate={[requiredInput, correctInput]}
							type="text"
							defaultValue=""
							placeholder={email}
						/>
					</Label>
					<Label>
						<input
							name="rememberMe"
							checked={rememberMe}
							onChange={this.handleChange}
							type="checkbox"
						/>{' '}
						{i18n.t('loginCheckbox')}
					</Label>
					<Label>
						{i18n.t('loginPassword')}
						<Field
							name="password"
							component={myInput}
							validate={[requiredInput]}
							type="password"
							placeholder="password"
						/>
					</Label>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={useStyles.submit}
					>
						{i18n.t('loginButton')}
					</Button>
					<Grid container>
						<Grid item xs>
							<Link
								href="#"
								className="LoginFormLink"
								onClick={this.forgotPswdHandler}
							>
								{i18n.t('loginPasswordRecovery')}
							</Link>
						</Grid>
					</Grid>
				</form>
			</Box>
		)
	}
}

const Login = reduxForm({
	form: 'login',
})(LoginInputs)

const mapStateToProps = store => {
	return {
		email: store.login.email,
		rememberMe: store.login.rememberMe,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateUser: user => dispatch(updateUser(user)),
		remeberUser: flag => dispatch(remeberUser(flag)),
		switchForm: data => dispatch(switchForm(data)),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)
