import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import './checkout.scss'

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-blocks'>
                <span>Product</span>
            </div>
            <div className='header-blocks'>
                <span>Description</span>
            </div>
            <div className='header-blocks'>
                <span>Quantity</span>
            </div>
            <div className='header-blocks'>
                <span>Price</span>
            </div>
            <div className='header-blocks'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.length ? 
            cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            )
            : <span className='empty-message'> Your Cart Is Empty </span>
        }
        <div className='total'>
            <span> Total: ${total} </span>
        </div>
        <div className='test-warning'>
            <span className='card-details'> *Card No*- 4242 4242 4242 4242. Expiry data - 01/20.. CVV - 123 </span>
        </div> 
        <StripeCheckoutButton price={total}/>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)