import React from "react";
import "./SumaryCart.scss";
import CartItemShopping from "../CartItemShopping";

function getCartTotal(cart) {
  return cart.reduce((accum, item) => {
    return accum + item.price * item.quantity;
  }, 0);
}

function SumaryCart({ cartItems, ...props }) {
  return (
    <div {...props} className="GlobalContainer">
      <div className="flex-column order__container">
        <div className="cartItemsContainer">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <>
                <CartItemShopping
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  img={item.img}
                  quantity={item.quantity}
                />
                {item !== cartItems[cartItems.length - 1] && (
                  <div key={`${item.id}div`} className="col">
                    <hr />
                  </div>
                )}
              </>
            ))
          ) : (
            <div className="col mb-4">
              <h4>Your cart is empty</h4>
            </div>
          )}
        </div>
        <hr className="mb-3" />
        <div className="col shopping__cart__footer">
          <div className="row row-cols-1 flex-column">
            <div className="col">
              <div className="d-flex justify-content-between">
                <h4>Total</h4>
                <h4 className="price__total funTitle">
                  <strong>{getCartTotal(cartItems)}€</strong>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SumaryCart;
