import { CartActionTypes } from './cart.types'
import { addItemsToCart } from './cart.utils'

const INTIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return ({
                hidden: !state.hidden
            })
        case CartActionTypes.ADD_ITEM:
            return ({
                ...state,
                cartItems: addItemsToCart(state.cartItems, action.payload)
            })    
        default:
            return state;
    }
}

export default cartReducer