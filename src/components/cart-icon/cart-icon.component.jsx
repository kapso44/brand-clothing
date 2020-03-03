import React from  'react'

import {ReactComponent as ShoppingCartIcon } from '../../assets/images/shopping-cart-icon.svg'
import { connect } from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

import './cart-icon.scss'

const CartIcon = ({toggleCartHidden}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingCartIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProps)(CartIcon)