import SHOP_DATA from './shop_data'

const INITIAL_STATE = SHOP_DATA

const collectionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default collectionReducer