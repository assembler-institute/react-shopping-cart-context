import React from "react";
import { Link, NavLink } from "react-router-dom";

import ShoppingCartItem from "../ShoppingCartItem";
import Button from "../Button";
import { useProducts } from "../Context/reducer";

export function getCartTotal(cart) {
  return cart.reduce((accum, item) => {
    return accum + item.price * item.quantity;
  }, 0);
}

export function getCartTotalIVA(cart, IVA = 1.21) {
  return cart.reduce((accum, item) => {
    return accum + item.price * IVA * item.quantity;
  }, 0);
}

function Cart({ ...props }) {
  const { cartItems, IVA } = useProducts();
  return (
    <aside {...props}>
      <div className="row flex-column">
        <div className="col shopping__cart__header">
          <h2 className="h3 mt-2">Order Summary</h2>
          <hr className="mb-3" />
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <ShoppingCartItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              img={item.img}
              quantity={item.quantity}
              unitsInStock={item.unitsInStock}
            />
          ))
        ) : (
          <div className="col mb-4">
            <h4>Your cart is empty</h4>
          </div>
        )}
        <div className="col shopping__cart__footer">
          <div className="row row-cols-1 flex-column">
            <div className="col">
              <div className="d-flex justify-content-between flex-column">
                <div className="d-flex justify-content-between">
                  <span>Subtotal</span>
                  <span> {getCartTotal(cartItems)} €</span>
                </div>

                <div className="d-flex justify-content-between">
                  <span>Shipping</span>
                  <span>0 €</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>21% IVA</span>
                  <span>
                    {(getCartTotal(cartItems) * (IVA - 1)).toFixed(2)} €
                  </span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Total</span>
                  <span>{getCartTotalIVA(cartItems, IVA).toFixed(2)} €</span>
                </div>
              </div>
              <hr />
            </div>
            <div className="col">
              <Link to="/checkout/step-1">
                <Button disabled={cartItems.length <= 0 && true}>
                  Checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Cart;
