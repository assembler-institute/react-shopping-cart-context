import React from "react";

import "./CartItemShopping.scss";

function CartItemShopping({ img, title, price, quantity }) {
  return (
    <section className="cartItemShopping__Main--container">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="cartItemShopping__details">
        <strong>{title}</strong>
        <strong>{price}€</strong>
        <div>X {quantity} </div>
      </div>
    </section>
  );
}

export default CartItemShopping;
