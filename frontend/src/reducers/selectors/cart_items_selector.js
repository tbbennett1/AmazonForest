
const allCartItems = Object.values(state.entities.cartItems).map(cartItem => state.entities.items[cartItem.itemId]);

export default allCartItems;