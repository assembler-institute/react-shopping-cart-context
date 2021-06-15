import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import ItemShowcase from "../ItemShowcase";
import Button from "../Button/Button";
import loadLocalStorageItems from "../../utils/loadLocalStorageItems";
import { orderContext } from "../../CheckoutContext";

function StepFourForm() {
  const checkoutCart = loadLocalStorageItems("react-sc-state-cart-items", []);
  const history = useHistory();
  const { stepOne, stepTwo, stepThree, resetCheckoutForms } = useContext(
    orderContext,
  );
  const { name, email, countryCode, phone } = stepOne;
  const { address, city, zip, country } = stepTwo;
  const { cardHolder, cardNumber } = stepThree;

  function getTotal(cart) {
    return cart.reduce((accum, item) => {
      return accum + item.price * item.quantity;
    }, 0);
  }

  function goToHome() {
    history.push("/");
    resetCheckoutForms();
  }

  return (
    <div className="summary">
      <h1>Order completed!</h1>
      <hr />

      {checkoutCart.map((item) => (
        <ItemShowcase
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          img={item.img}
          quantity={item.quantity}
        />
      ))}
      <div className="col shopping__cart__footer">
        <div className="row row-cols-1 flex-column">
          <div className="col">
            <div className="d-flex justify-content-between mb-5">
              <h4 className="h5">Total</h4>
              <h4>
                <strong>{getTotal(checkoutCart)}€</strong>
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="col shopping__cart__header">
        <h2 className="h3 mt-2">Personal information</h2>
        <hr className="mb-3" />
      </div>
      <div>
        <div className="step1 col">
          <p>
            <span className="h5">Name:</span> {name}
          </p>
          <p>
            <span className="h5">Email:</span> {email}
          </p>
          <p>
            <span className="h5">Name:</span> {countryCode} {phone}
          </p>
        </div>
      </div>

      <div className="col shopping__cart__header">
        <h2 className="h3 mt-2">Shipping information</h2> {}
        <hr className="mb-3" />
      </div>
      <div>
        <div className="step1 col">
          <p>
            <span className="h5">Address:</span>
            <br />
            {address}
            <br />
            {city} - {zip}
            <br />
            {country}
          </p>
        </div>
      </div>

      <div className="col shopping__cart__header">
        <h2 className="h3 mt-2">Billing information</h2>
        <hr className="mb-3" />
      </div>
      <div>
        <div className="step1 col">
          <p>
            <span className="h5">Card holder:</span> {cardHolder}
          </p>
          <p>
            <span className="h5">Card number:</span> **** **** ****{" "}
            {cardNumber.slice(12, 16)}
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <Button onClick={goToHome}>Back home</Button>
      </div>
    </div>
  );
}

export default StepFourForm;
