// import React, { useState, useContext } from "react";
import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import SummaryCartItem from "../../components/SummaryCartItem";
import withLayout from "../../hoc/withLayout";

import CheckoutContext from "../../context/checkout-context";
import { HOME } from "../../constants/routes";
import ButtonLink from "../../components/ButtonLink";

import "./Summary.scss";

function calculateDiscount(discount, total) {
  return parseFloat((discount / 100) * total).toFixed(2);
}

function getCartTotal(cart) {
  return cart.reduce((accum, item) => {
    return accum + item.price * item.quantity;
  }, 0);
}

function Summary({
  date = "18 March, 2021",
  orderCode = "KB20020",
  cartItems,
  shipping = 6.99,
  taxes = 13.99,
  discount = 20,
}) {
  const [total, setTotal] = useState(0);
  const { paymentMethod, address, name } = useContext(CheckoutContext);
  const history = useHistory();

  useEffect(() => {
    setTotal(getCartTotal(cartItems));
    window.history.pushState(null, document.title, window.location.href);
  }, []);

  useEffect(() => {
    history.listen((newLocation, action) => {
      if (
        action === "POP" &&
        history.location.pathname === "/checkout/order-summary"
      ) {
        history.go(1);
      }
    });
  }, [history]);

  return (
    <div className="summary col col-12">
      <h1>Your Order Confirmed!</h1>
      <h5 className="mt-4">Hi {name || "Mathias"},</h5>
      <p>Your order has been confirmed and will be shipping soon.</p>
      <hr className="mb-3" />

      <section>
        <div className="d-flex justify-content-between">
          <div>
            <h5 className="text-black-50">Order Date</h5>
            <p>{date}</p>
          </div>
          <div>
            <h5 className="text-black-50">Order Code</h5>
            <p>{orderCode}</p>
          </div>
          <div>
            <h5 className="text-black-50">Payment</h5>
            <p>{paymentMethod || "Visa"}</p>
          </div>
          <div>
            <h5 className="text-black-50">Address</h5>
            <p>{address || "Donde vive Mathias"}</p>
          </div>
        </div>
      </section>
      <hr className="mb-3" />

      <section>
        {cartItems.length > 0 &&
          cartItems.map((item) => (
            <SummaryCartItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              img={item.img}
              quantity={item.quantity}
              unitsInStock={item.unitsInStock}
            />
          ))}
      </section>

      <section>
        <div className="d-flex justify-content-between">
          <p>Subtotal</p>
          <p>${total}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Express Shipping</p>
          <p>${shipping}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Taxes</p>
          <p>${taxes}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Discount (SAVE{discount})</p>
          <p className="text-success">
            -({discount})% {calculateDiscount(discount, total)}
          </p>
        </div>
      </section>
      <hr className="mb-3" />

      <section>
        <div className="d-flex justify-content-between">
          <h4 className="h5">Total</h4>
          <h4>
            <strong>{total}€</strong>
          </h4>
        </div>
      </section>
      <hr className="mb-3" />

      <section>
        <p>
          We&apos;ll send you shipping confirmation when your item(s) are on the
          way! We appreciate your business, and hope you enjoy your purchase
        </p>
      </section>
      <hr className="mb-3" />

      <div className="col col-12 d-flex justify-content-center">
        <ButtonLink page={HOME}>Go home</ButtonLink>
      </div>
    </div>
  );
}

export default withLayout(Summary);
