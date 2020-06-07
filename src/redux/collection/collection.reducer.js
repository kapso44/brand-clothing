import SHOP_DATA from './shop_data'
import ShopActionTypes from './shop.types'

const INITIAL_STATE = SHOP_DATA

const collectionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collection: action.payload
            }
        default:
            return state
    }
}

export default collectionReducer