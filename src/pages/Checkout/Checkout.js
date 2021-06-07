import React from "react";

import withLayout from "../../hoc/withLayout";

import Sidebar from "../../components/Sidebar";
import CheckoutProfile from "./CheckoutProfile";

import FormContextProvider from "../../components/ContextComponents/FormContextProvider";

import { PROFILE } from "../../utils/constants";

import "./Checkout.scss";

function Checkout({ processStep, cartItems }) {
  return (
    <FormContextProvider>
      <div className="row d-flex">
        {processStep === PROFILE && <CheckoutProfile />}
        <Sidebar cartItems={cartItems} />
      </div>
    </FormContextProvider>
  );
}

export default withLayout(Checkout);
