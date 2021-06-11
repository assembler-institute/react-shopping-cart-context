import React, { useContext } from "react";

import Button from "../Button";

import ShoppingContext from "../../context";

import "./CheckoutSideBar.scss";

function buildSelectOptions(unitsInStock) {
  return Array.from({ length: unitsInStock }, (_value, index) => {
    const currentIndex = index + 1;
    return (
      <option key={currentIndex} value={currentIndex}>
        {currentIndex}
      </option>
    );
  });
}

function getCartTotal(cart) {
  return cart.reduce((accum, item) => {
    return accum + item.price * item.quantity;
  }, 0);
}

function CheckoutSideBar() {
  const { cartItems, handleChange, handleRemove } = useContext(ShoppingContext);

  return (
    <div className="overflowBox">
      <div className="col">
        {cartItems.map((item) => (
          <div key={item.id} className="row flex-column">
            <div className="col">
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
                    <div className="col mt-auto">
                      <div className="row">
                        <div className="col col-6 col-lg-4">
                          <select
                            className="custom-select"
                            onChange={(event) => {
                              handleChange(event, item.id);
                            }}
                            onBlur={(event) => {
                              handleChange(event, item.id);
                            }}
                            value={item.quantity}
                          >
                            {buildSelectOptions(item.unitsInStock)}
                          </select>
                        </div>
                        <div className="col col-6 col-lg-8">
                          <Button
                            onClick={() => {
                              handleRemove(item.id);
                            }}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <hr />
            </div>
          </div>
        ))}
        ;
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
  );
}

export default CheckoutSideBar;
