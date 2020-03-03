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