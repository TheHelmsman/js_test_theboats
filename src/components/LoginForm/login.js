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

let LoginInputs = class Login extends Component {
	componentDidMount = () => {
		// const localFlag = localStorage.getItem('rememberMe') === 'true';
		// const localUser = localFlag ? localStorage.getItem('user') : '';
		// this.props.initialize({ email: localFlag ? localUser : '' });
		// this.setState({ user: localUser });
		// this.setState({ rememberMe: localFlag });
		// this.props.initialize({ email: 'your name' });
	}

	submit = e => {
		// e.preventDefault();
		// const data = new FormData(e.target);
		// this.setState({ user: data.get('email') });
		// localStorage.setItem('rememberMe', this.state.rememberMe);
		// localStorage.setItem('user', this.state.rememberMe ? data.get('email') : '');
	}

	handleChange = event => {
		// const input = event.target;
		// const value = input.type === 'checkbox' ? input.checked : input.value;
		// this.setState({ [input.name]: value });
	}

	forgotPswdHandler = e => {
		// e.preventDefault();
		// this.setState({ showLogin: false });
		// this.setState({ showRecover: true });
	}

	recover = e => {
		// e.preventDefault();
		// this.setState({ showLogin: true });
		// this.setState({ showRecover: false });
	}

	render() {
		// const {showLogin, showRecover} = this.state;
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
							placeholder="email"
						/>
					</Label>
					<Label>
						<input
							name="rememberMe"
							checked=""
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

export default Login
