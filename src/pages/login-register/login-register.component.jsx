import React from 'react'

import Login from '../../components/login/login.component'
import Signup from '../../components/signup/signup.component'

import './login-register.scss'

const LoginRegister = () => (
    <div className='sign-in-and-sign-up'>
        <Login/>
        <Signup/>
    </div>
)

export default LoginRegister