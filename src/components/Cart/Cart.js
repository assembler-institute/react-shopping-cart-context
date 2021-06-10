import React, { useEffect, useState, useContext } from "react";

import { Link } from "react-router-dom";

import ShoppingCartItem from "../ShoppingCartItem";
import Button from "../Button";

import { PROFILE_URL } from "../../utils/constants";

import CartContext from "../../context/cart-context";
import LoginContext from "../../context/login-context";

import getCartTotal from "../../utils/getCartTotal";

function Cart({ ...props }) {
  const { cartItems, remove, change } = useContext(CartContext);
  const [hasCartItems, setHasCartItems] = useState(false);

  const { data: loginData } = useContext(LoginContext);

  const enableCheckout = !hasCartItems || !loginData.isLogged;

  useEffect(() => {
    if (cartItems.length > 0) {
      setHasCartItems(true);
    } else {
      setHasCartItems(false);
    }
    console.log(enableCheckout);
  }, [cartItems, loginData.isLogged]);

  return (
    <aside {...props}>
      <div className="row flex-column">
        <div className="col shopping__cart__header">
          <h2 className="h3 mt-2">Shopping Cart</h2>
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
              handleRemove={remove}
              handleChange={change}
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
              <div className="d-flex justify-content-between">
                <h4 className="h5">Total</h4>
                <h4>
                  <strong>{getCartTotal(cartItems)}€</strong>
                </h4>
              </div>
              <hr />
            </div>
            <div className="col">
              <Link to={PROFILE_URL}>
                <Button disabled={enableCheckout}>Checkout</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Cart;
