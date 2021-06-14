import React, { useContext } from "react";
import SummaryItem from "../SummaryItem";

import { StateContext } from "../../context/state-context";

function getCartTotal(cart) {
  return cart.reduce((accum, item) => {
    return accum + item.price * item.quantity;
  }, 0);
}

function OrderSummary({ ...props }) {
  const value = useContext(StateContext);
  const { cartItems } = value;

  return (
    <aside {...props}>
      <div className="row flex-column">
        <div className="col shopping__cart__header">
          <h2 className="h3 mt-2">Order summary</h2>
          <hr className="mb-3" />
        </div>
        {cartItems.length > 0 &&
          cartItems.map((item) => (
            <SummaryItem
              key={item.id}
              title={item.title}
              price={item.price}
              img={item.img}
              quantity={item.quantity}
            />
          ))}
        <div className="col shopping__cart__footer">
          <div className="row row-cols-1 flex-column">
            <div className="col">
              {/* <div className="d-flex justify-content-between">
                <h6 className="h6">Subtotal</h6>
                <h6 className="h6">{getCartTotal(cartItems)}€</h6>
              </div> */}
              {/* <div className="d-flex justify-content-between">
                <h6 className="h6">Tax</h6>
                <h6 className="h6">0€</h6>
              </div> */}
              {/* <div className="d-flex justify-content-between">
                <h6 className="h6">Shipping</h6>
                <h6 className="h6">0€</h6>
              </div> */}
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

export default OrderSummary;
