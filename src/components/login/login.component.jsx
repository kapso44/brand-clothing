import React from 'react';

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle} from '../../firebase/firebase.utils'
import './login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' });
    } catch(e) {
      console.log(e.msg)
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const {email, password} = this.state;
    return (
      
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
            <FormInput 
                name='email' 
                type='email' 
                value={email} 
                handleChange={this.handleChange}
                label='Email'
                required
            />
            <FormInput 
                name='password' 
                value={password} 
                onChange={this.handleChange} 
                type='password'
                label='Password'
                required
            />
            <div className='signin-buttons'>
                <CustomButton type='submit' value='submit'> Sign In </CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Login with Google</CustomButton>
            </div>
        </form>
      </div>
    );
  }
}

export default Login;