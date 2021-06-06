import React from "react";

import ShoppingCartItem from "../ShoppingCartItem";

function getCartTotal(cart) {
  return cart.reduce((accum, item) => {
    return accum + item.price * item.quantity;
  }, 0);
}

function OrderSummary({ cartItems, handleRemove, handleChange, ...props }) {
  return (
    <aside {...props}>
      <div className="row flex-column">
        <div className="col shopping__cart__header">
          <h2 className="h3 mt-2">Order Summary</h2>
          <hr className="mb-3" />
        </div>
        <div className="cartItemsContainer">
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
                handleRemove={handleRemove}
                handleChange={handleChange}
              />
            ))
          ) : (
            <div className="col mb-4">
              <h4>Your cart is empty</h4>
            </div>
          )}
        </div>

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
          </div>
        </div>
        <div className="col">
          <div className=" mb-4 gift__CardContainer">
            <p className="ml-4">Gift card/Discount code</p>
            <div className="gift__Form">
              <div className="gift__mockInput">hello</div>
              <button
                type="button"
                className="btn btn-outline-primary gift__Btn"
              >
                Apply
              </button>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </aside>
  );
}

export default OrderSummary;
