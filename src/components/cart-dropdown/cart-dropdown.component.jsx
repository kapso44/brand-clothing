import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length ?  
        cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
        ))
       : <span className='empty-message'> Your Cart Is Empty </span>
      }
    </div>
    <CustomButton onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
    }}>
        GO TO CHECKOUT
    </CustomButton>
  </div>
);

// const mapStateToProps = state => ({
//   cartItems : selectCartItems(state)
// });

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

//one way using dispatch props but we can directly can dispatch in above function
// const mapDispatchToProps = dispatch => ({
//     hidden: () => dispatch(toggleCartHidden())
// })

export default withRouter(connect(mapStateToProps)(CartDropdown));