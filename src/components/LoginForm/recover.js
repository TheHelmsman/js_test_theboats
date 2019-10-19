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
import { connect } from 'react-redux'
import { switchForm } from '../../actions'

let RecoverInputs = class Recover extends Component {
	recover = e => {
		const { switchForm } = this.props
		e.preventDefault()
		switchForm({ showLogin: true, showRecover: false })
	}

	render() {
		const { email } = this.props
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
							defaultValue=""
							placeholder={email}
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
	form: 'recover',
})(RecoverInputs)

const mapStateToProps = store => {
	return {
		email: store.login.email,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		switchForm: data => dispatch(switchForm(data)),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Recover)
