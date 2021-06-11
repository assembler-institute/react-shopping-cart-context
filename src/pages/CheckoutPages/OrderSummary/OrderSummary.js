import React, { useContext } from "react";
import withLayout from "../../../hoc/withLayout";

import checkoutContext from "../../../context/checkoutData";

import "./OrderSummary.scss";

function OrderSummary({ cartItems }) {
  const { state } = useContext(checkoutContext);

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
      <div className="col col-12 mb-4 d-flex justify-content-center">
        <h1>Order Summary</h1>
      </div>
      <div className="col col-12">
        <div className="row">
          <div className="col col-4 border-start border-dark p-3">
            <h3>Personal data</h3>
            <ul>
              <li>{state.name}</li>
              <li>{state.email}</li>
              <li>
                {state.phonePrefix} {state.phoneNumber}
              </li>
            </ul>
          </div>
          <div className="col col-4 border-start border-dark p-3">
            <h3>Billing address</h3>
            <ul>
              <li>{state.address}</li>
              <li>{state.city}</li>
              <li>{state.ZC}</li>
              <li>{state.country}</li>
            </ul>
          </div>
          <div className="col col-4 border-start border-end border-dark p-3">
            <h3>Payment method</h3>
            <li>{state.paymentMethod}</li>
            <li>{state.cardName}</li>
            <li>{state.cardNumber}</li>
            <li>{state.cardExpiryDate}</li>
            <li>{state.cvc}</li>
          </div>
        </div>
        <div className="row mt-5 d-flex justify-content-center">
          <div className="col col-10">
            <h3 className="text-center mb-5">Pursache resume</h3>
            <div className="row border-bottom border-dark p-3">
              <div className="col col-9">
                <h5>Product:</h5>
              </div>
              <div className="col col-1">
                <h5>Price:</h5>
              </div>
              <div className="col col-1">
                <h5>Amount:</h5>
              </div>
              <div className="col col-1">
                <h5 className="text-end">Total:</h5>
              </div>
            </div>
            {cartItems.map((item) => (
              <div key={item.id} id={item.id} className="row p-3">
                <div className="col col-9 border-start border-end border-dark">
                  <div className="row">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="col col-4 border-end border-dark"
                    />
                    <p className="col col-4 text-uppercase">{item.title}</p>
                  </div>
                </div>
                <div className="col col-1 d-flex justify-content-end border-end border-dark">
                  <p>{item.price}</p>
                </div>
                <div className="col col-1 d-flex justify-content-center border-end border-dark">
                  <p>{item.quantity}</p>
                </div>
                <div className="col col-1 d-flex justify-content-end border-end border-dark">
                  <p>{itemCalc(item.quantity, item.price)}</p>
                </div>
              </div>
            ))}
            <div className="row border-top border-dark p-3">
              <div className="col col-10" />
              <div className="col col-1 d-flex justify-content-center border-bottom border-start border-end border-dark">
                <p>
                  <strong>Total:</strong>
                </p>
              </div>
              <div className="col col-1 d-flex justify-content-end border-bottom border-end border-dark">
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

export default withLayout(OrderSummary);
