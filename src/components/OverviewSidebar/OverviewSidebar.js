import React from "react";

import "./OverviewSidebar.scss";

function getCartTotal(cart) {
  return cart.reduce((accum, item) => {
    return accum + item.price * item.quantity;
  }, 0);
}

function OverviewSidebar({ cartItems, ...props }) {
  return (
    <aside {...props} className="OverviwSidebar">
      <div className="row flex-column">
        <div className="col shopping__cart__header">
          <h2 className="h3 mt-2">Checkout Summary</h2>
          <hr className="mb-3" />
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="col mb-2">
              <div className="row">
                <div className="col-12 col-xl-4 mb-3 mb-xl-0">
                  <img
                    className="ShoppingCartItem__img"
                    src={item.img}
                    alt=""
                  />
                </div>
                <div className="col-12 col-xl-8">
                  <div className="row flex-column">
                    <div className="col">
                      <h4 className="h5">
                        <strong>{item.title}</strong>
                      </h4>
                    </div>
                    <div className="col">
                      <p>
                        <strong>{item.price}€</strong>
                      </p>
                    </div>
                    <div className="col">
                      <p>
                        <strong>Quantity: {item.quantity}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </aside>
  );
}

export default OverviewSidebar;
