import React from  'react'

import {ReactComponent as ShoppingCartIcon } from '../../assets/images/shopping-cart-icon.svg'
import { connect } from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import './cart-icon.scss'

const CartIcon = ({toggleCartHidden, itemsCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingCartIcon className='shopping-icon'/>
<span className='item-count'>{itemsCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
    itemsCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)