import React, { useContext } from "react";

import FormContext from "../../../context/form-context";

import CartContext from "../../../context/cart-context";
import SummaryItem from "../../../components/SummaryItem";

function CheckoutSummary() {
  const { data: formData } = useContext(FormContext);
  const { cartItems, total } = useContext(CartContext);
  const customTotal = total;

  return (
    <>
      <div id="purchase-information" className="col col-6">
        <div className=" col sidebar-title mb-4">
          <h2>Checkout Summary</h2>
        </div>
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
        <div className="col sidebar-disccount">
          <hr className="mt-0" />
        </div>
      </div>
      <div className="col col-6 row">
        <h2 className="col col-12 text-center mb-4">Purchase Information</h2>
        <div className="col col-12 col-md-6">
          <h5>User</h5>
          <div>{formData.name}</div>
          <div>
            {formData.phonePrefix} {formData.phone}
          </div>
          <div>{formData.email}</div>
        </div>
        <div className="col col-12 col-md-6">
          <h5>Billing</h5>
          <div>{formData.address}</div>
          <div>{formData.city}</div>
          <div>{formData.postCode}</div>
          <div>{formData.country}</div>
        </div>
        <div className="col sidebar-totals mt-4">
          <h4 className="h5">Total</h4>
          <h4>
            <strong> {customTotal}€</strong>
          </h4>
        </div>
      </div>
    </>
  );
}

export default CheckoutSummary;
