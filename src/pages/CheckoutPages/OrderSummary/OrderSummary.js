import React, { useContext } from "react";
import withLayout from "../../../hoc/withLayout";

import checkoutContext from "../../../context/checkoutData";

import "./OrderSummary.scss";

const isCheckout = true;

function OrderSummary({ cartItems }) {
  const { state } = useContext(checkoutContext);
  console.log(state);

  function itemCalc(itemQuantity, itemPrice) {
    return itemQuantity * itemPrice;
  }

  function totalCalc() {
    let totalPrice = 0;
    cartItems.map((item) => {
      totalPrice += item.quantity * item.price;
      return totalPrice;
    });
    return totalPrice;
  }

  return (
    <div className="row mt-5">
      <div className="col col-12">
        <div className="row">
          <div className="col col-4">
            <h3>Personal data</h3>
            <ul>
              <li>{state.name}</li>
              <li>{state.email}</li>
              <li>
                {state.phonePrefix} {state.phoneNumber}
              </li>
            </ul>
          </div>
          <div className="col col-4">
            <h3>Billing address</h3>
            <ul>
              <li>{state.address}</li>
              <li>{state.city}</li>
              <li>{state.ZC}</li>
              <li>{state.country}</li>
            </ul>
          </div>
          <div className="col col-4">
            <h3>Payment method</h3>
            <li>{state.paymentMethod}</li>
            <li>{state.cardName}</li>
            <li>{state.cardNumber}</li>
            <li>{state.cardExpiryDate}</li>
            <li>{state.cardCVV}</li>
            <li>{state.termsConditions}</li>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col col-12">
            <h3 className="text-center">Pursache resume</h3>
            <div className="row">
              <div className="col col-9">
                <p>
                  <h5>Product:</h5>
                </p>
              </div>
              <div className="col col-1">
                <p>
                  <h5>Price:</h5>
                </p>
              </div>
              <div className="col col-1">
                <p>
                  <h5>Amount:</h5>
                </p>
              </div>
              <div className="col col-1">
                <p>
                  <h5>Total:</h5>
                </p>
              </div>
            </div>
            {cartItems.map((item) => (
              <div key={item.id} id={item.id} className="row">
                <div className="col col-9">
                  <div className="row">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="col col-2"
                    />
                    <p className="col col-10 text-uppercase">{item.title}</p>
                  </div>
                </div>
                <div className="col col-1 d-flex justify-content-end">
                  <p>{item.price}</p>
                </div>
                <div className="col col-1 d-flex justify-content-center">
                  <p>{item.quantity}</p>
                </div>
                <div className="col col-1 d-flex justify-content-end">
                  <p>{itemCalc(item.quantity, item.price)}</p>
                </div>
              </div>
            ))}
            <div className="row">
              <div className="col col-10" />
              <div className="col col-1 d-flex justify-content-center">
                <p>
                  <strong>Total:</strong>
                </p>
              </div>
              <div className="col col-1 d-flex justify-content-end">
                <p>
                  <strong>{totalCalc()}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withLayout(OrderSummary, isCheckout);
