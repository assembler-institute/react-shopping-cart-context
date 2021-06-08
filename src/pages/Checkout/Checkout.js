import React from "react";

import withLayout from "../../hoc/withLayout";

import Sidebar from "../../components/Sidebar";
import CheckoutProfile from "./CheckoutProfile";
import CheckoutBilling from "./CheckoutBilling/CheckoutBilling";

import FormContextProvider from "../../components/ContextComponents/FormContextProvider";

import { BILLING, PROFILE } from "../../utils/constants";

import "./Checkout.scss";

function Checkout({ processStep, cartItems }) {
  return (
    <FormContextProvider>
      <div className="row d-flex">
        {processStep === PROFILE && <CheckoutProfile />}
        {processStep === BILLING && <CheckoutBilling />}
        <Sidebar cartItems={cartItems} />
      </div>
    </FormContextProvider>
  );
}

export default withLayout(Checkout);
