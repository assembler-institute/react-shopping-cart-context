function getCartTotal(cart) {
  return cart.reduce((accum, item) => {
    return accum + item.price * item.quantity;
  }, 0);
}

export default getCartTotal;
