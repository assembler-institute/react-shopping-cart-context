import React from "react";

export function buildNewCartItem(cartItem) {
  if (cartItem.quantity >= cartItem.unitsInStock) {
    return cartItem;
  }

  return {
    id: cartItem.id,
    title: cartItem.title,
    img: cartItem.img,
    price: cartItem.price,
    unitsInStock: cartItem.unitsInStock,
    createdAt: cartItem.createdAt,
    updatedAt: cartItem.updatedAt,
    quantity: cartItem.quantity + 1,
  };
}

/* export function saveNewProduct(newProduct) {
  setProducts((prevState) => [newProduct, ...prevState]);
}
 */
export function getCartTotal(cart) {
  return cart.reduce((accum, item) => {
    return accum + item.price * item.quantity;
  }, 0);
}

export function Divider() {
  return <hr className="ItemCard__divider" />;
}

export function getPopularityClasses(
  currentValue,
  limit,
  prevClasses,
  popularityClassName,
) {
  const halfLimit = Math.floor(limit / 2);

  if (currentValue >= halfLimit) {
    return `${prevClasses} ${popularityClassName}`;
  }

  return prevClasses;
}

export function buildSelectOptions(unitsInStock) {
  return Array.from({ length: unitsInStock }, (_value, index) => {
    const currentIndex = index + 1;
    return (
      <option key={currentIndex} value={currentIndex}>
        {currentIndex}
      </option>
    );
  });
}
