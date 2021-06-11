import React, { useContext } from "react";

import FormContext from "../../../context/form-context";

import CartContext from "../../../context/cart-context";
import SummaryItem from "../../../components/SummaryItem";

import "./CheckoutSummary.scss";

function CheckoutSummary() {
  const { data: formData } = useContext(FormContext);
  const { cartItems, total } = useContext(CartContext);
  const customTotal = total;

  return (
    <div id="summaryWrapper" className="d-flex justify-content-between">
      {/* Left block */}
      <div className="summary-block summary-left col col-12 col-sm-6">
        <div className="summary-title px-3">Your products</div>
        <div className="col col-12 mb-4">
          <hr />
        </div>
        <div className="summary-bottom summary-bottom-left">
          {cartItems.length > 0 &&
            cartItems.map((item) => (
              <SummaryItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                img={item.img}
                quantity={item.quantity}
                unitsInStock={item.unitsInStock}
              />
            ))}
        </div>
      </div>

      {/* Right block */}
      <div className="summary-block summary-right col col-12 col-sm-6">
        <div className="summary-title">Customer details</div>
        <div className="col col-12 p-0 mb-4">
          <hr />
        </div>
        <div className="summary-bottom summary-bottom-right d-flex flex-wrap">
          <div className="summary-step col col-12 col-lg-6">
            <h5 className="summary-subtitle">User details</h5>
            <p className="summary-text">{formData.name}</p>
            <p className="summary-text">{formData.email}</p>
            <p className="summary-text">
              {formData.phonePrefix} {formData.phone}
            </p>
          </div>
          <div className="summary-step col col-12 col-lg-6">
            <h5 className="summary-subtitle">Billing</h5>
            <p className="summary-text">{formData.address}</p>
            <p className="summary-text">{formData.city}</p>
            <p className="summary-text">{formData.postCode}</p>
            <p className="summary-text">{formData.country}</p>
          </div>
          <div className="summary-step">
            <h5 className="summary-subtitle">Total</h5>
            <p className="summary-text">{customTotal}€</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSummary;
