export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existing = cartItems.find(item => item.id === cartItemToAdd.id);

  if (existing) {
    return cartItems.map(item =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
};
