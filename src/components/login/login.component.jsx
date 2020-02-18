import React from 'react';

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {signInWithGoogle} from '../../firebase/firebase.utils'
import './login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
            <FormInput 
                name='email' 
                type='email' 
                value={this.state.email} 
                handleChange={this.handleChange}
                label='Email'
                required
            />
            <FormInput 
                name='password' 
                value={this.state.password} 
                onChange={this.handleChange} 
                type='password'
                label='Password'
                required
            />
            <CustomButton type='submit' value='submit'> Submit </CustomButton>
            <CustomButton onClick={signInWithGoogle}> Login with Google</CustomButton>
        </form>
      </div>
    );
  }
}

export default Login;