import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.utils'
import {ReactComponent as Logo} from '../../assets/images/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import './header.scss'

const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ? 
                <div className='option' onClick={() => auth.signOut()}>
                    SIGNOUT
                </div> :
                <Link className='option' to='/login'>
                    LOGIN
                </Link>    
            }
            <CartIcon/>
        </div>
        <CartDropdown/>
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default  connect(mapStateToProps)(Header)