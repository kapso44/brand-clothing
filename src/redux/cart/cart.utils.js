export const addItemsToCart = (cartItems, addItemToCart) => {
    
    const existingItem = cartItems.find(
        cartItem => cartItem.id === addItemToCart.id
    );

    if(existingItem) {
        return cartItems.map(cartItem => 
            cartItem.id === addItemToCart.id ?
            {...cartItem, quantity: cartItem.quantity + 1} :
            cartItem        
        )
    }

    return [...cartItems, {...addItemToCart, quantity: 1 }]
}

export const removeItemsFromCart = (cartItems, removeItemFromCart) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === removeItemFromCart.id)

    if(existingItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== removeItemFromCart.id)
    }

    return cartItems.map(
        cartItem =>
        cartItem.id === removeItemFromCart.id ? 
        {...cartItem, quantity: cartItem.quantity - 1 } :
        cartItem 
    )
}