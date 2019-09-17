import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {myInput} from '../Field';
import {requiredInput, correctInput} from '../../validation';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      rememberMe: false
    };
  }

  componentDidMount() {
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

  render () {
    console.log('---');
    console.log(this.props);
    // const {initialValues} = this.props;
    return (
      <form onSubmit={this.submit} >
        <label>
          User: 
          <Field
            name="email"
            component={myInput}
            validate={[requiredInput, correctInput]}
            type="text"
            defaultValue={this.state.user}
            placeholder="email"
          />
        </label>
        <label>
          <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox"/> Remember me
        </label>
        <label>
          Password:
          <Field
            name="password"
            component={myInput}
            validate={[requiredInput]}
            type="password"
            placeholder="password"
          />
        </label>
        <button type="submit" label="submit">Submit</button>
      </form>
    );
  }
}

LoginForm = reduxForm ({
  form: 'login',
}) (LoginForm);

export default LoginForm;