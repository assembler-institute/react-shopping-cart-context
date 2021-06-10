import React, { useEffect, useContext } from "react";

import ShoppingContext from "../../context/ShoppingContext";

import "./CheckoutResume.scss";

import OrderSummaryResume from "../OrderSummaryResume";

const myDate = new Date().toLocaleDateString();

function CheckoutResume({ cartItems }) {
  const { personalDetails, shippingDetails, paymentDetails } = useContext(
    ShoppingContext,
  );

  useEffect(() => {
    // console.log(personalDetails);
    // console.log(shippingDetails);
  }, []);

  // const [Url, setUrl] = useState(null);

  // useEffect(() => {
  //   const activeUrl = routeProps.match.path;
  //   const activeUrlstring = activeUrl.substring(15, 16);
  //   const activeUrlId = parseInt(activeUrlstring, 16);
  //   setUrl(activeUrlId);
  // }, []);

  return (
    <>
      <div className="headerPage--checkout">
        <h2>Checkout</h2>
        <span>Final Step </span>
      </div>
      <hr />
      <section className="checkout__main--container">
        <div className="checkout__resume--container">
          <section>
            <h4>Your order Confirmed!</h4> <br />
          </section>
          <section>
            {personalDetails.name === "" ? (
              <h5>
                Hi, client, <br />
                Your order has beeen confirmed and will be shipping soon.
              </h5>
            ) : (
              <h5>
                Hi, {personalDetails.name}, <br />
                Your order has beeen confirmed and will be shipping soon.
              </h5>
            )}
            <hr />
          </section>
          <div className="checkout__resume">
            <section className="checkout__orderDate--section">
              <div>
                <h6>Order Date</h6> <p> {myDate} </p>
                {/* <h6>Order Date</h6> <p> 18 March, 2021 </p> */}
              </div>
              <div>
                <h6>Shipping number</h6> <p> BK55546456745 </p>
              </div>
              {paymentDetails.paymentMethod === "" ? (
                <div>
                  <h6>Payment</h6> <p> Visa Visota </p>
                </div>
              ) : (
                <div>
                  <h6>Payment</h6> <p> {paymentDetails.paymentMethod} </p>
                </div>
              )}
              {paymentDetails.cardHolderName === "" ? (
                <div>
                  <h6>Nombre de tarjeta</h6>
                  <p> No credit card </p>
                </div>
              ) : (
                <div>
                  <h6>Nombre de tarjeta</h6>{" "}
                  <p> {paymentDetails.cardHolderName} </p>
                </div>
              )}
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
            <section className="checkout__personalDetail--section">
              <h4>Personal Details</h4> <br />
              {personalDetails.name === "" ? (
                <div>
                  <h6>Name</h6>
                  <p>No name registered</p>
                </div>
              ) : (
                <div>
                  <h6>Name</h6>
                  <p>{personalDetails.name}</p>
                </div>
              )}
              {personalDetails.email === "" ? (
                <div>
                  <h6>Email</h6>
                  <p> No Email registered </p>
                </div>
              ) : (
                <div>
                  <h6>Email</h6>
                  <p>{personalDetails.email}</p>
                </div>
              )}
              {shippingDetails.address === "" ? (
                <div>
                  <h6>Adress</h6> <p> No Adress registered </p>
                </div>
              ) : (
                <div>
                  <h6>Payment</h6> <p> {shippingDetails.address} </p>
                </div>
              )}
              {personalDetails.phoneNumber === "" ? (
                <div>
                  <h6>Phone number</h6>
                  <p>No phone number registered</p>
                </div>
              ) : (
                <div>
                  <h6>Phone number</h6>
                  <p>{personalDetails.phoneNumber}</p>
                </div>
              )}
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
