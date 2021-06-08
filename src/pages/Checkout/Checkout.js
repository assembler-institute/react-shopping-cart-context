import React from "react";

import withLayout from "../../hoc/withLayout";

import Sidebar from "../../components/Sidebar";
import CheckoutProfile from "./CheckoutProfile";
import CheckoutPayment from "./CheckoutPayment";

import FormContextProvider from "../../components/ContextComponents/FormContextProvider";

import { PROFILE, PAYMENT } from "../../utils/constants";

import "./Checkout.scss";

function Checkout({ processStep, cartItems }) {
  return (
    <FormContextProvider>
      <div className="row d-flex checkout">
        {processStep === PROFILE && <CheckoutProfile />}
        {/* {processStep === BILLING && <CheckoutBilling />} */}
        {processStep === PAYMENT && <CheckoutPayment />}
        {/* {processStep === SUMMARY && <CheckoutSummary />} */}
        <Sidebar cartItems={cartItems} />
      </div>
    </FormContextProvider>
  );
}

export default withLayout(Checkout);
