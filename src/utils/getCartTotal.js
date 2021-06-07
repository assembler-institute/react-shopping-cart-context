function getCartTotal(cart, discount = 0) {
  return cart.reduce((accum, item) => {
    const total = accum + item.price * item.quantity;
    return total - discount;
  }, 0);
}

export default getCartTotal;
