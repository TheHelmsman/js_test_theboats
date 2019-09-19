import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {myInput} from '../Field';
import {requiredInput, correctInput} from '../../validation';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {useStyles, Box, Label, FormTitle, RecoverText} from './styled';

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
    console.log('---componentDidMount');
    console.log(this.state);

    const localFlag = localStorage.getItem('rememberMe') === 'true';
    const localUser = localFlag ? localStorage.getItem('user') : '';

    this.props.initialize({ email: localFlag ? localUser : '' });

    this.setState({ user: localUser }, function () {
      console.log(this.state.user);
    });
    this.setState({ rememberMe: localFlag }, function () {
      console.log(this.state.rememberMe);
    });
    console.log('LoginForm - componentDidMount, rememberMe: '+localFlag+' user: '+localUser);
    console.log('---state');
    console.log(this.state);
  }

  submit = (e) => {

    e.preventDefault();

    const data = new FormData(e.target);
    this.setState({ user: data.get('email') });

    localStorage.setItem('rememberMe', this.state.rememberMe);
    localStorage.setItem('user', this.state.rememberMe ? data.get('email') : '');

    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const user = rememberMe ? localStorage.getItem('user') : '';
    console.log('check save, rememeberMe: '+rememberMe+' user: '+user);
  }

  handleChange = (event) => {
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
    this.setState({ [input.name]: value });
    console.log([input.name]+' '+value);
  };
 
  componentWillMount () {
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
    console.log('---');
    console.log(this.props);
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
                <FormTitle>Sign in</FormTitle>
              </Grid>
            </Grid>
            <form className={useStyles.form} onSubmit={this.submit} >
              <Label>
                Email: 
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
                <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox"/> Remember me
              </Label>
              <Label>
                Password:
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
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" className="LoginFormLink" onClick={this.forgotPswdHandler}>
                    Forgot password?
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
              <FormTitle>Recover password</FormTitle>
            </Grid>
          </Grid>
          <form className={useStyles.form} onSubmit={this.recover} >
            <Label>
              Email: 
              <Field
                name="email"
                component={myInput}
                validate={[requiredInput, correctInput]}
                type="text"
                defaultValue={this.state.user}
                placeholder="email"
              />
            </Label>
            <RecoverText>Enter your email and click sumbit. Password reset link will be send to your email.</RecoverText>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={useStyles.submit}
            >
              Recover password
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
