import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {myInput} from '../Field';
import {requiredInput, correctInput} from '../../validation';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {useStyles, Box, Label, FormTitle, RecoverText} from './styled';
import i18n from "../../i18n";

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      rememberMe: false,
      showLogin: true,
      showRecover: false
    };
  }

  componentDidMount = () => {
    const localFlag = localStorage.getItem('rememberMe') === 'true';
    const localUser = localFlag ? localStorage.getItem('user') : '';

    this.props.initialize({ email: localFlag ? localUser : '' });

    this.setState({ user: localUser }, function () {
      console.log(this.state.user);
    });
    this.setState({ rememberMe: localFlag }, function () {
      console.log(this.state.rememberMe);
    });
  }

  submit = (e) => {

    e.preventDefault();

    const data = new FormData(e.target);
    this.setState({ user: data.get('email') });

    localStorage.setItem('rememberMe', this.state.rememberMe);
    localStorage.setItem('user', this.state.rememberMe ? data.get('email') : '');
  }

  handleChange = (event) => {
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
    this.setState({ [input.name]: value });
  };
 
  componentWillMount = () => {
    this.props.initialize({ email: 'your name' });
  }

  forgotPswdHandler = (e) => {
    e.preventDefault();
    this.setState({ showLogin: false });
    this.setState({ showRecover: true });
  }

  recover = (e) => {
    e.preventDefault();
    this.setState({ showLogin: true });
    this.setState({ showRecover: false });
  }

  render () {
    const {showLogin, showRecover} = this.state;
    return (
        <div className="materialContainer">
          <CssBaseline />
          { showLogin ? 
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
            <form className={useStyles.form} onSubmit={this.submit} >
              <Label>
                {i18n.t('loginEmail')}
                <Field
                  name="email"
                  component={myInput}
                  validate={[requiredInput, correctInput]}
                  type="text"
                  defaultValue={this.state.user}
                  placeholder="email"
                />
              </Label>
              <Label>
                <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox"/> {i18n.t('loginCheckbox')}
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
                  <Link href="#" className="LoginFormLink" onClick={this.forgotPswdHandler}>
                  {i18n.t('loginPasswordRecovery')}
                  </Link>
                </Grid>
            </Grid>
          </form>
        </Box>
          : null }
        { showRecover ?
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
          <form className={useStyles.form} onSubmit={this.recover} >
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
         : null }
      </div>
    );
  }
}

LoginForm = reduxForm ({
  form: 'login',
}) (LoginForm);

export default LoginForm;
