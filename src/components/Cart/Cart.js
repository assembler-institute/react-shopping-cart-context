import React from "react";

import ShoppingCartItem from "../ShoppingCartItem";
import Button from "../Button";
import { useProducts } from "../Context/reducer";



function getCartTotal(cart) {
  return cart.reduce((accum, item) => {
    return accum + item.price * item.quantity;
  }, 0);
}

function Cart({...props }) {
  const { cartItems } = useProducts();
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
              <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/user-info"
              >
                <Button>Checkout</Button>
              </NavLink>
              </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Cart;
