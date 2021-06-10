/* eslint-disable no-console */
import React, { useEffect, useState } from "react";

import withLayout from "../../hoc/withLayout";

import ProcessBar from "../../components/ProcessBar";
import Sidebar from "../../components/Sidebar";
import CheckoutProfile from "./CheckoutProfile";
import CheckoutPayment from "./CheckoutPayment";
import CheckoutBilling from "./CheckoutBilling/CheckoutBilling";

import FormContextProvider from "../../components/ContextComponents/FormContextProvider";

import { PROFILE, BILLING, PAYMENT } from "../../utils/constants";

import "./Checkout.scss";

function Checkout({ processStep, cartItems }) {
  const [processCompletedFlags, setProcessCompletedFlags] = useState({
    profile: false,
    billing: false,
    payment: false,
  });

  useEffect(() => {
    console.log(processCompletedFlags);
  }, [processCompletedFlags]);

  return (
    <FormContextProvider>
      <div className="row d-flex">
        <div className="col col-8">
          <ProcessBar processCompletedFlags={processCompletedFlags} />
          {processStep === PROFILE && (
            <CheckoutProfile
              setProcessCompletedFlags={setProcessCompletedFlags}
            />
          )}
          {processStep === BILLING && (
            <CheckoutBilling
              setProcessCompletedFlags={setProcessCompletedFlags}
            />
          )}
          {processStep === PAYMENT && (
            <CheckoutPayment
              setProcessCompletedFlags={setProcessCompletedFlags}
            />
          )}
        </div>
        <div id="sidebar" className="col col-4">
          <Sidebar cartItems={cartItems} />
        </div>
      </div>
    </FormContextProvider>
  );
}

export default withLayout(Checkout);
