/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { myInput } from '../Field'
import { requiredInput, correctInput } from '../../validation'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { useStyles, Box, Label, FormTitle, RecoverText } from './styled'
import i18n from '../../i18n'

let RecoverInput = class Recover extends Component {
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
						<FormTitle>{i18n.t('recoverTitle')}</FormTitle>
					</Grid>
				</Grid>
				<form className={useStyles.form} onSubmit={this.recover}>
					<Label>
						{i18n.t('recoverEmail')}
						<Field
							name="email"
							component={myInput}
							validate={[requiredInput, correctInput]}
							type="text"
							defaultValue={this.state.user}
							placeholder="email"
						/>
					</Label>
					<RecoverText>{i18n.t('recoverText')}</RecoverText>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={useStyles.submit}
					>
						{i18n.t('recoverPassword')}
					</Button>
				</form>
			</Box>
		)
	}
}

const Recover = reduxForm({
	form: 'login',
})(RecoverInput)

export default Recover
