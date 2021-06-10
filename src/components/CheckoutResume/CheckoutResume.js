import React, { useEffect, useState } from "react";

import "./CheckoutResume.scss";

import OrderSummaryResume from "../OrderSummaryResume";

function CheckoutResume({ cartItems, ...routeProps }) {
  const [Url, setUrl] = useState(null);

  useEffect(() => {
    const activeUrl = routeProps.match.path;
    const activeUrlstring = activeUrl.substring(15, 16);
    const activeUrlId = parseInt(activeUrlstring, 16);
    setUrl(activeUrlId);
  }, []);

  return (
    <>
      <div className="headerPage--checkout">
        <h2>Checkout</h2>
        <span>Final Step {Url}</span>
      </div>
      <hr />
      <section className="checkout__main--container">
        <div className="checkout__resume--container">
          <section>
            <h4>Your order Confirmed!</h4> <br />
          </section>
          <section>
            <h5>
              Hi, Whitney, <br />
              Your order has beeen confirmed and will be shipping soon.
            </h5>
            <hr />
          </section>
          <div className="checkout__resume">
            <section className="checkout__orderDate--section">
              <div>
                <h6>Order Date</h6> <p> 18 March, 2021 </p>
              </div>
              <div>
                <h6>Order Date</h6> <p> BK55546456745 </p>
              </div>
              <div>
                <h6>Payment</h6> <p> Visa Visota </p>
              </div>
              <div>
                <h6>Adress</h6> <p> 8500 preston road </p>
              </div>
              <hr />
            </section>
            <section className="checkout__productCard--section">
              <OrderSummaryResume cartItems={cartItems} />
            </section>
            <section className="checkout__price--section">
              <div>
                <h6>Subtotal</h6>
                <p>$199.99</p>
              </div>
              <div>
                <h6>Exprees Shipping</h6>
                <p>$6.99</p>
              </div>
              <div>
                <h6>Taxes</h6>
                <p>$13</p>
              </div>
              <div>
                <h6>Discount</h6>
                <p>-20%</p>
              </div>
              <hr />
            </section>
            <section className="checkout__footer--section">
              <p>
                we will send you shipping confirmation when your items are on
                the way! We apreciate your business, and hope you enjoy your
                purchase.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default CheckoutResume;
